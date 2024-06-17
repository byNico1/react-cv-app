import { useState } from "react";
import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";
import SheetTitleSection from "./SheetTitleSection";
import ChangeBgColor from "./ChangeBgColor";
import SheetEducation from "./SheetEducation";
import SheetWork from "./SheetWork";

interface Props {
  personFullData: PersonFullDataInterface;
}

const SheetContainer = ({ personFullData }: Props) => {
  const [bgColor, setBgColor] = useState("#2E373D");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
  };

  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-[300px_minmax(0,_1fr)]">
      <ChangeBgColor bgColor={bgColor} handleColorChange={handleColorChange} />
      <section className="sheet-container pb-5 min-h-[600px]">
        <SheetTitleSection
          personBasicData={personFullData.generalInfo}
          bgColor={bgColor}
        />

        <div className="px-14 mt-10">
          <SheetEducation
            personEducation={personFullData.schools}
            bgColor={bgColor}
          />
        </div>

        <div className="px-14 mt-10">
          <SheetWork personWork={personFullData.companys} bgColor={bgColor} />
        </div>
      </section>
    </div>
  );
};

export default SheetContainer;
