import React, { useState } from "react";
import Header from "../components/Header";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";
import Footer from "../components/Footer";
import { HeadFC } from "gatsby";
import Button from "../components/Form/Button";
import Modal from "../components/Modal";
import { Helmet } from "react-helmet";
import ScrollAnimate from "../components/ScrollAnimate";

const servicePrices = [
  {
    title: "Очистка от накипи (декальцинация)",
    price: "от 40 BYN",
  },
  {
    title: "Очистка от кофейных масел",
    price: "от 40 BYN",
  },
  {
    title: "Диагностика",
    price: "Бесплатно",
  },
  {
    title: "Замена ножей кофемолки",
    price: "от 60 BYN",
  },
  {
    title: "Замена нагревательного элемента",
    price: "от 60 BYN",
  },
  {
    title: "Замена бойлера",
    price: "от 60 BYN",
  },
  {
    title: "Ремонт платы питания",
    price: "от 60 BYN",
  },
  {
    title: "Ремонт помпы",
    price: "от 40 BYN",
  },
  {
    title: "Ремонт гидросистемы",
    price: "от 40 BYN",
  },
  {
    title: "Ремонт капучинатора",
    price: "от 50 BYN",
  },
  {
    title: "Замена терморезистора",
    price: "от 60 BYN",
  },
  {
    title: "Замена термостата",
    price: "от 60 BYN",
  },
  {
    title: "Замена сальника заварного блока",
    price: "от 40 BYN",
  },
  {
    title: "Ремонт заварного блока",
    price: "от 50 BYN",
  },
  {
    title: "Ремонт варочного модуля",
    price: "от 50 BYN",
  },
  {
    title: "Очистка диспенсера (с разборкой)",
    price: "от 60 BYN",
  },
  {
    title: "Ремонт кофемолки",
    price: "от 70 BYN",
  },
  {
    title: "Замена насоса воды",
    price: "от 50 BYN",
  },
  {
    title: "Ремонт редуктора заварного блока",
    price: "от 150 BYN",
  },
  {
    title: "Замена помпы воды",
    price: "от 50 BYN",
  },
  {
    title: "Замена счетчика воды (флоуметра)",
    price: "от 50 BYN",
  },
  {
    title: "Замена электропривода варочного модуля",
    price: "от 40 BYN",
  },
  {
    title: "Замена электромагнитного клапана",
    price: "от 50 BYN",
  },
  {
    title: "Ремонт системы подготовки кофе",
    price: "от 40 BYN",
  },
  {
    title: "Замена внутренних контактов или датчиков",
    price: "от 50 BYN",
  },
  {
    title: "Замена датчика температуры",
    price: "от 50 BYN",
  },
  {
    title: "Ремонт дренажного клапана",
    price: "от 60 BYN",
  },
  {
    title: "Сбор – разбор технический",
    price: "от 40 BYN",
  },
  {
    title: "Механическая очистка внутренней полости",
    price: "от 40 BYN",
  },
  {
    title: "Очистка внешних поверхностей от кухонных загрязнений",
    price: "Бесплатно (при ремонте)",
  },
];

const otherPrices = [
  {
    title: "Комплексное обслуживание кофемашины",
    price: "от 80 BYN",
  },
  {
    title: "Первичная консультация",
    price: "Бесплатно",
  },
  {
    title: "Замена фильтров",
    price: "Бесплатно при ТО",
  },
];

const breakdownPrices = [
  {
    title: "Не включается",
    price: "от 50 BYN",
  },
  {
    title: "Выдает ошибку",
    price: "от 40 BYN",
  },
  {
    title: "Не доливает кофе",
    price: "от 40 BYN",
  },
  {
    title: "Протекает вода",
    price: "от 40 BYN",
  },
  {
    title: "Не наливает кофе",
    price: "от 40 BYN",
  },
  {
    title: "Не делает пар",
    price: "от 40 BYN",
  },
  {
    title: "Шумит во время налива напитка",
    price: "от 40 BYN",
  },
  {
    title: "Неравномерная выдача напитка",
    price: "от 40 BYN",
  },
  {
    title: "Не перемалывает кофе",
    price: "от 50 BYN",
  },
  {
    title: "Слышен звук помола, но не наливает кофе",
    price: "от 40 BYN",
  },
  {
    title: "Кофе не крепкий",
    price: "от 40 BYN",
  },
  {
    title: "Жидкость в контейнере для отходов",
    price: "от 40 BYN",
  },
  {
    title: "Кофе слишком горячий/холодный",
    price: "от 40 BYN",
  },
  {
    title: "Не вспенивает молоко",
    price: "от 40 BYN",
  },
  {
    title: "Не вынимается заварное устройство",
    price: "от 40 BYN",
  },
];

