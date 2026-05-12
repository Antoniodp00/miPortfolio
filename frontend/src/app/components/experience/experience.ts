import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PortfolioService } from '../../services/portfolio';
import { Experience as ExperienceModel, Education } from '../../models/portfolio.models';
import { AnimateSectionHeaderDirective } from '../../directives/animate-section-header.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, MatIconModule, MatTabsModule, AnimateSectionHeaderDirective, TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements OnInit {
  private svc = inject(PortfolioService);
  protected i18n = inject(I18nService);
  experience = signal<ExperienceModel[]>([]);
  education = signal<Education[]>([]);

  ngOnInit() {
    this.svc.getExperience().subscribe(e => this.experience.set(e));
    this.svc.getEducation().subscribe(e => this.education.set(e));
  }
}
