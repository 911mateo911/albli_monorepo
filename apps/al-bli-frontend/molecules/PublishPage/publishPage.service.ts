import { BehaviorSubject } from 'rxjs';
import { ImageType } from '@al-bli/albli-ui';

export class PublishPageService {
    private static _lazy: PublishPageService;

    static get instance(): PublishPageService {
        if (!PublishPageService._lazy) {
            PublishPageService._lazy = new PublishPageService();
        }

        return PublishPageService._lazy;
    }

    readonly photos = new BehaviorSubject<ImageType[]>([]);

    get formPhotos(): ImageType[] {
        return this.photos.getValue();
    }

    // TODO: get from authentication (SUPABASE OR MONGODB?)
    name = new BehaviorSubject<string>('');
    email = new BehaviorSubject<string>('');
    address = new BehaviorSubject<string>('');
}

export const PublishPageServiceInstance = PublishPageService.instance;
