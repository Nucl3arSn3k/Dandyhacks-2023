export interface SkillType {
  title: string;
  percentageKnown: number;
}

export interface Quest extends SkillType {
  strengths?: SkillType[];
  weaknesses?: SkillType[];
  id: number;
  title: string;
}
