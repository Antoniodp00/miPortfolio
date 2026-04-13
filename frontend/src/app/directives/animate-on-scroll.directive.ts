import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({ selector: '[appAnimateOnScroll]', standalone: true })
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() delay = 0;
  @Input() animFrom: 'bottom' | 'left' | 'right' | 'scale' = 'bottom';
  private trigger?: ScrollTrigger;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.set(el, {
      opacity: 0,
      y: this.animFrom === 'bottom' ? 32 : 0,
      x: this.animFrom === 'left' ? -32 : this.animFrom === 'right' ? 32 : 0,
      scale: this.animFrom === 'scale' ? 0.92 : 1,
    });

    this.trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.65,
          delay: this.delay / 1000,
          ease: 'power2.out',
        });
      },
    });
  }

  ngOnDestroy() {
    this.trigger?.kill();
  }
}
