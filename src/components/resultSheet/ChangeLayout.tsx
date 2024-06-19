interface Props {
  layoutShift: "left" | "right" | "vertical";
  handleLayoutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
}

function ChangeLayout({ layoutShift, handleLayoutChange, bgColor }: Props) {
  return (
    <ul className="mt-10 flex flex-wrap justify-center items-center gap-5 shadow-md p-3 rounded-md">
      <li>
        <input
          type="radio"
          id="vertical"
          name="layout"
          value="vertical"
          checked={layoutShift === "vertical"}
          onChange={handleLayoutChange}
          className="peer hidden"
        />{" "}
        <label
          htmlFor="vertical"
          className="peer-checked:text-blue-500 cursor-pointer"
        >
          <div
            className="representation"
            style={{
              background: `linear-gradient(0deg, rgba(255,255,255,1) 50%, ${bgColor} 50%)`,
            }}
          ></div>
          Vertical
        </label>
      </li>
      {/* Vertical above */}
      <li>
        <input
          type="radio"
          id="left"
          name="layout"
          value="left"
          checked={layoutShift === "left"}
          onChange={handleLayoutChange}
          className="peer hidden"
        />{" "}
        <label
          htmlFor="left"
          className="peer-checked:text-blue-500 cursor-pointer"
        >
          <div
            className="representation"
            style={{
              background: `linear-gradient(-90deg, rgba(255,255,255,1) 50%, ${bgColor} 50%)`,
            }}
          ></div>
          Left
        </label>
      </li>
      {/* Left Above */}
      <li>
        <input
          type="radio"
          id="right"
          name="layout"
          value="right"
          checked={layoutShift === "right"}
          onChange={handleLayoutChange}
          className="peer hidden"
        />
        <label
          htmlFor="right"
          className="peer-checked:text-blue-500 cursor-pointer"
        >
          <div
            className="representation"
            style={{
              background: `linear-gradient(90deg, rgba(255,255,255,1) 50%, ${bgColor} 50%)`,
            }}
          ></div>
          Right
        </label>
      </li>
    </ul>
  );
}

export default ChangeLayout;
