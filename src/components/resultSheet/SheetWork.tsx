import { lightOrDark } from "../../utils/lightOrDark";
import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";

interface Props {
  personWork: PersonFullDataInterface["companys"];
  bgColor: string;
}

function SheetWork({ personWork, bgColor }: Props) {
  return (
    <div>
      <h2 className="text-left mb-4 font-bold text-lg">
        Professional Experience
      </h2>
      <div
        className="border-b"
        style={{
          color: bgColor,
          borderBottomColor:
            lightOrDark(bgColor) === "dark" ? "#000000" : bgColor,
        }}
      ></div>

      {personWork?.map((work) => (
        <div
          key={work.id}
          className="mt-5 grid grid-cols-1 sm:grid-cols-[minmax(50px,_4fr),minmax(150px,_8fr)] gap-5 justify-start items-start text-left"
        >
          {/* <div
             key={work.id}
             className="flex gap-10 mt-5 text-left flex-wrap lg:flex-nowrap"
          > */}
          <div className="">
            <p>
              {work.startDateJob}
              <span className="mx-3">-</span>
              {work.endDateJob}
            </p>
            <p>{work.positionTitle}</p>
          </div>
          <div className="">
            <h3 className="font-semibold">{work.companyName}</h3>
            <p>{work.responsabilities}</p>
          </div>
        </div>
        // </div>
      ))}
    </div>
  );
}

export default SheetWork;
