import { getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import User from '../models/User';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
const saltRounds = 10;

import * as Yup from 'yup';

import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';
import mailer from '../modules/mailer';

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

export default {

    async index(request: Request, response: Response){
               
    },

    async show(request: Request, response: Response){
              
    },

    async create(request: Request, response: Response){ 

        const { name, email, password } = request.body;

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required(),
        })

        const userRepository = getRepository(User);

        const userExists = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email })
        .getOne();

        if(userExists)
            return response.status(409).json({message: "User already exists!", token: generateToken({ id: userExists.id})});
        
        bcrypt.genSalt(saltRounds, async function(err: any, salt: any) {
            bcrypt.hash(password, salt, async function(err: any, hash: any) {
          
                const data = {
                    name, email, password: hash
                };

                await schema.validate(data, {
                    abortEarly: false,
                });
                
                const user = userRepository.create(data);

                if(err) 
                    return response.status(500);

                await userRepository.save(user);        
                
                return response.status(201).json({ message: 'Created successfully!', token: generateToken({ id: user.id }) });

            });
        });
    },

    async login(request: Request, response: Response) {

        const { email, password } = request.body;

        const userExists = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email })
        .getOne();
        
        if(!userExists)
            return response.status(409).json({message: "User not found!"});

        bcrypt.compare(password, userExists.password, function(err, result) {
            // result == true
            if(result){                              
                userExists.password = '';
                return response.status(200).json({ userExists, token: generateToken({id: userExists.id}) });
            }
            
            else{
                return response.status(500).json({ message: "Incorrect password!" });
            }

        });
        
    },

    async forgotPassword(request: Request, response: Response) {

        const { email } = request.body;

        const userExists = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email })
        .getOne();

        if(!userExists)
            return response.status(400).send({ message: "User not found!" });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);      

        await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({ passwordResetToken: token, passwordResetExpires: now })
        .where("email = :email", { email: userExists.email })
        .execute();

        mailer.sendMail({
            to: email,
            from: 'thiago25pro@gmail.com',
            subject: "Token to reset password",
            template: 'auth/forgot_password',
            context: { token }
        }, (error) => {
            if(error)
                console.log('error: ', error);
            
            return response.send({ message: 'Token sent' });
        })
    },

    async setNewPassword(request: Request, response: Response) {

        const { token, password } = request.body;

        try{

            bcrypt.genSalt(saltRounds, async function(err: any, salt: any) {
                bcrypt.hash(password, salt, async function(err: any, hash: any) {
              
                    await getConnection()
                    .createQueryBuilder()
                    .update(User)
                    .set({ password: hash })
                    .where("passwordResetToken = :token", { token })
                    .execute();     
    
                    return response.send({ok: true});
                });
            });


        }
        catch(error){
            console.log(error);
        }          
       
    }
}

