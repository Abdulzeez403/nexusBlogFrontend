import { MdModeEditOutline } from "react-icons/md";

interface IProps {
style?: string;
name?: string;
onDismiss?: () => void;

}

const Button:React.FC<IProps> = ({style, name, onDismiss}) => {
  const buttonStyle =
    " flex gap-x-3 bg-blue-300 px-4  py-2 mt-5 items-center border rounded-sm";
  return (
    <>
      <button className={style ?? buttonStyle} onClick={onDismiss}>
        <MdModeEditOutline color="white" size={20} />
        <h4 className="text-md font-semibold text-white">{name}</h4>
      </button>
    </>
  );
};

export default Button;
