import DonutBox from "../DonutBox";
import { donutDataInterface } from "../const";

interface DonutBoxTypes {
  donutShelfData: donutDataInterface[];
  handleBoxClick: (userID: string, donutID?: string) => void;
  isAdd: boolean;
}

const DonutShelf = ({
  donutShelfData,
  handleBoxClick,
  isAdd,
}: DonutBoxTypes) => {
  return (
    <>
      {donutShelfData.map((el: donutDataInterface) => {
        return (
          <DonutBox
            key={el.userId}
            boxData={el}
            handleBoxClick={handleBoxClick}
            isAdd={isAdd}
          />
        );
      })}
    </>
  );
};

export default DonutShelf;
