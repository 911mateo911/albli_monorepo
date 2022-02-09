import { BehaviorSubject } from 'rxjs';
import { ImageType } from '@al-bli/albli-ui';
import { PreferredContactType } from './publishPage.interface';
import imageCompression from 'browser-image-compression';
import { FormSteps } from './publishPage.interface';

class PublishPageService {
    private static _lazy: PublishPageService;

    static get instance(): PublishPageService {
        if (!PublishPageService._lazy) {
            PublishPageService._lazy = new PublishPageService();
        }

        return PublishPageService._lazy;
    }

    images = new BehaviorSubject<ImageType[]>([]);
    // pipe from here in order to compress the images while you are waiting on the verify form
    // so they are ready for deployment
    formStep = new BehaviorSubject<FormSteps>('Fill Form');
    isSubmitting = new BehaviorSubject<boolean>(false);
    compressedImages = new BehaviorSubject<File[]>([]);
    imageProcessingProgress = new BehaviorSubject<number>(0);
    // TODO: get from authentication (SUPABASE OR MONGODB?)
    name = new BehaviorSubject<string>('');
    email = new BehaviorSubject<string>('');
    preferrredContact = new BehaviorSubject<PreferredContactType>('Whatsapp');
    address = new BehaviorSubject<string>('');

    compressImages(): void {
        Promise.all(this.images.getValue()
            .map(photo => Promise.resolve(
                imageCompression(photo, {
                    onProgress: this.imageProcessingProgress.next
                }))
            )
        ).then(this.compressedImages.next);
    }

    get formPhotos(): ImageType[] {
        return this.images.getValue();
    }

    removeImage(imagePreviewString: string): void {
        const filteredImages = this.images.value.filter(({ preview }) => preview !== imagePreviewString);

        this.images.next(filteredImages);

        URL.revokeObjectURL(imagePreviewString);
    }
}

export const PublishPageServiceInstance = PublishPageService.instance;
