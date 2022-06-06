export interface StrictSectionHeader {
  supertitle: string;
  title: string;
  subtitle: string;
}

export type SectionHeader = Partial<StrictSectionHeader>;
