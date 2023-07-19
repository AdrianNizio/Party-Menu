export interface Cocktail {
    title: string;
    ingredients: [{
        quantity: string;
        name: string;
    }];
    image: string;
    imageForCreator: string;
    creator: {
        garnish: string[],
        glass: string;
        notes: string[]
    },
}  