import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Button from "../Form/Button";
import { PhoneIcon } from "@heroicons/react/20/solid";
import Modal from "../Modal";
import Logo from "../../images/brands/logo-coffeemaster.png";
import { Link } from "gatsby";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust the breakpoint as needed

    const handleMediaQuery = (event: any) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery); // Set initial value

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
      <div className="w-full h-20 md:h-24 font-[Comfortaa] font-[900] bg-gray-100">
        <div className="flex justify-between items-center h-full max-w-screen-2xl mx-5 md:mx-auto">
          <Link to="/">
            <img
              className="hidden md:block w-[8rem] h-[5rem]"
              src={Logo}
              alt="Логотип компании CoffeeRemont24"
            />
          </Link>
          <div className="flex items-center justify-between md:justify-center space-x-10 w-full md:w-max">
            <NavBar />
            <Link to="/">
              <img
                className="block md:hidden w-[6rem]"
                src={Logo}
                alt="Логотип компании CoffeeRemont24"
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
