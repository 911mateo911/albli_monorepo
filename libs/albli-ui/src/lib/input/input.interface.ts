export interface InputProps {
    onChange: (value: string) => void;
    value: string;
    name: string;
    id?: string;
    type?: 'text' | 'number';
    className?: string;
    error?: boolean;
    placeholder?: string;
    required?: boolean;
}
