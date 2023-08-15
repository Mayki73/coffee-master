import React from "react";
import { Helmet } from "react-helmet";
import {
  PhoneIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedArrows from "../components/AnimatedArrows";
import ScrollAnimate from "../components/ScrollAnimate";

const services = [
  "диагностика кофемашин и выявление неисправного компонента",
  "ремонт кофемашин всех марок: замена неисправных узлов, с использованием оригинальных компонентов",
  "ремонт капсульных и рожковых кофемашин",
  "ремонт электрики с привлечение высококвалифицированных специалистов",
  "сложные ремонты, от которых другие отказываются",
];

const workSteps = [
  {
    title: "Получение заявки",
    description:
      "Вы оставляете заявку на ремонт кофемашины на сайте или по телефону",
    icon: <PhoneIcon className="w-20 h-20 md:w-32 md:h-32" />,
  },
  {
    title: "Диагностика",
    description:
      "Диагностируем вашу кофемашину в течении часа или одного дня ( в зависимости от сложности неисправности)",
    icon: <MagnifyingGlassIcon className="w-20 h-20 md:w-32 md:h-32" />,
  },
  {
    title: "Ремонт",
    description:
      "Выполняем ремонт кофемашины в течении часа или нескольких дней ( при сложных ремонтах).",
    icon: <WrenchScrewdriverIcon className="w-20 h-20 md:w-32 md:h-32" />,
  },
];

const About: React.FC = () => {
  const logoUrl = "favicon.ico"; // Replace with your logo URL

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "CoffeeRemont24",
    url: "https://www.coffeeremont24.by/about/",
    logo: logoUrl,
  };

  return (
    <>
      <Helmet>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          О нас - Специалисты по ремонту кофемашин в Минске | CoffeeRemont24
        </title>
        <meta
          name="description"
          content="Познакомьтесь с нашей командой опытных специалистов по ремонту кофемашин в Минске. Мы предлагаем профессиональные услуги по ремонту кофеоборудования, включая этапы от подачи заявки до окончательного ремонта. Узнайте больше о нашем опыте и качестве обслуживания."
        />
        <link rel="canonical" href="https://www.coffeeremont24.by/about/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:title"
          content="О нас - Специалисты по ремонту кофемашин в Минске | CoffeeRemont24"
        />
        <meta
          property="og:description"
          content="Познакомьтесь с нашей командой опытных специалистов по ремонту кофемашин в Минске. Мы предлагаем профессиональные услуги по ремонту кофеоборудования, включая этапы от подачи заявки до окончательного ремонта. Узнайте больше о нашем опыте и качестве обслуживания."
        />
        <meta
          property="og:url"
          content="https://www.coffeeremont24.by/about/"
        />
        <link rel="icon" href={logoUrl} />
        <meta
          property="og:image"
          content="https://coffeeremont24.by/favicon.ico"
        />
        <meta property="og:site_name" content="coffeeremont24" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Познакомьтесь с нашей командой опытных специалистов по ремонту кофемашин в Минске. Мы предлагаем профессиональные услуги по ремонту кофеоборудования, включая этапы от подачи заявки до окончательного ремонта. Узнайте больше о нашем опыте и качестве обслуживания."
        />
        <meta
          name="twitter:title"
          content="О нас - Специалисты по ремонту кофемашин в Минске | CoffeeRemont24"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light">
        <ScrollAnimate>
          <h1 className="text-xl md:text-2xl text-center text-black font-normal">
            О нас
          </h1>
        </ScrollAnimate>

        <ScrollAnimate>
          <p className="mt-10">
            Наша компания работает более 5 лет, за это время мы наработали опыт
            по ремонту даже самых сложных неисправностей. Мы каждый день
            ремонтируем кофемашины разных брендов:{" "}
            <b className="text-black">
              Delonghi, Jura, Saeco, Philips, Bosch, WMF, Shaerer, Franke,
              Simonelli, Smeg, Bork, Gaggia, Melitta, Miele, Nivona, Krups
            </b>{" "}
            и даем на это гарантию 6 месяцев. У нас в штате 5 мастеров, которые
            выполняют плановые обслуживания и ремонты в офисах города Москвы и
            МО. Сеть кофеен, которая угощает Вас кофе каждый день, наша работа.
          </p>
        </ScrollAnimate>

        <ScrollAnimate>
          <h2 className="text-xl md:text-2xl text-center mt-20 text-black font-normal">
            Какие работы мы выполняем:
          </h2>
        </ScrollAnimate>

        <div className="flex justify-center mt-10">
          <ul className="space-y-5 text-base md:text-xl text-gray-600 font-light max-w-[50rem]">
            {services.map((service, index) => (
              <ScrollAnimate>
                <li key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {service}
                </li>
              </ScrollAnimate>
            ))}
          </ul>
        </div>

        <ScrollAnimate>
          <h3 className="text-xl md:text-2xl text-center mt-20 text-black font-normal">
            Как мы работаем?
          </h3>
        </ScrollAnimate>
        <ScrollAnimate>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-10 mt-10">
            <div className="flex flex-col items-center space-y-5 max-w-[20rem]">
              {workSteps[0].icon}
              <h4 className="text-xl md:text-xl text-center text-black font-normal">
                {workSteps[0].title}
              </h4>
              <p className="text-base md:text-lg text-center text-gray-600 font-light">
                {workSteps[0].description}
              </p>
            </div>

            <AnimatedArrows />

            <div className="flex flex-col items-center space-y-5 max-w-[20rem]">
              {workSteps[1].icon}
              <h4 className="text-xl md:text-xl text-center text-black font-normal">
                {workSteps[1].title}
              </h4>
              <p className="text-base md:text-lg text-center text-gray-600 font-light">
                {workSteps[1].description}
              </p>
            </div>

            <AnimatedArrows />

            <div className="flex flex-col items-center space-y-5 max-w-[20rem]">
              {workSteps[2].icon}
              <h4 className="text-xl md:text-xl text-center text-black font-normal">
                {workSteps[2].title}
              </h4>
              <p className="text-base md:text-lg text-center text-gray-600 font-light">
                {workSteps[2].description}
              </p>
            </div>
          </div>
        </ScrollAnimate>
      </main>
      <Footer />
    </>
  );
};

export default About;
