import ButtonControl from "../ButtonControl";
import { actionOptions, flavorOptions, actions } from "../const";
import "./ControlPanel.css";

interface ControlPanelTypes {
  selectedAction: string;
  handleActionClick: (label: string) => void;
  selectedType: string;
  handleTypeClick: (label: string) => void;
}

const ControlPanel = ({
  selectedAction,
  handleActionClick,
  selectedType,
  handleTypeClick,
}: ControlPanelTypes) => {
  const disableFlavorOptions =
    selectedAction !== actions.add.action &&
    selectedAction !== actions.flavor.action;

  return (
    <>
      <div className="panel">
        {actionOptions.map((option) => {
          return (
            <ButtonControl
              key={option.name}
              selected={selectedAction}
              option={option}
              onClick={handleActionClick}
            />
          );
        })}
      </div>
      <div className="panel">
        {flavorOptions.map((option) => {
          return (
            <ButtonControl
              key={option.name}
              selected={selectedType}
              option={option}
              onClick={handleTypeClick}
              disabled={disableFlavorOptions}
            />
          );
        })}
      </div>
    </>
  );
};

export default ControlPanel;
