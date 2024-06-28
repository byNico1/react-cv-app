import { z } from "zod";

export const schoolSchema = z.object({
  schoolName: z.string().min(1),
  degree: z.string().min(1),
  startDateEducation: z.string(),
  endDateEducation: z.string(),
  location: z.string(),
});

export const workSchema = z.object({
  id: z.string().min(1).uuid(),
  companyName: z.string().min(1),
  positionTitle: z.string().min(1),
  responsabilities: z.string(),
  startDateJob: z.string(),
  endDateJob: z.string(),
});
