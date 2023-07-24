import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkOutline, checkmarkDoneCircleOutline } from "ionicons/icons";
import clsx from "clsx";
import Button from "../../components/Form/Button";
import OrderForm from "../Modal/OrderForm";

interface IProps {
  setIsOpenModal?: () => void;
}

const StepByStepForm: React.FC<IProps> = ({ setIsOpenModal }) => {
  const [step, setStep] = useState(0); // Current step index
  const [answers, setAnswers] = useState<string[]>([]); // Array to hold selected answers

  const formData = [
    {
      question: "01. Где используется кофемашина?",
      options: ["Дома", "В офисе", "Общепит", "В гос. учреждении", "Другое"],
      alt: "Кофемашина",
    },
    {
      question: "02. Какие работы необходимо провести?",
      options: ["Устранить неполадку", "Провести плановое ТО", "Другое"],
      alt: "Кофемашина на белом фоне со стаканом кофе",
    },
    {
      question: "03. Где хотели бы провести ремонт?",
      options: [
        "Полноценный ремонт и ТО в сервисе",
        "Экспресс ремонт у вас на адресе",
        "Не имеет значения",
      ],
      alt: "Человек наполняет кофейную чашу",
    },
    {
      question: "04. Когда последний раз проводили техническое обслуживание?",
      options: [
        "3-6 месяцев назад",
        "6-12 месяцев назад",
        "Более года назад",
        "Не проводили обслуживание",
        "Не знаю",
      ],
      alt: "Кофемашина вокруг которой стоит много чашек с кофе",
    },
  ];

  const handleAnswerSelection = (answer: string) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers, answer];
      return updatedAnswers;
    });

    setStep((prevStep) => prevStep + 1);
  };

  const handleSkipQuestion = () => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers, ""];
      return updatedAnswers;
    });

    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {step < formData.length ? (
        <div>
          <h2 className="text-2xl font-bold">
            {formData[step].question}
          </h2>
          <div
            className={clsx("grid grid-cols-1 mt-8 max-w-[35rem] w-full gap-3", {
              "grid grid-cols-1 md:grid-cols-2 gap-3":
                formData[step].options.length > 3,
            })}
          >
            {formData[step].options.map((option, index) => (
              <button
                key={index}
                className={clsx(
                  "flex items-center px-4 py-2 bg-white text-[16px] w-full text-gray-500 border border-gray-300 hover:bg-gray-100 focus:outline-none hover:text-black"
                )}
                onClick={() => handleAnswerSelection(option)}
              >
                <IonIcon
                  className="mr-2 w-8 h-8 font-bold bg-gray-300 rounded-md p-2"
                  icon={checkmarkOutline}
                />
                <p className="text-left text-sm">{option}</p>
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-14 md:mt-20">
            <Button
              className="bg-black hover:text-black hover:bg-white text-white "
              onClick={handleSkipQuestion}
            >
              <p>Пропустить</p>
            </Button>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col justify-center items-center pb-10">
            <IonIcon
              className="w-20 h-20 md:w-44 md:h-44 text-green-500"
              icon={checkmarkDoneCircleOutline}
            />
            <p className="max-w-[300px] text-center text-lg md:text-2xl font-medium">
              Просчет стоимости и сроков ремонта вашей кофемашины готов
            </p>
          </div>
          <div className="space-y-10">
            <h2 className="text-lg md:text-2xl font-bold">
              Оставьте контакты и узнайте заключение мастера:
            </h2>

            <OrderForm closeModal={setIsOpenModal!} answers={answers} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StepByStepForm;
