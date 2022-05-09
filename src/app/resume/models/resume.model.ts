// models
import { Item } from '../../shared/models';

export interface ResumeSection<T> {
  title: string;
  items: T[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  beginDate: string;
  endDate: string;
  qualifications: string[];
  achievements?: string[];
}

export interface ProjectItem {
  date: string;
  name: string;
  description: string;
}

export interface EducationItem {
  date: string;
  degree: string;
  minor?: string;
  institution: string;
}

export interface CertificationItem {
  date: string;
  name: string;
}

export interface Resume {
  fullName: string;
  role: string;
  roleType: string;
  summary: string;
  contact: ResumeSection<Item<string>>;
  skills: ResumeSection<Item>;
  experience: ResumeSection<ExperienceItem>;
  projects: ResumeSection<ProjectItem>;
  education: ResumeSection<EducationItem>;
  certifications: ResumeSection<CertificationItem>;
  certificationCerts: Item<string>[];
}
