export interface DropdownInputProps {
    selectedValue: string | null;
    onChange: (value: string) => void;
    values: string[];
    className?: string;
    id?: string;
}
