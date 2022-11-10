import Step from "./Step";
import "../Step_progress.css";

export default function StepNavigation({
  labelArray,
  updateStep,
  currentStep,
}) {
  return (
    <div className="stepWrapper">
      {labelArray.map((item, index) => (
        <Step
          index={index}
          label={item}
          updateStep={updateStep}
          selected={currentStep === index + 1}
        />
      ))}
    </div>
  );
}
