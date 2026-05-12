import { Injectable, signal } from '@angular/core';
import { Lang, translations } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  lang = signal<Lang>((localStorage.getItem('portfolio-lang') as Lang) ?? 'es');

  t(key: string): string {
    return translations[this.lang()][key] ?? key;
  }

  /** Returns obj[field + '_en'] array when lang is EN, else obj[field] array */
  locArr<T>(obj: T, field: keyof T): string[] {
    if (!obj) return [];
    const enKey = (field as string) + '_en';
    if (this.lang() === 'en' && (obj as any)[enKey]) {
      return (obj as any)[enKey] as string[];
    }
    return ((obj as any)[field] ?? []) as string[];
  }

  /** Returns obj[field + '_en'] when lang is EN, else obj[field] */
  loc<T>(obj: T, field: keyof T): string {
    if (!obj) return '';
    const enKey = (field as string) + '_en';
    if (this.lang() === 'en' && (obj as any)[enKey]) {
      return (obj as any)[enKey];
    }
    return (obj as any)[field] ?? '';
  }

  toggle() {
    this.lang.update(l => {
      const next: Lang = l === 'es' ? 'en' : 'es';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });
  }
}
