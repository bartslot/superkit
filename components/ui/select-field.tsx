import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectFieldProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}

export function SelectField({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  className,
}: SelectFieldProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className={className || "w-full"}>
        <SelectValue defaultValue={value} placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
