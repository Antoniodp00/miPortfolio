import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { PortfolioService } from '../../services/portfolio';
import { Skill } from '../../models/portfolio.models';
import { AnimateSectionHeaderDirective } from '../../directives/animate-section-header.directive';
import { I18nService } from '../../services/i18n.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatChipsModule, AnimateSectionHeaderDirective, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  private svc = inject(PortfolioService);
  protected i18n = inject(I18nService);
  skills = signal<Skill[]>([]);
  activeCategory = signal('Todos');

  categories = computed(() => {
    const cats = [...new Set(this.skills().map(s => s.category))];
    return ['Todos', ...cats];
  });

  filtered = computed(() =>
    this.activeCategory() === 'Todos'
      ? this.skills()
      : this.skills().filter(s => s.category === this.activeCategory())
  );

  catLabel(cat: string): string {
    if (cat === 'Todos') return this.i18n.t('skills.todos');
    if (this.i18n.lang() === 'en') {
      const match = this.skills().find(s => s.category === cat);
      return match?.category_en ?? cat;
    }
    return cat;
  }

  ngOnInit() {
    this.svc.getSkills().subscribe(s => this.skills.set(s));
  }
}
