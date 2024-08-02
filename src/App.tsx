import React, { useState, useEffect } from 'react';
import FilterInput from "./components/FilterInputComponent.tsx";
import PropertyList from "./components/PropertyListComponent.tsx";
import propertyData from './propertyData.json';
import Property from "./types/types.ts";

const App: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        setProperties(propertyData);
        setFilteredProperties(propertyData);
    }, []);

    //Handle filtering side effects here. you can use name, description or code for searching.
    useEffect(() => {
        const filtered = properties.filter(
            (property) =>
                property.name.toLowerCase().includes(filterText.toLowerCase()) ||
                property.description.toLowerCase().includes(filterText.toLowerCase()) ||
                property.code.toLowerCase().includes(filterText.toLowerCase())
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