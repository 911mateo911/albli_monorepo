export interface InputProps {
    onChange: (value: string) => void;
    value: string;
    name: string;
    id?: string;
    type?: 'text' | 'number';
    className?: string;
    validateOn?: 'change' | 'blur'
    pattern?: RegExp;
    placeholder?: string;
    required?: boolean;
    onError?: (name: string) => void;
    textArea?: boolean;
    textAreaClassName?: string;
}
