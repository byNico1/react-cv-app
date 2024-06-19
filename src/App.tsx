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
import ChangeLayout from "./components/resultSheet/ChangeLayout";
import ChangeBgColor from "./components/resultSheet/ChangeBgColor";

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

  const [bgColor, setBgColor] = useState("#2E373D");
  const [layoutShift, setLayoutShift] = useState<"vertical" | "left" | "right">(
    "vertical"
  );

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

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
  };

  const handleLayoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value === "vertical" ||
      e.target.value === "left" ||
      e.target.value === "right"
    ) {
      setLayoutShift(e.target.value);
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
        <div>
          <GeneralInfo personData={[personFullData, setPersonFullData]} />
          <AccordionCustomStyles
            personEducation={[personEducationData, setPersonEducationData]}
            personWork={[personPracticalData, setPersonPracticalData]}
            submitToFullData={submitToFullData}
            personFullData={personFullData}
          />
        </div>

        <div>
          <ChangeLayout
            bgColor={bgColor}
            layoutShift={layoutShift}
            handleLayoutChange={handleLayoutChange}
          />
          <ChangeBgColor
            bgColor={bgColor}
            handleColorChange={handleColorChange}
          />
        </div>
      </div>

      <SheetContainer
        personFullData={personFullData}
        bgColor={bgColor}
        layoutShift={layoutShift}
      />
    </>
  );
}

export default App;
