import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SectionTitle({ children }: Props) {
  return <h2 className="text-left text-2xl lg:text-4xl">{children}</h2>;
}

export default SectionTitle;
