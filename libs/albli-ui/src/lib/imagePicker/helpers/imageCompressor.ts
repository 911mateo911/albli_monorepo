import { ImageType } from "../imagePicker.interface";
import imageCompression from 'browser-image-compression';

export const compressImages = (images: ImageType[], onFinish: (images: File[]) => void): void => {
    const imagesAsPromises = images.map(image => Promise.resolve(imageCompression(image, {})));

    Promise.all(imagesAsPromises).then(onFinish);
}
