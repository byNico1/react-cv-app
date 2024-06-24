import { lightOrDark } from "../../utils/lightOrDark";
import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";

interface Props {
  personEducation: PersonFullDataInterface["schools"];
  bgColor: string;
}

function SheetEducation({ personEducation, bgColor }: Props) {
  return (
    <div className="min-h-40">
      <div
        style={{
          color: bgColor,
          backgroundColor:
            lightOrDark(bgColor) === "dark" ? "#000000" : "#53535312",
        }}
        className="p-3"
      >
        <h2 className="font-bold text-lg">Education</h2>
      </div>

      {personEducation?.map((education) => (
        <div
          key={education.id}
          className="flex gap-10 mt-5 text-left flex-wrap lg:flex-nowrap"
        >
          <div className="min-w-40">
            <p>
              {education.startDateEducation}
              <span className="mx-3">-</span>
              {education.endDateEducation}
            </p>
            <p>{education.location}</p>
          </div>
          <div className="min-w-40">
            <h3 className="font-semibold">{education.schoolName}</h3>
            <p>{education.degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SheetEducation;
