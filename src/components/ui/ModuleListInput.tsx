import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface ModuleItem {
    title: string;
    description: string;
}

interface ModuleListInputProps {
    modules: ModuleItem[];
    onModulesChange: (newModules: ModuleItem[]) => void;
    className?: string;
}

const ModuleListInput: React.FC<ModuleListInputProps> = ({
    modules = [],
    onModulesChange,
    className
}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleAddModule = () => {
        if (newTitle.trim()) {
            if (editingIndex !== null) {
                // Update existing
                const updatedModules = [...modules];
                updatedModules[editingIndex] = { title: newTitle.trim(), description: newDescription.trim() };
                onModulesChange(updatedModules);
                setEditingIndex(null);
            } else {
                // Add new
                onModulesChange([...modules, { title: newTitle.trim(), description: newDescription.trim() }]);
            }
            setNewTitle('');
            setNewDescription('');
        }
    };

    const handleEditModule = (index: number) => {
        const moduleToEdit = modules[index];
        setNewTitle(moduleToEdit.title);
        setNewDescription(moduleToEdit.description);
        setEditingIndex(index);
    };

    const handleRemoveModule = (index: number) => {
        const newModules = modules.filter((_, i) => i !== index);
        onModulesChange(newModules);
        if (editingIndex === index) {
            setEditingIndex(null);
            setNewTitle('');
            setNewDescription('');
        }
    };

    const handleCancelEdit = () => {
        setEditingIndex(null);
        setNewTitle('');
        setNewDescription('');
    };

    return (
        <div className={className}>
            <Card className="mb-4 border-dashed border-2 bg-muted/30">
                <CardContent className="p-4 space-y-3">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase text-muted-foreground">{editingIndex !== null ? 'Edit Module' : 'New Module'}</label>
                        <Input
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder="Module Title (e.g., 'Introduction to Photoshop')"
                            className="bg-background"
                        />
                        <Textarea
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            placeholder="Module Description"
                            rows={2}
                            className="bg-background resize-none"
                        />
                    </div>
                    <div className="flex gap-2 justify-end">
                        {editingIndex !== null && (
                            <Button type="button" variant="ghost" size="sm" onClick={handleCancelEdit}>
                                Cancel
                            </Button>
                        )}
                        <Button
                            type="button"
                            onClick={handleAddModule}
                            disabled={!newTitle.trim()}
                            size="sm"
                        >
                            {editingIndex !== null ? <Save className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                            {editingIndex !== null ? 'Update Module' : 'Add Module'}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {modules.length > 0 ? (
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-3 rounded-lg border transition-colors ${editingIndex === index ? 'bg-primary/5 border-primary' : 'bg-card hover:border-primary/50'}`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-semibold text-sm text-foreground">{module.title}</h4>
                                <div className="flex gap-1 shrink-0">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="h-7 w-7"
                                        onClick={() => handleEditModule(index)}
                                    >
                                        <Edit2 className="h-3.5 w-3.5" />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
                                        onClick={() => handleRemoveModule(index)}
                                    >
                                        <Trash2 className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">{module.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-xs text-center text-muted-foreground py-4 italic">No modules added yet.</p>
            )}
        </div>
    );
};

export default ModuleListInput;
