import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({ selector: '[appAnimateSectionHeader]', standalone: true })
export class AnimateSectionHeaderDirective implements OnInit, OnDestroy {
  private trigger?: ScrollTrigger;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const host = this.el.nativeElement as HTMLElement;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const targets = host.querySelectorAll('.section-label, h2, p');
    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y: 24 });

    this.trigger = ScrollTrigger.create({
      trigger: host,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.65,
          ease: 'power2.out',
        });
      },
    });
  }

  ngOnDestroy() {
    this.trigger?.kill();
  }
}
