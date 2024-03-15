"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimate from "@/components/ScrollAnimate";
import Button from "@/components/Form/Button";
import Modal from "@/components/Modal";
import SEOWrapper from "@/components/SEOWrapper";

const NotFound: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <SEOWrapper title="Страница не найдена">
        <Modal open={isModalOpen} setOpen={setIsModalOpen} />
        <Header />
        <main className="mb-20 font-sans text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10 w-full">
          <section
            className="flex flex-col items-center space-y-10 px-5 md:px-0 py-16 p-0 md:p-16 text-white"
            style={{
              backgroundImage: `url(/brands/coffee-machine_in_kitchen.png)`,
              objectFit: "cover",
              backgroundSize: "cover",
            }}
          >
            <div
              className="p-2 py-6 rounded-sm space-y-10 flex flex-col items-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(101,101,101, 80%), rgba(121,121,121,60%), rgba(164,164,164,50%), rgba(208,208,208,0), rgba(255,255,255, 0))",
              }}
            >
              <ScrollAnimate>
                <h1 className="text-xl md:text-2xl text-center font-bold">
                  Ремонт кофемашин в Минске
                </h1>
              </ScrollAnimate>
              <ScrollAnimate>
                <h2 className="w-full max-w-[150rem] md:max-w-[80rem] text-center text-base md:text-xl">
                  Наши мастера выполняют качественный ремонт для продления срока
                  службы кофемашин. Мы не делаем диагностику за деньги – мы
                  выявляем неисправные компоненты и меняем их на новые.
                </h2>
              </ScrollAnimate>
              <ScrollAnimate>
                <div className="flex justify-center">
                  <Button
                    onClick={openModalHandler}
                    className="text-black bg-white hover:bg-black hover:text-white"
                  >
                    Рассчитать стоимость ремонта
                  </Button>
                </div>
              </ScrollAnimate>
            </div>
          </section>
          <div className="space-y-6 max-w-screen-2xl mx-5 md:mx-auto py-20">
            <h1 className="text-5xl text-center font-bold text-black">
              Страница не найдена
            </h1>
            <div className="flex justify-center">
              <Link href="/" className="text-center w-full">
                Вернуться на главную
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </SEOWrapper>
    </>
  );
};

export default NotFound;
