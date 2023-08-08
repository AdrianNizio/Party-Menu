import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'translateDifficulty',
})
export class TranslateDifficultyPipe implements PipeTransform {
    private readonly difficultyTranslationKeysTable: { [key: number]: string } = {
        0: 'Easy',
        1: 'Medium',
        2: 'Hard',
        3: 'Exprert',
    };

    transform(value: number): string {
        return `Difficulties.${this.difficultyTranslationKeysTable[value]}`;
    }
}
