import React, { useState } from "react";
import {
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Form/Button";
import Modal from "../components/Modal";

const MulfunctionTemplate: React.FC = ({ pageContext }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, prices } = pageContext.mulfunction;
  const { advantages } = pageContext;

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
      <Header />
      <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
        <h1 className="text-4xl text-center font-bold text-black">{title}</h1>
        <p>{description}</p>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={openModalHandler}
            className="bg-black hover:text-black hover:bg-white text-white"
          >
            Заказать ремонт
          </Button>
        </div>

        <section className="space-y-20 pt-10">
          <h2 className="text-4xl text-black text-center">
            Рекомендации или возможные причины поломки
          </h2>

          <ul
            className={`grid grid-cols-1 md:grid-cols-${
              prices.length % 2 === 0 ? 2 : 3
            } gap-10`}
          >
            {prices.map((price: any) => {
              return (
                <li
                  key={price.name}
                  onClick={openModalHandler}
                  className="flex flex-col md:flex-row items-center space-y-5 md:space-x-10 p-5 border-2 border-black hover:scale-105 hover:cursor-pointer"
                >
                  {price.type === "advise" ? (
                    <QuestionMarkCircleIcon className="w-32 h-32 text-black" />
                  ) : (
                    <ExclamationCircleIcon className="w-32 h-32 text-black" />
                  )}
                  <div className="space-y-5">
                    <p>{price.name}</p>
                    <p className="text-black">{price.price}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="pt-10 space-y-10">
          <h2 className="text-2xl md:text-4xl text-center text-black">
            Наши преимущества
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {advantages.map((advantage: any) => (
              <li
                key={advantages.title}
                className="p-5 border-2 border-black space-y-5"
              >
                <h3 className="text-xl text-black font-bold">
                  {advantage.title}
                </h3>
                <p>{advantage.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MulfunctionTemplate;
