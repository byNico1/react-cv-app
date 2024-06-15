import LabelContainer from "../forms/LabelContainer";
import MyAccordion from "./MyAccordion";
import { Button } from "@material-tailwind/react";
import { selectData } from "../../utils/selectData";
import { schoolSchema } from "../../utils/schemas";
import { Dispatch, ReactElement, SetStateAction } from "react";

import { PersonEducationData } from "../../utils/types/dataInterfaces";

import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";

interface Props {
  submitToFullData: (
    container: "schools" | "companys",
    data?: Omit<PersonEducationData, "closed">,
    dataId?: string
  ) => void;
  personEducation: [
    PersonEducationData,
    Dispatch<SetStateAction<PersonEducationData>>
  ];
  open: number;
  icon: ReactElement;
  handleOpen: (value: number) => any;
  personFullData: PersonFullDataInterface;
}

function SchoolInfoAccordion({
  personEducation,
  personFullData,
  open,
  icon,
  handleOpen,
  submitToFullData,
}: Props) {
  const [personEducationData, setPersonEducationData] = personEducation;

  const handleSubmit = () => {
    const result = schoolSchema.safeParse(personEducationData);

    if (result.success === false) {
      console.log(result.error.formErrors.fieldErrors);
      return;
    }

    console.log(result);

    submitToFullData("schools", personEducationData, personEducationData.id);
    setPersonEducationData({
      ...personEducationData,
      closed: true,
    });
  };

  const handleCancel = () => {
    // *Posibles Casos: crea pero no pone datos,
    const result = schoolSchema.safeParse(
      personFullData.schools[personFullData.schools.length - 1]
    );

    if (result.success === false) {
      personFullData.schools.pop();
    }

    setPersonEducationData({
      ...personEducationData,
      id: "",
      schoolName: "",
      degree: "",
      startDateEducation: "",
      endDateEducation: "",
      location: "",
      closed: true,
    });
  };

  const handleDelete = () => {
    const neededId = personEducationData.id;

    const index = personFullData.schools.findIndex(
      (school) => school.id === neededId
    );

    if (index !== -1) {
      personFullData.schools.splice(index, 1);
    }

    setPersonEducationData({
      ...personEducationData,
      id: "",
      schoolName: "",
      degree: "",
      startDateEducation: "",
      endDateEducation: "",
      location: "",
      closed: true,
    });
  };

  return (
    <MyAccordion
      title="Educational Experience"
      handleOpen={handleOpen}
      Icon={icon}
      open={open}
      openId={1}
    >
      {personEducationData.closed ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          {personFullData.schools.map((school) => (
            <Button
              variant="outlined"
              key={school.id}
              onClick={() =>
                setPersonEducationData({
                  ...personEducationData,
                  ...selectData(personFullData.schools, school.id),
                  closed: false,
                })
              }
            >
              {school.schoolName}
            </Button>
          ))}
        </div>
      ) : (
        <>
          <LabelContainer<PersonEducationData>
            personData={personEducation}
            type="text"
            id="schoolName"
            content="School Name"
          />
          <LabelContainer<PersonEducationData>
            personData={personEducation}
            type="text"
            id="degree"
            content="Degree"
          />
          <div>
            <LabelContainer<PersonEducationData>
              personData={personEducation}
              type="date"
              id="startDateEducation"
              content="Start Date"
            />
            <LabelContainer<PersonEducationData>
              personData={personEducation}
              type="text"
              id="endDateEducation"
              content="End Date"
            />
          </div>
          <LabelContainer<PersonEducationData>
            personData={personEducation}
            type="text"
            id="location"
            content="Location"
          />
          <Button
            type="submit"
            onClick={handleCancel}
            variant="gradient"
            color="purple"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="gradient"
            color="blue"
            className="ml-5"
          >
            Save
          </Button>
          <Button
            type="submit"
            onClick={handleDelete}
            variant="gradient"
            color="red"
            className="ml-5"
          >
            Delete
          </Button>
        </>
      )}
      {personEducationData.closed && (
        <Button
          onClick={() => {
            const result = submitToFullData("schools");
            if (result !== undefined) {
              setPersonEducationData(result as PersonEducationData);
            }
          }}
          variant="gradient"
          className="mt-5"
        >
          Create New Info
        </Button>
      )}
    </MyAccordion>
  );
}

export default SchoolInfoAccordion;
