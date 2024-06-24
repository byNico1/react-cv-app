import { lightOrDark } from "../../utils/lightOrDark";
import { PersonFullDataInterface } from "../../utils/types/dataInterfaces";
import emailSvg from "../../assets/email-1-svgrepo-com.svg";

interface Props {
  personBasicData: PersonFullDataInterface["generalInfo"];
  bgColor: string;
  layoutShift: "vertical" | "left" | "right";
}

const SheetTitleSection = ({
  personBasicData,
  bgColor,
  layoutShift,
}: Props) => {
  return (
    <div
      className="p-8 flex flex-col justify-center"
      style={{
        backgroundColor: bgColor,
        transition: "0.25s ease",
        color: lightOrDark(bgColor) === "dark" ? "#000000" : "#ffffff",
        gridArea: "title",
        justifyContent:
          layoutShift === "left" || layoutShift === "right"
            ? "flex-start"
            : "center",
      }}
    >
      <h2 className="text-2xl lg:text-3xl text-center">
        {personBasicData.name || "Write your name"}
      </h2>

      <div
        className="flex justify-center gap-8 mt-5 text-left text-base flex-wrap"
        style={{
          flexDirection:
            layoutShift === "left" || layoutShift === "right"
              ? "column"
              : "row",
        }}
      >
        <div className="flex gap-2 items-center justify-start">
          <svg
            fill={lightOrDark(bgColor) === "dark" ? "#000000" : "#ffffff"}
            width="16px"
            height="16px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
              fillRule="evenodd"
            />
          </svg>
          <p>{personBasicData.email || "Write your email"}</p>
        </div>
        <div className="flex gap-2 items-center justify-start">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
              fill={lightOrDark(bgColor) === "dark" ? "#000000" : "#ffffff"}
            />
          </svg>
          <p>{personBasicData.phone || "Write your phone"}</p>
        </div>
      </div>
    </div>
  );
};

export default SheetTitleSection;
