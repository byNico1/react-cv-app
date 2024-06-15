import { PersonEducationData, PersonWorkData } from "./types/dataInterfaces";

export const defaultEducationData: Omit<PersonEducationData, "closed" | "id"> =
  {
    schoolName: "",
    degree: "",
    startDateEducation: "",
    endDateEducation: "",
    location: "",
  };

export const defaultWorkData: Omit<PersonWorkData, "closed" | "id"> = {
  companyName: "",
  positionTitle: "",
  responsabilities: "",
  startDateJob: "",
  endDateJob: "",
};
