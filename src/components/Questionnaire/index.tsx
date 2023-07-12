import React from "react";
import clsx from "clsx";
import StepByStepForm from "./StepByStepQuestionnaireForm";

interface IProps {
  className?: string;
  setIsOpenModal?: () => void;
}

const Questionnaire: React.FC<IProps> = ({ className, setIsOpenModal }) => {
  return (
    <div
      className={clsx(
        "w-full p-2 md:p-5 text-black bg-white rounded-xl",
        className
      )}
    >
      <StepByStepForm setIsOpenModal={setIsOpenModal} />
    </div>
  );
};

export default Questionnaire;
