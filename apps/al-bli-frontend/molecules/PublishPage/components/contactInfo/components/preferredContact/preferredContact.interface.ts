export interface PreferredContactProps<T> {
    contact: T;
    onClick: (contact: T) => void;
    isActive: boolean
}
