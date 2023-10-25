import { Button, ButtonGroup, Input } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export interface ISearchBarProps {
    search: string;
    onSearchChange: (value: string) => void;
    mode: 'first100' | 'all';
    onModeChange: (mode: 'first100' | 'all') => void;
}

export const SearchBar: React.FC<ISearchBarProps> = ({ search, onSearchChange, mode, onModeChange }) => (
    <div className="flex justify-center w-full">
        <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search your favorite song"
            labelPlacement="outside"
            startContent={
                <MagnifyingGlassIcon className="w-6 h-6" />
            }
        />

        <ButtonGroup variant="flat" color="success" className="ml-8">
            <Button variant={mode === 'first100' ? 'shadow' : 'flat'} onClick={() => onModeChange('first100')}>First 100's</Button>
            <Button variant={mode === 'all' ? 'shadow' : 'flat'} onClick={() => onModeChange('all')}>All</Button>
        </ButtonGroup>
    </div>
);