const Prices: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const logoUrl = "favicon.ico"; // Replace with your logo URL

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "CoffeeRemont24",
    url: "https://www.coffeeremont24.by/prices/",
    logo: logoUrl,
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
      <Helmet>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Цены на ремонт и обслуживание кофемашин в Минске - coffeeremont24
        </title>
        <meta
          name="description"
          content="Стоимость услуг по ремонту и обслуживанию кофемашин в Минске. Диагностика и выезд - бесплатно! Прайс-лист на сервисные работы и устранение неисправностей"
        />
        <link rel="canonical" href="https://coffeeremont24.by/prices/" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Цены на ремонт и обслуживание кофемашин в Минске - coffeeremont24"
        />
        <link rel="icon" href={logoUrl} />
        <meta
          property="og:image"
          content="https://coffeeremont24.by/favicon.ico"
        />
        <meta
          property="og:description"
          content="Стоимость услуг по ремонту и обслуживанию кофемашин в Минске. Диагностика и выезд - бесплатно! Прайс-лист на сервисные работы и устранение неисправностей"
        />
        <meta property="og:url" content="https://coffeeremont24.by/prices/" />
        <meta property="og:site_name" content="coffeeremont24" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Стоимость услуг по ремонту и обслуживанию кофемашин в Минске. Диагностика и выезд - бесплатно! Прайс-лист на сервисные работы и устранение неисправностей"
        />
        <meta
          name="twitter:title"
          content="Цены на ремонт и обслуживание кофемашин в Минске - coffeeremont24"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
        <ScrollAnimate>
          <h1 className="text-xl md:text-2xl text-center text-black font-normal">
            Цены на ремонт кофемашин
          </h1>
        </ScrollAnimate>

        <ScrollAnimate>
          <p>
            Ознакомьтесь с прайс-листом на ремонт и обслуживание кофемашин. Вы
            можете узнать цены на конкретные работы или на комплексный ремонт
            неисправности.
          </p>
        </ScrollAnimate>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 space-y-10 md:space-y-0">
          <div className="relative overflow-x-auto shadow-md">
            <ScrollAnimate>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-black">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-lg">
                      Цены по услугам
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Price</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Order</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {servicePrices.map((servicePrice) => (
                    <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        <p className="max-w-[14rem]">{servicePrice.title}</p>
                      </th>
                      <td className="px-6 py-4">
                        <p>{servicePrice.price}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          onClick={openModalHandler}
                          className="bg-black hover:text-black hover:bg-white text-white"
                        >
                          Заказать
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollAnimate>
          </div>

          <div className="space-y-10">
            <div className="relative overflow-x-auto shadow-md">
              <ScrollAnimate>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white uppercase bg-black">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-lg">
                        Остальные услуги
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Price</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Order</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {otherPrices.map((otherPrice) => (
                      <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          <p className="max-w-[14rem]">{otherPrice.title}</p>
                        </th>
                        <td className="px-6 py-4">
                          <p>{otherPrice.price}</p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button
                            onClick={openModalHandler}
                            className="bg-black hover:text-black hover:bg-white text-white"
                          >
                            Заказать
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollAnimate>
            </div>

            <div className="relative overflow-x-auto shadow-md">
              <ScrollAnimate>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white uppercase bg-black">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-lg">
                        Остальные услуги
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Price</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Order</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {breakdownPrices.map((breakdownPrice) => (
                      <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          <p className="max-w-[14rem]">
                            {breakdownPrice.title}
                          </p>
                        </th>
                        <td className="px-6 py-4">
                          <p>{breakdownPrice.price}</p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button
                            onClick={openModalHandler}
                            className="bg-black hover:text-black hover:bg-white text-white"
                          >
                            Заказать
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollAnimate>
            </div>
          </div>
        </div>

        <ScrollAnimate>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5 border-2 border-black">
            <ChatBubbleLeftEllipsisIcon className="w-32 h-32 text-black" />

            <div className="space-y-3">
              <h3 className="text-xl font-medium">Не нашли подходящее?</h3>
              <h4>Закажите обратный звонок</h4>
              <p>
                Оставьте свои контакты в форме, наши специалисты свяжутся с вами
                в ближайшее время
              </p>
            </div>

            <Button
              onClick={openModalHandler}
              className="bg-black hover:text-black hover:bg-white text-white"
            >
              Заказать звонок
            </Button>
          </div>
        </ScrollAnimate>
      </main>
      <Footer />
    </>
  );
};

export default Prices;
