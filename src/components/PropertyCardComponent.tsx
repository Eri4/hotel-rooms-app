import React, {useState} from 'react';
import Property from "../types/types.ts";

interface PropertyCardProps {
    property: Property;
}

/**
 * Specific detail for each hotel room, more interactivity can be added here.
 */
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300">
            <div className="p-1 bg-blue-500"></div>
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{property.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{property.description}</p>
                <div className="text-sm text-gray-700">
                    <p><strong>Code:</strong> {property.code}</p>
                    <p><strong>Capacity:</strong> {property.standardPax} - {property.maximumPax} guests</p>
                    <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
                </div>
                {isExpanded && (
                    <div className="mt-4 text-sm text-gray-700">
                        <p><strong>Floor Area:</strong> {property.floorArea} sqm</p>
                        <p><strong>Grade:</strong> {property.gradeSort}</p>
                        <p><strong>Bed Configurations:</strong> {property.bedConfigurations.join(', ')}</p>
                        <p><strong>Amenities:</strong> {Object.entries(property.amenities)
                            .filter(([, value]) => value)
                            .map(([key]) => key)
                            .join(', ')}</p>
                    </div>
                )}
            </div>
            <div className="px-8 py-4 bg-gray-100 border-t border-gray-200">
                <button
                    onClick={toggleDetails}
                    className="text-blue-500 hover:text-blue-600 text-sm font-semibold focus:outline-none"
                >
                    {isExpanded ? 'Hide Details' : 'View Details'}
                </button>
            </div>
        </div>
    );
};


export default PropertyCard;