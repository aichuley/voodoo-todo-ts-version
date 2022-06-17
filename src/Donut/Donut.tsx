import "./Donut.css";
import { defineDonut } from "../const";

interface DonutTypes {
  handleBoxClick: (userID: string, donutID: string) => void;
  donutData: defineDonut;
  userId: string;
  isAdd: boolean;
}

const Donut = ({ handleBoxClick, donutData, userId, isAdd }: DonutTypes) => {
  const { flavor, sprinkles, filled, donutId } = donutData;
  const donutDescription = `donut ${flavor}${filled ? "-filled" : ""}`;

  //HELP:need help with the type of handleClick
  const handleClick = (e: any) => {
    console.log("in Handle CLick");
    // this will prevent this event from bubbeling to the DonutColumn
    e.stopPropagation();
    handleBoxClick(userId, donutId);
  };

  return (
    <div className="donut-shape" onClick={handleClick}>
      <div className={`${donutDescription} ${isAdd ? "add" : ""}`} />
      {sprinkles && (
        <img
          src="./images/sprinkles.png"
          className={`sprinkles ${isAdd ? "add" : ""}`}
          alt="donut"
        />
      )}
    </div>
  );
};

export default Donut;
