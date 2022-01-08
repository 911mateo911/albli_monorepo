export interface InputProps {
    onChange: (value: string) => void;
    value: string;
    name: string;
    id?: string;
    type?: 'text' | 'number';
    placeholder?: string;
}
