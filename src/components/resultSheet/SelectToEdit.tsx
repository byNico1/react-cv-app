import layoutSvg from "../../assets/layout-16-svgrepo-com.svg";

interface Props {
  editOption: "info" | "styles";
  handleEditOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SelectToEdit({ editOption, handleEditOption }: Props) {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-5">
      <li className="flex-1">
        <input
          type="radio"
          id="info"
          name="toedit"
          value="info"
          checked={editOption === "info"}
          onChange={handleEditOption}
          className="peer hidden"
        />{" "}
        <label
          htmlFor="info"
          className="peer-checked:bg-blue-gray-50 peer-checked:text-purple-900 cursor-pointer flex flex-col justify-center items-center gap-2 p-3 rounded-lg"
        >
          <div className="w-12 h-12">
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <path
                  style={{
                    fill: "#000000",
                  }}
                  d="M198.765,0L53.398,145.383V512h405.204V0H198.765z M196.634,49.667v93.576h-93.576L196.634,49.667z
		 M424.995,478.393H87.005V172.897h139.29V33.614h198.7V478.393z"
                />
                <rect
                  x="157.393"
                  y="237.971"
                  style={{
                    fill: "#000000",
                  }}
                  width="197.206"
                  height="25.896"
                />
                <rect
                  x="157.393"
                  y="308.686"
                  style={{
                    fill: "#000000",
                  }}
                  width="197.206"
                  height="25.896"
                />
                <rect
                  x="157.393"
                  y="379.401"
                  style={{
                    fill: "#000000",
                  }}
                  width="197.206"
                  height="25.896"
                />
              </g>
            </svg>
          </div>
          Information
        </label>
      </li>
      {/* Vertical above */}
      <li className="flex-1">
        <input
          type="radio"
          id="styles"
          name="toedit"
          value="styles"
          checked={editOption === "styles"}
          onChange={handleEditOption}
          className="peer hidden"
        />{" "}
        <label
          htmlFor="styles"
          className="peer-checked:bg-blue-gray-50 peer-checked:text-purple-900 cursor-pointer flex flex-col justify-center items-center gap-2 p-3 rounded-lg"
        >
          <div className="w-12 h-12">
            <img src={layoutSvg} alt="" />
          </div>
          Styles
        </label>
      </li>
    </ul>
  );
}

export default SelectToEdit;
