import { Dispatch, SetStateAction } from "react";

export interface CommonPersonData {
  id: string;
  closed?: boolean;
}

export interface PersonWorkData extends CommonPersonData {
  companyName: string;
  positionTitle: string;
  responsabilities: string;
  startDateJob: string;
  endDateJob: string;
}

// Define the type for the education data
export interface PersonEducationData extends CommonPersonData {
  schoolName: string;
  degree: string;
  startDateEducation: string;
  endDateEducation: string;
  location: string;
}

export type PersonDataOptions = PersonWorkData | PersonEducationData;

interface GeneralInfo {
  name: string;
  email: string;
  phone: string;
}

export interface PersonFullDataInterface {
  generalInfo: GeneralInfo;
  schools: Omit<PersonEducationData[], "closed">;
  companys: Omit<PersonWorkData[], "closed">;
}

export type PersonDataState<
  T extends PersonFullDataInterface | PersonDataOptions
> = [T, Dispatch<SetStateAction<T>>];
