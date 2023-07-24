import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../constants/query-client";
import Questionnaire from "../Questionnaire";
import { BanknotesIcon, ClockIcon, GiftIcon } from "@heroicons/react/20/solid";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Modal: React.FC<IProps> = ({ open, setOpen }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(true)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="font-[Comfortaa] text-base md:text-lg font-light text-gray-600 relative transform overflow-hidden bg-white px-4 pb-2 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
                  <div className="absolute right-0 top-0 pr-4 pt-4 block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                    <Questionnaire setIsOpenModal={() => setOpen(false)} />
                    <div className="space-y-7 mt-5 px-0 md:px-5">
                      <h2 className="text-2xl font-bold text-black">
                        По окончанию теста вы получите:
                      </h2>

                      <div className="space-y-5">
                        <div className="border-2 border-black p-5 flex space-x-3 items-center">
                          <BanknotesIcon className="w-10 h-10" />
                          <p>Расчет стоимости ремонта</p>
                        </div>

                        <div className="border-2 border-black p-5 flex space-x-3 items-center">
                          <ClockIcon className="w-10 h-10" />
                          <p>Расчет сроков ремонта</p>
                        </div>

                        <div className="border-2 border-black p-5 flex space-x-3 items-center">
                          <GiftIcon className="w-10 h-10" />
                          <p>+ упаковка свежеобжаренного кофе</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </QueryClientProvider>
  );
};

export default Modal;
