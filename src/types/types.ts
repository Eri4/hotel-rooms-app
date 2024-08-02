export default interface Property {
    id: number;
    name: string;
    description: string;
    code: string;
    standardPax: number;
    maximumPax: number;
    bathrooms: number;
    bedConfigurations: number[];
    amenities: {
        [key: string]: boolean;
    };
    floorArea: number;
    gradeSort: number;
}