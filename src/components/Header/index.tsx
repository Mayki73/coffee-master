import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Button from "../Form/Button";
import { PhoneIcon } from "@heroicons/react/20/solid";
import Modal from "../Modal";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/brands/logo-coffeemaster.png";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQuery = (event: any) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
      <div className="font-sans bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="max-w-screen-2xl w-full mx-auto">
          <div className="flex justify-between items-center text-white">
            <p className="font-bold">CoffeeRemont24</p>

            <div className="flex space-x-2 items-center">
              <a href="tel:+375333482482" className="border-b border-white ">
                +375 (33) 348-24-82
              </a>
              <PhoneIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 md:h-24 font-sans font-[900] bg-gray-100">
        <div className="flex justify-between items-center h-full max-w-screen-2xl mx-5 md:mx-auto">
          <Link href="/">
            <Image
              className="hidden md:block w-[8rem] h-[5rem]"
              src={Logo}
              alt="Логотип компании CoffeeRemont24"
              width={200}
              height={100}
            />
          </Link>
          <div className="flex items-center justify-between md:justify-center space-x-10 w-full md:w-max">
            <NavBar />
            <Link href="/">
              <Image
                className="block md:hidden w-[6rem]"
                src={Logo}
                alt="Логотип компании CoffeeRemont24"
                width={120}
                height={60}
              />
            </Link>
            <Button
              onClick={openModalHandler}
              className="bg-black hover:text-black hover:bg-white text-white rounded-full md:rounded-none px-3 md:px-10"
            >
              {isMobile ? (
                <PhoneIcon className="w-6 h-6 text-white" />
              ) : (
                "ЗАКАЗАТЬ ЗВОНОК"
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
