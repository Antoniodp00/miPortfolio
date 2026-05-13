export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string; title_en?: string;
  subtitle: string; subtitle_en?: string;
  email: string;
  phone: string;
  location: string; location_en?: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
  cvUrl?: string;
  formspreeId?: string;
}

export interface Skill {
  id?: number;
  name: string;
  category: string; category_en?: string;
  level: number;
  icon: string;
}

export interface ProjectMetric {
  label: string;
  label_en?: string;
  value: string;
}

export type ProjectStatus = 'production' | 'completed' | 'wip' | 'archived';

export interface Project {
  id: number;
  title: string; title_en?: string;
  description: string; description_en?: string;
  highlight?: string; highlight_en?: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string; category_en?: string;
  featured: boolean;
  metrics?: ProjectMetric[];
  status?: ProjectStatus;
  year?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string; role_en?: string;
  period: string; period_en?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string; description_en?: string;
  achievements: string[]; achievements_en?: string[];
  companyUrl?: string;
  logoUrl?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string; degree_en?: string;
  field: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string; description_en?: string;
  logoUrl?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
