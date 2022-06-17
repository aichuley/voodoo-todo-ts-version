import { useState } from "react";
import "./App.css";
import { initialData, actions, donutDataInterface } from "./const";
import ControlPanel from "./ControlPanel";
import DonutShelf from "./DonutShelf";
import {
  addDonutToBox,
  alterSprinklesToDonut,
  alterFillingToDonut,
  removeDonutFromBox,
  alterDonutFlavor,
} from "./utils";

const App = () => {
  const [donutShelfData, setDonutShelfData] = useState(initialData);
  const [selectedAction, setSelectedAction] = useState("addMoreDonut");
  const [selectedType, setSelectedType] = useState("glazed");

  const handleActionClick = (label: string) => {
    setSelectedAction(label);
  };

  const handleTypeClick = (label: string) => {
    setSelectedType(label);
  };

  const handleBoxClick = (userId: string, donutId?: string) => {
    switch (selectedAction) {
      case actions.sprinkles.action:
        setDonutShelfData(
          alterSprinklesToDonut(donutShelfData, userId, donutId)
        );
        break;
      case actions.filled.action:
        setDonutShelfData(alterFillingToDonut(donutShelfData, userId, donutId));
        break;
      case actions.add.action:
        setDonutShelfData(addDonutToBox(donutShelfData, userId, selectedType));
        break;
      case actions.remove.action:
        setDonutShelfData(removeDonutFromBox(donutShelfData, userId, donutId));
        break;
      case actions.flavor.action:
        setDonutShelfData(
          alterDonutFlavor(donutShelfData, userId, donutId, selectedType)
        );
        break;
      default:
        console.error("An invalid action was passed to handleBoxClick");
    }
  };

  return (
    <div className="app-wrapper">
      <h1>Voodoo Todo:</h1>
      <div className="app-container">
        <ControlPanel
          selectedAction={selectedAction}
          handleActionClick={handleActionClick}
          selectedType={selectedType}
          handleTypeClick={handleTypeClick}
        />
        <DonutShelf
          donutShelfData={donutShelfData}
          handleBoxClick={handleBoxClick}
          isAdd={selectedAction === actions.add.action}
        />
      </div>
    </div>
  );
};

export default App;
