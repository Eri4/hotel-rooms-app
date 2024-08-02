import React, { useState, useEffect } from 'react';
import FilterInput from "./components/FilterInputComponent.tsx";
import PropertyList from "./components/PropertyListComponent.tsx";


interface Property {
    id: number;
    name: string;
    description: string;
}

const App: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        // In a real application, you would fetch this data from an API, also this is just mock data.
        const mockData: Property[] = [
            { id: 1, name: "Luxury Suite", description: "Spacious suite with a beautiful view" },
            { id: 2, name: "Standard Room", description: "Comfortable room for budget travelers" },
            { id: 3, name: "Deluxe Room", description: "Elegant room with modern amenities" },
            { id: 4, name: "Family Room", description: "Large room suitable for families" },
        ];

        setProperties(mockData);
        setFilteredProperties(mockData);
    }, []);

    //Handle filtering side effects here.
    useEffect(() => {
        const filtered = properties.filter(
            (property) =>
                property.name.toLowerCase().includes(filterText.toLowerCase()) ||
                property.description.toLowerCase().includes(filterText.toLowerCase())
        );
        setFilteredProperties(filtered);
    }, [filterText, properties]);

    //I am using tailwind for styling as a preference but also for faster prototyping.
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Hotel Rooms</h1>
                <FilterInput filterText={filterText} setFilterText={setFilterText} />
                <PropertyList properties={filteredProperties} />
            </div>
        </div>
    );
};

export default App;