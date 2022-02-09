export interface ImageType extends File {
    preview: string;
}

export interface ImagePickerProps {
    // TODO: maybe add filter functionality
    onChange: (values: ImageType[]) => void;
    className?: string;
}
