import { Dispatch, SetStateAction } from "react";
import { exampleData } from "../utils/exampleData";
import { PersonFullDataInterface } from "../utils/types/dataInterfaces";

interface Props {
  setPersonFullData: Dispatch<SetStateAction<PersonFullDataInterface>>;
}

function ExampleDataHandlers({ setPersonFullData }: Props) {
  const loadExampleInfo = () => {
    setPersonFullData(exampleData);
  };

  const clearExampleInfo = () => {
    setPersonFullData({
      generalInfo: {
        name: "",
        email: "",
        phone: "",
      },
      schools: [],
      companys: [],
    });
  };
  return (
    <div className="flex gap-5 items-center justify-center flex-wrap p-5 shadow-md rounded-md mb-5">
      <button
        onClick={clearExampleInfo}
        className="bg-black text-white p-2 rounded"
      >
        Clear All Info
      </button>
      <button
        onClick={loadExampleInfo}
        className="bg-teal-900 text-white p-2 rounded"
      >
        Load Example Info
      </button>
    </div>
  );
}

export default ExampleDataHandlers;
