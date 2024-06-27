import layoutSvg from "../../assets/layout-16-svgrepo-com.svg";
import documentSvg from "../../assets/document-file-document-svgrepo-com.svg";

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
            <img src={documentSvg} alt="" />
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
