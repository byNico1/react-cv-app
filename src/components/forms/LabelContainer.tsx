import React from "react";
import { changeOnId } from "../../utils/changeOnId";

import {
  PersonDataOptions,
  PersonDataState,
} from "../../utils/types/dataInterfaces";
import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";
import { Textarea } from "@material-tailwind/react";

type Props<T extends PersonDataOptions | PersonFullDataInterface> = {
  type: string;
  content: React.ReactNode;
  id: keyof T | keyof PersonFullDataInterface["generalInfo"];
  autocomplete?: boolean;
  personData: PersonDataState<T>;
};

function isPersonFullDataInterface(
  data: PersonFullDataInterface | PersonDataOptions
): data is PersonFullDataInterface {
  return (data as PersonFullDataInterface).generalInfo !== undefined;
}

function LabelContainer<T extends PersonFullDataInterface | PersonDataOptions>({
  type,
  content,
  id,
  personData,
}: Props<T>) {
  const [personArrayData, setPersonArrayData]: PersonDataState<T> = personData;

  const getValue = (): string => {
    // Use type guard to check if the data is of type PersonFullDataInterface
    if (isPersonFullDataInterface(personArrayData)) {
      if (id in personArrayData.generalInfo) {
        return personArrayData.generalInfo[
          id as keyof PersonFullDataInterface["generalInfo"]
        ] as string;
      }
    }
    return personArrayData[id as keyof T] as string;
  };

  return (
    <div className="my-5">
      {type === "textarea" ? (
        <div className="">
          <Textarea
            label="Responsabilities"
            value={getValue()}
            id={id as string}
            onChange={(e) => changeOnId(e, personData, id)}
          />
        </div>
      ) : (
        <div className="relative w-full min-w-[200px] h-10">
          <input
            onChange={(e) => changeOnId(e, personData, id)}
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            type={type}
            id={id as string}
            value={getValue()}
            pattern={id === "phone" ? "[+]{1}[0-9]{11,14}" : undefined}
          />
          <label
            htmlFor={id as string}
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
          >
            {content}
          </label>
        </div>
      )}
    </div>
  );
}

export default LabelContainer;
