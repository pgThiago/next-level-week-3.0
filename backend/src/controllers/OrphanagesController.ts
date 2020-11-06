import { getRepository, getConnection } from 'typeorm';
import Orphanage from '../models/Orphanage';
import { request, Request, Response } from 'express';

import orphanageView from '../views/orphanages_view';

import * as Yup from 'yup';

export default {

    async index(request: Request, response: Response){
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations: ['images'], where: { pending: true }
        });

        return response.status(200).json(orphanageView.renderMany(orphanages));        
    },

    async show(request: Request, response: Response){
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.status(200).json(orphanageView.render(orphanage));        
    },

    async create(request: Request, response: Response){    
        const {
            name,
            whatsapp,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            pending
        } = request.body;

        const orphanagesRepository = getRepository(Orphanage);

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            name,
            whatsapp,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            pending,
            open_on_weekends: open_on_weekends === 'true',
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            whatsapp: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            pending: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false,
        })

        const orphanage = orphanagesRepository.create(data);

        await orphanagesRepository.save(orphanage);

        return response.status(201).json(orphanage);
    },

    async acceptOrphanage(request: Request, response: Response){

        const { id } = request.params;

        await getConnection()
        .createQueryBuilder()
        .update(Orphanage)
        .set({ pending: true })
        .where("id = :id", { id })
        .execute();

        return response.status(200).json({ ok: true });        
    },
}