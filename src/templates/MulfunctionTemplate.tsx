import React, { useState } from "react";
import {
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Form/Button";
import Modal from "../components/Modal";
import { Helmet } from "react-helmet";
import ScrollAnimate from "../components/ScrollAnimate";

const MulfunctionTemplate: React.FC = ({ pageContext }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, prices, seo } = pageContext.mulfunction;
  const { advantages } = pageContext;

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const logoUrl = "https://coffeeremont24.by/favicon.ico"; // Replace with your logo URL

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "CoffeeRemont24",
    url: seo.link,
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
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.link} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.link} />
        <meta property="og:site_name" content="coffeeremont24" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:title" content={seo.title} />
        <link rel="icon" href={logoUrl} />
        <meta
          property="og:image"
          content="https://coffeeremont24.by/favicon.ico"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
        <ScrollAnimate>
          <h1 className="text-2xl text-center font-bold text-black">{title}</h1>
        </ScrollAnimate>

        <ScrollAnimate>
          <p>{description}</p>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="mt-10 flex justify-center">
            <Button
              onClick={openModalHandler}
              className="bg-black hover:text-black hover:bg-white text-white"
            >
              Заказать ремонт
            </Button>
          </div>
        </ScrollAnimate>

        <section className="space-y-20 pt-10">
          <ScrollAnimate>
            <h2 className="text-2xl text-black text-center">
              Рекомендации или возможные причины поломки
            </h2>
          </ScrollAnimate>

          <ScrollAnimate>
            <ul
              className={`grid grid-cols-1 md:grid-cols-${
                prices.length % 2 === 0 ? 2 : 3
              } gap-10`}
            >
              {prices.map((price: any) => {
                return (
                  <li
                    key={price.name}
                    onClick={openModalHandler}
                    className="flex flex-col md:flex-row items-center space-y-5 md:space-x-10 p-5 border-2 border-black hover:scale-105 hover:cursor-pointer bg-gray-100 hover:bg-white"
                  >
                    {price.type === "advise" ? (
                      <QuestionMarkCircleIcon className="w-32 h-32 text-black" />
                    ) : (
                      <ExclamationCircleIcon className="w-32 h-32 text-black" />
                    )}
                    <div className="space-y-5">
                      <p>{price.name}</p>
                      <p className="text-black">{price.price}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollAnimate>
        </section>

        <section className="pt-10 space-y-10">
          <ScrollAnimate>
            <h2 className="text-xl md:text-2xl text-center text-black">
              Наши преимущества
            </h2>
          </ScrollAnimate>

          <ScrollAnimate>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {advantages.map((advantage: any) => (
                <li
                  key={advantages.title}
                  className="p-5 border-2 border-black space-y-5 bg-gray-100 hover:bg-white"
                >
                  <h3 className="text-xl text-black font-bold">
                    {advantage.title}
                  </h3>
                  <p>{advantage.description}</p>
                </li>
              ))}
            </ul>
          </ScrollAnimate>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MulfunctionTemplate;
