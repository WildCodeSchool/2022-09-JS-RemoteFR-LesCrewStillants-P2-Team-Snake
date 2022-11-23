import Step from "./Step";

export default function StepNavigation({
  labelArray,
  updateStep,
  currentStep,
}) {
  return (
    <div className="stepWrapper">
      {labelArray.map((item, index) => (
        <Step
          key={item}
          index={index}
          label={item}
          updateStep={updateStep}
          selected={currentStep === index + 1}
        />
      ))}
    </div>
  );
}
