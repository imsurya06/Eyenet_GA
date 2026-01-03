import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, X } from 'lucide-react';

interface DynamicListInputProps {
    items: string[];
    onItemsChange: (newItems: string[]) => void;
    placeholder?: string;
    className?: string;
}

const DynamicListInput: React.FC<DynamicListInputProps> = ({
    items = [],
    onItemsChange,
    placeholder = "Add item...",
    className
}) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (inputValue.trim()) {
            onItemsChange([...items, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleRemoveItem = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        onItemsChange(newItems);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddItem();
        }
    };

    return (
        <div className={className}>
            <div className="flex gap-2 mb-3">
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={placeholder}
                    onKeyDown={handleKeyDown}
                    className="flex-grow"
                />
                <Button
                    type="button"
                    onClick={() => handleAddItem()}
                    variant="secondary"
                    className="shrink-0"
                >
                    <Plus className="h-4 w-4 mr-1" /> Add
                </Button>
            </div>

            {items.length > 0 && (
                <ul className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/50 p-2 rounded-md border border-border group">
                            <span className="text-foreground break-words">{item}</span>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemoveItem(index)}
                                className="h-6 w-6 text-muted-foreground hover:text-destructive opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                            >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Remove</span>
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DynamicListInput;
