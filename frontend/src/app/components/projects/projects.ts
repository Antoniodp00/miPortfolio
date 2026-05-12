import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/portfolio.models';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { AnimateSectionHeaderDirective } from '../../directives/animate-section-header.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatChipsModule, AnimateOnScrollDirective, AnimateSectionHeaderDirective, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  private svc = inject(PortfolioService);
  protected i18n = inject(I18nService);
  projects = signal<Project[]>([]);
  activeFilter = signal('Todos');

  categories = computed(() => {
    const lang = this.i18n.lang();
    const cats = [...new Set(this.projects().map(p => p.category))];
    return ['Todos', ...cats];
  });

  /** Display label for a category (localized) */
  catLabel(cat: string): string {
    if (cat === 'Todos') return this.i18n.t('projects.todos');
    if (this.i18n.lang() === 'en') {
      const match = this.projects().find(p => p.category === cat);
      return match?.category_en ?? cat;
    }
    return cat;
  }

  filtered = computed(() => {
    const list = this.activeFilter() === 'Todos'
      ? this.projects()
      : this.projects().filter(p => p.category === this.activeFilter());
    return list;
  });

  ngOnInit() {
    this.svc.getProjects().subscribe(p => this.projects.set(p));
  }
}
