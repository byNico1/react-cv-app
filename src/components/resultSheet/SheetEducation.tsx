import { lightOrDark } from "../../utils/lightOrDark";
import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";

interface Props {
  personEducation: PersonFullDataInterface["schools"];
  bgColor: string;
}

function SheetEducation({ personEducation, bgColor }: Props) {
  return (
    <div className="min-h-40">
      <h2 className="text-left font-bold text-lg mb-4">Education</h2>
      <div
        className="border-b"
        style={{
          color: bgColor,
          borderBottomColor:
            lightOrDark(bgColor) === "dark" ? "#000000" : bgColor,
        }}
      ></div>

      {personEducation?.map((education) => (
        <div
          key={education.id}
          className="mt-5 grid grid-cols-1 sm:grid-cols-[minmax(50px,_4fr),minmax(150px,_8fr)] gap-5 justify-start items-start text-left"
        >
          <div className="">
            <p>
              {education.startDateEducation}
              <span className="mx-3">-</span>
              {education.endDateEducation}
            </p>
            <p>{education.location}</p>
          </div>
          <div className="">
            <h3 className="font-semibold">{education.schoolName}</h3>
            <p>{education.degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SheetEducation;
