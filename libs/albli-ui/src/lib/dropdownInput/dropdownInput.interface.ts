export interface DropdownInputProps {
    selectedValue: string | null;
    onChange: (value: string) => void;
    placeholder?: string;
    values: string[];
    className?: string;
    id?: string;
}
