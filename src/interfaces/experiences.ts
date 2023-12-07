export interface IExperience {
  company: string;
  position: string;
  period: string;
  description: string;
  skills?: string[];
  status?: "" | "current" | "past";
}
