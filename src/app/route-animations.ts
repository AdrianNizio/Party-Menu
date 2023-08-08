import { AnimationGroupMetadata, AnimationQueryMetadata, animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';

export const fader = trigger('routeAnimations', [
    transition('isLeft <=> isRight', [
        group([query(':leave', [animate('600ms ease', style({ opacity: 0 }))]), query(':enter', [animate('600ms ease', style({ opacity: 1 }))])]),
        // Animate the new page in
    ]),
]);

export const stepper = trigger('routeAnimations', [
    transition('isLeft <=> isRight', [
        group([
            query(':enter', [animate('2000ms ease', keyframes([style({ opacity: 0 }), style({ opacity: 0.4 }), style({ opacity: 1 })]))]),
            query(':leave', [animate('2000ms ease', keyframes([style({ opacity: 1 }), style({ opacity: 0.4 }), style({ opacity: 0 })]))]),
        ]),
    ]),
]);

function slideTo(direction: string): (AnimationGroupMetadata | AnimationQueryMetadata)[] {
    const optional = { optional: true };
    return [
        query(
            ':enter, :leave',
            [
                style({
                    [direction]: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                }),
            ],
            optional
        ),
        query(':enter', [style({ [direction]: '-100%' })]),
        group([
            query(':leave', [animate('600ms ease', style({ [direction]: '100%' }))], optional),
            query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))]),
        ]),
        // Normalize the page style... Might not be necessary

        // Required only if you have child animations on the page
        // query(':leave', animateChild()),
        // query(':enter', animateChild()),
    ];
}

export const slider = trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right')),
]);
