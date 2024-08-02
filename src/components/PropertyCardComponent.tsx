import React from 'react';

interface Property {
    id: number;
    name: string;
    description: string;
}

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="p-1 bg-blue-500"></div>
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{property.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
            </div>
            <div className="px-8 py-4 bg-gray-100 border-t border-gray-200">
                <button className="text-blue-500 hover:text-blue-600 text-sm font-semibold focus:outline-none">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;