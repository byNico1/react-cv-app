import { lightOrDark } from "../../utils/lightOrDark";
import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";

interface Props {
  personBasicData: PersonFullDataInterface["generalInfo"];
  bgColor: string;
  layoutShift: "vertical" | "left" | "right";
}

const SheetTitleSection = ({
  personBasicData,
  bgColor,
  layoutShift,
}: Props) => {
  return (
    <div
      className="p-8 flex flex-col"
      style={{
        backgroundColor: bgColor,
        transition: "0.25s ease",
        color: lightOrDark(bgColor) === "dark" ? "#000000" : "#ffffff",
        gridArea: "title",
        justifyContent:
          layoutShift === "left" || layoutShift === "right"
            ? "flex-start"
            : "center",
        alignItems: "center",
      }}
    >
      <h2 className="text-2xl lg:text-3xl text-center">
        {personBasicData.name || "Write your name"}
      </h2>

      <div
        className="flex justify-center gap-8 mt-5 text-left text-base flex-wrap"
        style={{
          flexDirection:
            layoutShift === "left" || layoutShift === "right"
              ? "column"
              : "row",
          alignItems: "center",
        }}
      >
        <p>{personBasicData.email || "Write your email"}</p>
        {/* <div className="flex gap-2 items-center justify-center"> */}
        <p className="">{personBasicData.phone || "Write your phone"}</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SheetTitleSection;
