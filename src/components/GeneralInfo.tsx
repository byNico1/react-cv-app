/* eslint-disable react/prop-types */
import { Dispatch, SetStateAction } from "react";
import { PersonFullDataInterface } from "../utils/types/dataInterfaces";
import LabelContainer from "./forms/LabelContainer";
import SectionTitle from "./forms/SectionTitle";

interface Props {
  personData: [
    PersonFullDataInterface,
    Dispatch<SetStateAction<PersonFullDataInterface>>
  ];
}

function GeneralInfo({ personData }: Props) {
  return (
    <section>
      <SectionTitle>Personal Details</SectionTitle>
      <LabelContainer<PersonFullDataInterface>
        personData={personData}
        type="text"
        id="name"
        content="Name"
      />
      <LabelContainer<PersonFullDataInterface>
        personData={personData}
        type="email"
        id="email"
        content="Email"
      />
      <LabelContainer<PersonFullDataInterface>
        personData={personData}
        type="tel"
        id="phone"
        content="Phone"
      />
    </section>
  );
}

export default GeneralInfo;
