import LabelContainer from "../forms/LabelContainer";
import MyAccordion from "./MyAccordion";
import { Button } from "@material-tailwind/react";

import { selectData } from "../../utils/selectData";
import { workSchema } from "../../utils/schemas";
import { Dispatch, ReactElement, SetStateAction } from "react";

import {
  PersonFullDataInterface,
  PersonWorkData,
} from "../../utils/types/dataInterfaces";

interface Props {
  personWork: [PersonWorkData, Dispatch<SetStateAction<PersonWorkData>>];
  personFullData: PersonFullDataInterface;
  open: number;
  icon: ReactElement;
  handleOpen: (value: number) => void;
  submitToFullData: (
    container: "schools" | "companys",
    data?: Omit<PersonWorkData, "closed">,
    dataId?: string
  ) => void;
}

function WorkInfoAccordion({
  personWork,
  personFullData,
  open,
  icon,
  handleOpen,
  submitToFullData,
}: Props) {
  const [personWorkData, setPersonWorkData] = personWork;

  const handleSubmit = () => {
    const result = workSchema.safeParse(personWorkData);

    if (result.success === false) {
      console.log(result.error.formErrors.fieldErrors);
      return;
    }

    console.log(result);

    submitToFullData("companys", personWorkData, personWorkData.id);
    setPersonWorkData({
      ...personWorkData,
      closed: true,
    });
  };

  const handleCancel = () => {
    const result = workSchema.safeParse(
      personFullData.companys[personFullData.companys.length - 1]
    );

    if (result.success === false) {
      personFullData.companys.pop();
    }

    setPersonWorkData({
      ...personWorkData,
      id: "",
      companyName: "",
      positionTitle: "",
      responsabilities: "",
      startDateJob: "",
      endDateJob: "",
      closed: true,
    });
  };

  const handleDelete = () => {
    const neededId = personWorkData.id;

    const index = personFullData.companys.findIndex(
      (company) => company.id === neededId
    );

    if (index !== -1) {
      personFullData.companys.splice(index, 1);
    }

    setPersonWorkData({
      ...personWorkData,
      id: "",
      companyName: "",
      positionTitle: "",
      responsabilities: "",
      startDateJob: "",
      endDateJob: "",
      closed: true,
    });
  };

  return (
    <>
      <MyAccordion
        title="Practical Experience"
        handleOpen={handleOpen}
        Icon={icon}
        open={open}
        openId={2}
      >
        {personWorkData.closed ? (
          <div className="flex flex-col gap-5 justify-center items-center">
            {personFullData.companys.map((company) => (
              <Button
                variant="outlined"
                key={company.id}
                onClick={() =>
                  setPersonWorkData({
                    ...personWorkData,
                    ...selectData(personFullData.companys, company.id),
                    closed: false,
                  })
                }
              >
                {company.companyName}
              </Button>
            ))}
          </div>
        ) : (
          <>
            <LabelContainer<PersonWorkData>
              personData={personWork}
              type="text"
              id="companyName"
              content="Company Name"
            />
            <LabelContainer<PersonWorkData>
              personData={personWork}
              type="text"
              id="positionTitle"
              content="Position Title"
            />

            <LabelContainer<PersonWorkData>
              personData={personWork}
              type="text"
              id="responsabilities"
              content="Responsabilities Of Your Job"
            />

            <div>
              <LabelContainer<PersonWorkData>
                personData={personWork}
                type="date"
                id="startDateJob"
                content="Start Date"
              />
              <LabelContainer<PersonWorkData>
                personData={personWork}
                type="date"
                id="endDateJob"
                content="End Date"
              />
            </div>

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
        {personWorkData.closed && (
          <Button
            onClick={() => {
              const result = submitToFullData("companys");
              if (result !== undefined) {
                setPersonWorkData(result as PersonWorkData);
              }
            }}
            variant="gradient"
            className="mt-5"
          >
            Create New Experience Info
          </Button>
        )}
      </MyAccordion>
    </>
  );
}

export default WorkInfoAccordion;
