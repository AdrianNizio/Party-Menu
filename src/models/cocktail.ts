export interface Cocktail {
    title: string;
    ingredients: [{
        ammount: string;
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