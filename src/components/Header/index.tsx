import React, { useState } from "react";
import NavBar from "../NavBar";
import Button from "../Form/Button";
import { PhoneIcon } from "@heroicons/react/20/solid";
import Modal from "../Modal";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = window!.innerWidth <= 768;

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
      <div className="flex justify-between items-end max-w-screen-2xl mx-5 md:mx-auto h-20 font-[Comfortaa] font-[900]">
        <p className="hidden md:block">LOGO</p>
        <NavBar />
        <p className="block md:hidden">LOGO</p>
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
    </>
  );
};

export default Header;
