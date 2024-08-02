import React from 'react';

interface FilterInputProps {
    filterText: string;
    setFilterText: (text: string) => void;
}
//simple filtering functionality.
const FilterInput: React.FC<FilterInputProps> = ({ filterText, setFilterText }) => {
    return (
        <div className="mb-8">
            <input
                type="text"
                placeholder="Filter by name or description"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
            />
        </div>
    );
};

export default FilterInput;