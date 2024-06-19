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
      className="p-8 flex flex-col justify-center"
      style={{
        backgroundColor: bgColor,
        transition: "0.25s ease",
        color: lightOrDark(bgColor) === "dark" ? "#000000" : "#ffffff",
        gridArea: "title",
        justifyContent:
          layoutShift === "left" || layoutShift === "right"
            ? "flex-start"
            : "center",
      }}
    >
      <h2 className="text-2xl lg:text-3xl text-center">
        {personBasicData.name || "Write your name"}
      </h2>

      <div
        className="flex justify-center gap-5 mt-5 text-left text-base"
        style={{
          flexDirection:
            layoutShift === "left" || layoutShift === "right"
              ? "column"
              : "row",
        }}
      >
        <p>{personBasicData.email || "Write your email"}</p>
        <p>{personBasicData.phone || "Write your phone"}</p>
      </div>
    </div>
  );
};

export default SheetTitleSection;
