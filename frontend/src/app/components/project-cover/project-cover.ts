import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-cover',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cover" [class]="'cover-' + variant()" role="img" [attr.aria-label]="'Cover for ' + title()">
      <div class="cover-grid"></div>
      <div class="cover-glow"></div>
      <span class="cover-monogram">{{ monogram() }}</span>
      <div class="cover-stack">
        @for (t of techPreview(); track t) {
          <span class="cover-chip">{{ t }}</span>
        }
      </div>
    </div>
  `,
  styles: [`
    .cover {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #2563eb 100%);
      margin-bottom: 18px;
      isolation: isolate;
    }

    .cover-0 { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); }
    .cover-1 { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); }
    .cover-2 { background: linear-gradient(135deg, #0f1c4d 0%, #1d4ed8 100%); }
    .cover-3 { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 60%, #60a5fa 100%); }
    .cover-4 { background: linear-gradient(135deg, #172554 0%, #2563eb 100%); }
    .cover-5 { background: linear-gradient(135deg, #1e293b 0%, #2563eb 100%); }

    .cover-grid {
      position: absolute; inset: 0; z-index: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
      background-size: 28px 28px;
      mask-image: radial-gradient(circle at center, black 30%, transparent 75%);
    }

    .cover-glow {
      position: absolute;
      width: 320px;
      height: 320px;
      top: -40%;
      right: -20%;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(96,165,250,0.4) 0%, transparent 70%);
      filter: blur(40px);
      z-index: 0;
    }

    .cover-monogram {
      position: relative;
      z-index: 1;
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: clamp(3rem, 6vw, 4.4rem);
      color: #fff;
      letter-spacing: -0.04em;
      line-height: 1;
      text-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }

    .cover-stack {
      position: absolute;
      bottom: 12px;
      left: 14px;
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      z-index: 1;
    }

    .cover-chip {
      font-size: 0.65rem;
      font-weight: 600;
      color: #e5e7eb;
      background: rgba(255,255,255,0.10);
      border: 1px solid rgba(255,255,255,0.18);
      backdrop-filter: blur(4px);
      padding: 2px 8px;
      border-radius: 100px;
      letter-spacing: 0.02em;
    }
  `]
})
export class ProjectCover {
  title = input.required<string>();
  technologies = input<string[]>([]);
  index = input<number>(0);

  variant = computed(() => this.index() % 6);

  monogram = computed(() => {
    const t = this.title().trim();
    const stripped = t.replace(/[—–-].*$/, '').trim();
    const words = stripped.split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return stripped.slice(0, 2).toUpperCase();
  });

  techPreview = computed(() => this.technologies().slice(0, 3));
}
