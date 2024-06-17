import { lightOrDark } from "../../utils/lightOrDark";
import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";

interface Props {
  personBasicData: PersonFullDataInterface["generalInfo"];
  bgColor: string;
}

const SheetTitleSection = ({ personBasicData, bgColor }: Props) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        transition: "0.25s ease",
        color: lightOrDark(bgColor) === "dark" ? "#000000" : "#ffffff",
      }}
      className="p-8"
    >
      <h2 className="text-2xl lg:text-3xl">
        {personBasicData.name || "Write your name"}
      </h2>

      <div className="flex items-center justify-center gap-8 mt-5 text-lg">
        <p>{personBasicData.email || "Write your email"}</p>
        <p>{personBasicData.phone || "Write your phone"}</p>
      </div>
    </div>
  );
};

export default SheetTitleSection;
