import { Link } from "gatsby";
import React, { Fragment, useState } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";

const routes = [
  {
    id: 1,
    name: "О НАС",
    path: "/about",
  },
  {
    id: 2,
    name: `РЕМОНТ`,
    icon: <ChevronDownIcon className="w-5 h-5" />,
    path: "/repair",
    list: [
      {
        name: "Бытовые",
        path: "/repair/household",
      },
      {
        name: "Встраиваемые",
        path: "/repair/built-in",
      },
      {
        name: "Профессиональные",
        path: "/repair/professional",
      },
      {
        name: "Вендинговые",
        path: "/repair/vending",
      },
    ],
  },
  {
    id: 3,
    name: "ЦЕНЫ",
    path: "/prices",
  },
  {
    id: 4,
    name: "НЕИСПРАВНОСТИ",
    path: "/mulfunctions",
  },
  {
    id: 5,
    name: "КОНТАКТЫ",
    path: "/contacts",
  },
  {
    id: 6,
    name: "ДОСТАВКА И ОПЛАТА",
    path: "/delivery-and-payment",
  },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="block z-40" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="font-[Comfortaa] text-lg font-semibold relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 px-4 py-6">
                  {routes.map((route) => {
                    if (route.icon) {
                      return (
                        <>
                          <div key={route.id}>
                            <Link
                              to={route.path}
                              onClick={() => setOpen(false)}
                              className="-m-2 block p-2 font-medium text-gray-900 flex space-x-2 items-center"
                            >
                              <span>{route.name}</span>
                              {route?.icon}
                            </Link>
                          </div>
                          <div className="flex flex-col space-y-3 pl-5">
                            {route.list.map((item) => (
                              <Link
                                onClick={() => setOpen(false)}
                                className="font-medium text-gray-900"
                                key={item.name}
                                to={item.path}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      );
                    }

                    return (
                      <div key={route.id} className="flow-root">
                        <Link
                          to={route.path}
                          onClick={() => setOpen(false)}
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          {route.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <nav className="flex items-end h-full space-x-6 text-base font-[Comfortaa] font-[900] hidden lg:block lg:flex">
        {routes.map((route) => {
          if (route.icon)
            return (
              <div key={route.id} className="relative group">
                <Link
                  to={route.path}
                  onClick={() => setOpen(false)}
                  className="flex space-x-3 items-center border-rounded-md hover:border-b-2 hover:border-black transition-all duration-100 text-gray-600 hover:text-black focus:outline-none"
                >
                  <span>{route.name}</span>
                  {route?.icon}
                </Link>
                <div className="absolute z-10 hidden group-hover:block border-2 border-black">
                  <div className="bg-white shadow-lg">
                    <div className="">
                      {route.list?.map((item) => (
                        <Link
                          key={item.name}
                          onClick={() => setOpen(false)}
                          className="flex items-center text-black hover:bg-black hover:text-white py-3 px-4"
                          to={item.path}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );

          return (
            <Link
              key={route.id}
              onClick={() => setOpen(false)}
              className="flex space-x-3 items-center border-rounded-md hover:border-b-2 hover:border-black transition-all duration-100 text-gray-600 hover:text-black"
              to={route.path}
            >
              {route.name}
              {route?.icon}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-1 items-center lg:hidden">
        <button
          type="button"
          className="-ml-2 rounded-md bg-gray-200 p-2 text-gray-400"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
