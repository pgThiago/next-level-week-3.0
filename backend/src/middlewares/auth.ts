import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

export default (request: Request, response: Response, next: any) => {
    const authHeader = request.headers.authorization;
    console.log(authHeader);

    if(!authHeader)
        return response.status(401).send({ error: "No token provided!" });

    const parts = authHeader.split(' ');

    if(parts.length !== 2)
        return response.status(401).send({ error: "Token error!" });
    
    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return response.status(401).send({ error: "Token malformatted!" });
    
    jwt.verify(token, authConfig.secret, (err: any, decoded: any) => {
        if(err) return response.status(401).send({ error: "Token invalid!" });

        request.userId = decoded.id;

        return next();
    })

}