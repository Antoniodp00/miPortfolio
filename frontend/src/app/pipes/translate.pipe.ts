import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from '../services/i18n.service';
import { Lang } from '../i18n/translations';

@Pipe({ name: 'translate', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private i18n = inject(I18nService);
  private lastKey?: string;
  private lastLang?: Lang;
  private lastValue: string = '';

  transform(key: string): string {
    const lang = this.i18n.lang();
    if (key === this.lastKey && lang === this.lastLang) {
      return this.lastValue;
    }
    this.lastKey = key;
    this.lastLang = lang;
    this.lastValue = this.i18n.t(key);
    return this.lastValue;
  }
}
