import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
  return (
    <>
      <p>{text}</p>
      <RiEditFill onClick={updatingInInput} />
      <MdDelete onClick={deleteMeal} />
    </>
  )
}