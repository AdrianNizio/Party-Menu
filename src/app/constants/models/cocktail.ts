const typeProperties = ['Alcohol', 'Food'] as const;
export interface Cocktail {
    title: string;
    ingredients: [
        {
            quantity: string;
            name: string;
        }
    ];
    image: string;
    imageForCreator: string;
    creatoRelevantInfo: {
        garnish: string[];
        glass: string;
        notes: string[];
    };
    preparationTimeInSeconds: number;
    difficulty: number;
    type: typeof typeProperties;
}
