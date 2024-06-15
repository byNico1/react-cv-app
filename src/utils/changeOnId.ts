import React from "react";
import {
  PersonDataOptions,
  PersonDataState,
  PersonFullDataInterface,
} from "./types/dataInterfaces";

export function changeOnId<
  T extends PersonFullDataInterface | PersonDataOptions
>(
  e: React.ChangeEvent<HTMLInputElement>,
  personData: PersonDataState<T>,
  id: keyof T | keyof PersonFullDataInterface["generalInfo"]
) {
  const [personArrayData, setPersonArrayData] = personData;

  if ("generalInfo" in personArrayData) {
    if (id === "name" || id === "email" || id === "phone") {
      setPersonArrayData({
        ...personArrayData,
        generalInfo: {
          ...personArrayData.generalInfo,
          [id]: e.target.value,
        },
      });
      return;
    }
  }

  setPersonArrayData({
    ...personArrayData,
    [id]: e.target.value,
  });
}
