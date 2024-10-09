import { Animation, createAnimation } from '@ionic/core';

export function myCustomAnimation(el: HTMLElement):Animation {
  return createAnimation()
    .addElement(el)
    .duration(500)
    .fromTo('transform', 'translateX(100%)', 'translateX(0%)')
    .fromTo('opacity', 0, 1);
}
