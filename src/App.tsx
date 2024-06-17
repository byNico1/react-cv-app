import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import AccordionCustomStyles from "./components/Accordion/AccordionCustomStyles";
import GeneralInfo from "./components/GeneralInfo";
import {
  PersonEducationData,
  PersonFullDataInterface,
  PersonWorkData,
} from "./utils/types/dataInterfaces";
import {
  defaultEducationData,
  defaultWorkData,
} from "./utils/defaultsDataConsts";
import SheetContainer from "./components/resultSheet/SheetContainer";

function App() {
  const [personFullData, setPersonFullData] = useState<PersonFullDataInterface>(
    {
      generalInfo: {
        name: "",
        email: "",
        phone: "",
      },
      schools: [],
      companys: [],
    }
  );

  const [personEducationData, setPersonEducationData] =
    useState<PersonEducationData>({
      id: "",
      schoolName: "",
      degree: "",
      startDateEducation: "",
      endDateEducation: "",
      location: "",
      closed: true,
    });

  const [personPracticalData, setPersonPracticalData] =
    useState<PersonWorkData>({
      id: "",
      companyName: "",
      positionTitle: "",
      responsabilities: "",
      startDateJob: "",
      endDateJob: "",
      closed: true,
    });

  useEffect(() => {
    console.log(personFullData.generalInfo.name);
    console.log(personFullData.generalInfo.email);
    console.log(personFullData.generalInfo.phone);
    console.log(personFullData);
  }, [personFullData]);

  useEffect(() => {
    console.log(personEducationData);
  }, [personEducationData]);

  const submitToFullData = (
    container: "schools" | "companys",
    data?: Omit<PersonWorkData | PersonEducationData, "closed">,
    dataId?: string
  ): void | PersonWorkData | PersonEducationData => {
    if (dataId && data) {
      const indexOfData = personFullData[container].findIndex(
        (objectData) => objectData.id === dataId
      );

      console.log(indexOfData);

      if (indexOfData >= 0) {
        const updatedArray = personFullData[container].map((item, index) =>
          index === indexOfData ? { ...item, ...data } : item
        );
        setPersonFullData({
          ...personFullData,
          [container]: updatedArray,
        });
      }
    } else {
      const dataToSave: Omit<PersonEducationData | PersonWorkData, "closed"> = {
        id: uuidv4(),
        ...(container === "schools" ? defaultEducationData : defaultWorkData),
      };

      setPersonFullData({
        ...personFullData,
        [container]: [...personFullData[container], dataToSave],
      });

      if (container === "schools") {
        return {
          ...dataToSave,
          closed: false,
        } as PersonEducationData;
      } else {
        return {
          ...dataToSave,
          closed: false,
        } as PersonWorkData;
      }
    }
  };

  return (
    <>
      <GeneralInfo personData={[personFullData, setPersonFullData]} />
      <AccordionCustomStyles
        personEducation={[personEducationData, setPersonEducationData]}
        personWork={[personPracticalData, setPersonPracticalData]}
        submitToFullData={submitToFullData}
        personFullData={personFullData}
      />

      <SheetContainer personFullData={personFullData} />
    </>
  );
}

export default App;
