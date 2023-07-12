import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import ContactForm from "../components/ContactsForm/ContactForm";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../constants/query-client";
import { SnackbarProvider } from "notistack";
import { Helmet } from "react-helmet";

const contacts = [
  {
    title: "Адрес",
    value: "г. Москва, ул. Ленина, д. 1",
    icon: <MapPinIcon className="w-7 h-7" />,
  },
  {
    title: "Телефон",
    value: "+7 (495) 555-55-55",
    icon: <PhoneIcon className="w-7 h-7" />,
  },
  {
    title: "Email",
    value: "Coffeeremont24.by@yandex.ru",
    icon: <EnvelopeIcon className="w-7 h-7" />,
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
        <Helmet>
          <title>
            Контакты CoffeeRemont24 - свяжитесь с нами для ремонта кофемашин в
            Минске
          </title>
          <meta
            name="description"
            content="Наши контактные данные для связи с нами по вопросам ремонта кофемашин. Свяжитесь с нами для получения дополнительной информации, оставьте заявку на ремонт или задайте вопросы нашей команде. Мы готовы помочь вам с вашими кофейными потребностями."
          />
          <meta
            name="keywords"
            content="контакты CoffeeRemont24, ремонт кофемашин в Минске, связаться с CoffeeRemont24, заявка на ремонт кофемашины, обслуживание кофемашин, CoffeeRemont24"
          />
        </Helmet>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className="max-w-screen-2xl mx-auto my-20 font-[Comfortaa] text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
            <h1 className="text-2xl font-medium text-center text-black">
              Контакты
            </h1>

            <div className="flex justify-center items-center">
              <ul className="space-y-5">
                {contacts.map((item) => (
                  <li className="flex space-x-10" key={item.title}>
                    {item.icon}
                    <p className="text-lg">{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-xl md:text-2xl font-medium text-center text-black pt-10">
              Оставьте нам вопрос
            </h2>

            <div className="flex justify-center w-full">
              <ContactForm />
            </div>
          </main>
          <Footer />
        </QueryClientProvider>
      </SnackbarProvider>
    </>
  );
};

export default Contacts;
