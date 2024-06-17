interface Props {
  bgColor: string;
  handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ChangeBgColor({ bgColor, handleColorChange }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <label htmlFor="color">Section Background Color</label>
      <input
        className="bg__input"
        type="color"
        id="color"
        value={bgColor}
        onChange={handleColorChange}
      />
    </div>
  );
}

export default ChangeBgColor;
