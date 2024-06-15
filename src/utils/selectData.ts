import { PersonEducationData, PersonWorkData } from "./types/dataInterfaces";

export function selectData(
  objectData: PersonEducationData[] | PersonWorkData[],
  id: string
): PersonEducationData | PersonWorkData | undefined {
  const selectedData = objectData.find((data) => data.id === id);
  console.log(selectedData);

  return selectedData;
}
