import "./App.css";

import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
import SelectToEdit from "./components/resultSheet/SelectToEdit";
import { exampleData } from "./utils/exampleData";
import ExampleDataHandlers from "./components/ExampleDataHandlers";

function App() {
  const [personFullData, setPersonFullData] =
    useState<PersonFullDataInterface>(exampleData);

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

  const [editOption, setEditOption] = useState<"info" | "styles">("info");
  const [bgColor, setBgColor] = useState("#2E373D");
  const [layoutShift, setLayoutShift] = useState<"vertical" | "left" | "right">(
    "vertical"
  );
  const sheetRef = useRef<HTMLDivElement>(null);

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

  const handleEditOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "info" || e.target.value === "styles") {
      setEditOption(e.target.value);
    }
  };

  const generatePDF = async () => {
    if (sheetRef.current) {
      const canvas = await html2canvas(sheetRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "cm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("sheet.pdf");
    }
  };

  return (
    <div className="grid 2xl:grid-cols-[400px,_minmax(0,_1fr)] gap-8 items-start">
      <div>
        <div className="p-5 shadow-md rounded-md mb-5">
          <SelectToEdit
            editOption={editOption}
            handleEditOption={handleEditOption}
          />

          <button
            onClick={generatePDF}
            className="mt-5 bg-blue-500 text-white p-2 rounded"
          >
            Download as PDF
          </button>
        </div>

        <ExampleDataHandlers setPersonFullData={setPersonFullData} />

        {editOption === "info" ? (
          <div>
            <GeneralInfo personData={[personFullData, setPersonFullData]} />
            <AccordionCustomStyles
              personEducation={[personEducationData, setPersonEducationData]}
              personWork={[personPracticalData, setPersonPracticalData]}
              submitToFullData={submitToFullData}
              personFullData={personFullData}
            />
          </div>
        ) : (
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
        )}
      </div>

      <SheetContainer
        ref={sheetRef}
        personFullData={personFullData}
        bgColor={bgColor}
        layoutShift={layoutShift}
      />
    </div>
  );
}

export default App;
