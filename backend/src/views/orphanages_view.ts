import Orphanage from '../models/Orphanage';
import imagesView from './images_view';

export default {
    render(orphanage: Orphanage){
        return {

            id: orphanage.id,
            name: orphanage.name,
            whatsapp: orphanage.whatsapp,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,                              
            pending: orphanage.pending,                              
            images: imagesView.renderMany(orphanage.images)
        };
    },

    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage));
    }
}