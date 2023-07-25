import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'secondsToMinutes',
})
export class secondsToMinutes implements PipeTransform {
    transform(value: number): number {
        return value / 60;
    }
}
