import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

type Props = {
  children: React.ReactNode;
  title: string;
  Icon: React.ReactElement;
  handleOpen: (value: number) => void;
  openId: number;
  open: number;
};

function MyAccordion({
  children,
  title,
  Icon,
  handleOpen,
  openId,
  open,
}: Props) {
  return (
    <Accordion
      animate={CUSTOM_ANIMATION}
      icon={Icon}
      open={open === openId}
      className="mb-2 rounded-lg border border-blue-gray-100 px-4"
    >
      <AccordionHeader
        onClick={() => handleOpen(openId)}
        className={`border-b-0 transition-colors ${
          open === openId ? "text-blue-500 hover:!text-blue-700" : ""
        }`}
      >
        {title}
      </AccordionHeader>
      <AccordionBody className="pt-0 text-base font-normal">
        {children}
      </AccordionBody>
    </Accordion>
  );
}

export default MyAccordion;
