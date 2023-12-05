import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import ContactForm from "../components/ContactsForm/ContactForm";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../constants/query-client";
import { SnackbarProvider } from "notistack";
import ScrollAnimate from "../components/ScrollAnimate";
import SEOWrapper from "../components/SEOWrapper";

const contacts = [
  {
    title: "Адрес",
    value: "г. Минск, ул. Петра Мстиславца, д. 22",
    icon: <MapPinIcon className="w-7 h-7" />,
    link: "https://goo.gl/maps/kbKTSwr7cnDWSRME7",
  },
  {
    title: "Телефон",
    value: "+375 (33) 348-24-82",
    icon: <PhoneIcon className="w-7 h-7" />,
    link: "tel:+375333482482",
  },
  {
    title: "Email",
    value: "Coffeeremont24.by@yandex.ru",
    icon: <EnvelopeIcon className="w-7 h-7" />,
    link: "mailto:Coffeeremont24.by@yandex.ru",
  },
];

const Contacts: React.FC = () => {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoHideDuration={3000}
        className="bg-white"
      >
        <SEOWrapper
          title="Контакты - coffeeremont24"
          description="Наши контактные данные для связи с нами по вопросам ремонта кофемашин. Свяжитесь с нами для получения дополнительной информации, оставьте заявку на ремонт или задайте вопросы нашей команде. Мы готовы помочь вам с вашими кофейными потребностями."
          link="https://coffeeremont24.by/contacts/"
        >
          <QueryClientProvider client={queryClient}>
            <Header />
            <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
              <ScrollAnimate>
                <h1 className="text-2xl font-medium text-center text-black">
                  Контакты
                </h1>
              </ScrollAnimate>

              <div className="flex justify-center items-center">
                <ul className="space-y-5 list-none list-inside">
                  {contacts.map((item) => (
                    <li key={item.title}>
                      <ScrollAnimate>
                        <div className="flex flex-col md:flex-row space-y-6 md:space-x-10">
                          <div className="w-full md:w-max flex justify-center md:justify-end items-end">
                            {item.icon}
                          </div>
                          <a
                            href={item.link}
                            target="_blank"
                            className="text-lg text-center md:text-start"
                          >
                            {item.value}
                          </a>
                        </div>
                      </ScrollAnimate>
                    </li>
                  ))}
                </ul>
              </div>

              <ScrollAnimate>
                <h2 className="text-xl md:text-2xl font-medium text-center text-black pt-10">
                  Оставьте нам вопрос
                </h2>
              </ScrollAnimate>

              <div className="flex justify-center w-full">
                <ContactForm />
              </div>
            </main>
            <Footer />
          </QueryClientProvider>
        </SEOWrapper>
      </SnackbarProvider>
    </>
  );
};

export default Contacts;
