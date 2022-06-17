import Donut from "../Donut/Donut";
import "./DonutBox.css";
import { donutDataInterface } from "../const";

interface DonutBoxTypes {
  boxData: donutDataInterface;
  handleBoxClick: (userID: string, donutID?: string) => void;
  isAdd: boolean;
}

const DonutBox = ({ boxData, handleBoxClick, isAdd }: DonutBoxTypes) => {
  return (
    <div
      className="donut-column"
      onClick={() => handleBoxClick(boxData.userId)}
    >
      <h3>{boxData.name}</h3>
      <div className={`donut-container ${isAdd ? "add" : ""}`}>
        {boxData.donuts.map((donutData) => {
          return (
            <Donut
              key={donutData.donutId}
              donutData={donutData}
              handleBoxClick={handleBoxClick}
              isAdd={isAdd}
              userId={boxData.userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DonutBox;
