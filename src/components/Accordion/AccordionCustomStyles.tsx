import { Dispatch, SetStateAction, useState } from "react";
import SchoolInfoAccordion from "./SchoolInfoAccordion";
import WorkInfoAccordion from "./WorkInfoAccordion";
import {
  PersonEducationData,
  PersonFullDataInterface,
  PersonWorkData,
} from "../../utils/types/dataInterfaces";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

interface Props {
  personEducation: [
    PersonEducationData,
    Dispatch<SetStateAction<PersonEducationData>>
  ];
  personWork: [PersonWorkData, Dispatch<SetStateAction<PersonWorkData>>];
  submitToFullData: (
    data: any,
    dataId: string,
    container: "schools" | "companys"
  ) => void;
  personFullData: PersonFullDataInterface;
}

function AccordionCustomStyles({
  personEducation,
  personWork,
  submitToFullData,
  personFullData,
}: Props) {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <SchoolInfoAccordion
        submitToFullData={submitToFullData}
        personEducation={personEducation}
        open={open}
        icon={<Icon id={1} open={open} />}
        handleOpen={handleOpen}
        personFullData={personFullData}
      />
      <WorkInfoAccordion
        submitToFullData={submitToFullData}
        personWork={personWork}
        open={open}
        icon={<Icon id={2} open={open} />}
        handleOpen={handleOpen}
        personFullData={personFullData}
      />
    </>
  );
}

export default AccordionCustomStyles;
