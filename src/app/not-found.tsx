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
        <main className="font-sans text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10 w-full">
          <div className="space-y-6 max-w-screen-2xl mx-5 md:mx-auto h-[60vh] flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center font-bold text-black">
              Страница не найдена
            </h1>
            <div className="flex justify-center">
              <Link
                href="/"
                className="bg-black hover:text-black hover:bg-white text-white rounded-full md:rounded-none px-3 md:px-10 py-3 hover:border-black border-2"
              >
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
