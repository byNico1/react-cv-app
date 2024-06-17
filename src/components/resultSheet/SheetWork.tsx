import { lightOrDark } from "../../utils/lightOrDark";
import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";

interface Props {
  personWork: PersonFullDataInterface["companys"];
  bgColor: string;
}

function SheetWork({ personWork, bgColor }: Props) {
  return (
    <div>
      <div
        style={{
          color: bgColor,
          backgroundColor:
            lightOrDark(bgColor) === "dark" ? "#000000" : "#53535312",
        }}
        className="py-3"
      >
        <h2 className=" font-bold text-lg">Professional Experience</h2>
      </div>

      {personWork?.map((work) => (
        <div key={work.id} className="flex gap-10 mt-5 text-left">
          <div className="min-w-40">
            <p>
              {work.startDateJob}
              <span className="mx-3">-</span>
              {work.endDateJob}
            </p>
            <p>{work.positionTitle}</p>
          </div>
          <div className="min-w-40">
            <h3 className="font-semibold">{work.companyName}</h3>
            <p>{work.responsabilities}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SheetWork;
