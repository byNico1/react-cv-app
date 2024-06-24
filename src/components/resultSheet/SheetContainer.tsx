import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";
import SheetTitleSection from "./SheetTitleSection";
import SheetEducation from "./SheetEducation";
import SheetWork from "./SheetWork";

interface Props {
  personFullData: PersonFullDataInterface;
  bgColor: string;
  layoutShift: "vertical" | "left" | "right";
}

const SheetContainer = ({ personFullData, bgColor, layoutShift }: Props) => {
  const DefineGridTemplateAreas =
    layoutShift === "left"
      ? '"title education" "title work"'
      : layoutShift === "right"
      ? '"education title" "work title"'
      : '"title title" "education education" "work work"';

  const DefineGridTemplateColumns =
    layoutShift === "left"
      ? "0.9fr 1.1fr"
      : layoutShift === "right"
      ? "1.1fr 0.9fr"
      : "1fr";
  const DefineGridTemplateRows =
    layoutShift === "left"
      ? "auto auto"
      : layoutShift === "right"
      ? "auto auto"
      : "auto auto auto";

  return (
    <>
      <section
        className="sheet-container min-h-[650px] max-w-5xl mx-auto w-full"
        style={{
          display: "grid",
          gridTemplateColumns: DefineGridTemplateColumns,
          gridTemplateRows: DefineGridTemplateRows,
          gridTemplateAreas: DefineGridTemplateAreas,
        }}
      >
        <SheetTitleSection
          personBasicData={personFullData.generalInfo}
          bgColor={bgColor}
          layoutShift={layoutShift}
        />

        <div
          className="px-14 mt-10"
          style={{
            gridArea: "education",
          }}
        >
          <SheetEducation
            personEducation={personFullData.schools}
            bgColor={bgColor}
          />
        </div>

        <div
          className="px-14 mt-10 pb-10"
          style={{
            gridArea: "work",
          }}
        >
          <SheetWork personWork={personFullData.companys} bgColor={bgColor} />
        </div>
      </section>
    </>
  );
};

export default SheetContainer;
