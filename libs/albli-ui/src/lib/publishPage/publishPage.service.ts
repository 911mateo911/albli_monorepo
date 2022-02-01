import { BehaviorSubject } from 'rxjs';
import { ImageType } from '../imagePicker';
import { PreferredContactType } from './publishPage.interface';
import imageCompression from 'browser-image-compression';
import { FormSteps } from '.';

class PublishPageService {
    private static _lazy: PublishPageService;

    static get instance(): PublishPageService {
        if (!PublishPageService._lazy) {
            PublishPageService._lazy = new PublishPageService();
        }

        return PublishPageService._lazy;
    }

    photos = new BehaviorSubject<ImageType[]>([]);
    // pipe from here in order to compress the images while you are waiting on the verify form
    // so they are ready for deployment
    formStep = new BehaviorSubject<FormSteps>('Fill Form');
    isSubmitting = new BehaviorSubject<boolean>(false);
    processedPhotos = new BehaviorSubject<File[]>([]);
    imageProcessingProgress = new BehaviorSubject<number>(0);
    // TODO: get from authentication (SUPABASE OR MONGODB?)
    name = new BehaviorSubject<string>('');
    email = new BehaviorSubject<string>('');
    preferrredContact = new BehaviorSubject<PreferredContactType>('Whatsapp');
    address = new BehaviorSubject<string>('');

    compressImages(): void {
        Promise.all(this.photos.getValue()
            .map(photo => Promise.resolve(
                imageCompression(photo, {
                    onProgress: this.imageProcessingProgress.next
                }))
            )
        ).then(this.processedPhotos.next);
    }

    get formPhotos(): ImageType[] {
        return this.photos.getValue();
    }
}

export const PublishPageServiceInstance = PublishPageService.instance;
