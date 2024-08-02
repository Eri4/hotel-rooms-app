import React from 'react';
import PropertyCard from "./PropertyCardComponent.tsx";
import Property from "../types/types.ts";

interface PropertyListProps {
    properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
            {properties.length === 0 && (
                <p className="col-span-full text-center text-gray-500 text-lg py-8">No properties found.</p>
            )}
        </div>
    );
};

export default PropertyList;