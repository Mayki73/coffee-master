import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import {
  ChatBubbleLeftEllipsisIcon,
  MinusSmallIcon,
  PhoneIcon,
  PlusSmallIcon,
} from "@heroicons/react/20/solid";
import Button from "../components/Form/Button";
import { Disclosure } from "@headlessui/react";
import { graphql, useStaticQuery } from "gatsby";
import Modal from "../components/Modal";

const BrandTemplate: React.FC = ({ pageContext }: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { name, title, description, logo, service, mulfunctions, models } =
    pageContext.brand;

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg|png|jpeg)/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const getImage = () => {
    const image = data.allFile.edges.find(({ node }: any) => {
      return node.relativePath === logo;
    });

    if (image) {
      return (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          style={{ width: "60%" }}
          alt={title}
        />
      );
    }

    // Return a placeholder or fallback image if desired
    return <img src={logo} alt={`Image: ${logo}`} />;
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
      <Header />
      <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
        <h1 className="text-2xl md:text-4xl font-bold text-black text-center">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row items-center space-y-5 md:space-x-10">
          <p>{description}</p>
          {getImage()}
        </div>

        <section className="pt-10 space-y-10">
          <h2 className="text-center text-2xl md:text-4xl text-black">
            Цены на ремонт бренда {name.toUpperCase()}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {mulfunctions?.map((mulfunction: any) => (
              <div
                key={mulfunction.title}
                onClick={openModalHandler}
                className="border-2 border-black p-5 space-y-5 hover:scale-105 hover:cursor-pointer"
              >
                <h3 className="text-lg md:text-2xl font-bold text-black p-6">
                  {mulfunction.title}
                </h3>
                <p>{mulfunction.description}</p>
                <p className="text-black font-bold">{mulfunction.price}</p>
              </div>
            ))}
            <div className="flex flex-col space-y-5 justify-center items-center">
              <PhoneIcon className="w-10 h-10" />
              <p className="max-w-[20rem] text-center text-sm">
                Оставьте заявку для получения дополнительной информации
              </p>

              <Button
                onClick={openModalHandler}
                className="bg-black hover:text-black hover:bg-white text-white"
              >
                Заказать звонок
              </Button>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-2xl md:text-4xl text-black text-center">
            Ремонтируем модели
          </h2>

          <div>
            <dl className="mt-10 space-y-6">
              {models.map((model: any) => (
                <Disclosure
                  as="div"
                  key={model.title}
                  className="pt-6 pb-3 border-b border-black"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-black">
                          <span className="text-lg md:text-xl font-semibold leading-7">
                            {model.title}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <ul className={`space-y-5`}>
                          {model.details.map((detail: any) => (
                            <li
                              className="border-b border-gray-600 pb-5"
                              key={detail}
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </section>

        <section className="pt-10 space-y-10">
          <h2 className="text-2xl md:text-4xl text-black text-center">
            Не нашли свою модель?
          </h2>

          <p>
            Если вы не нашли свою модель в списке или не знаете, как ее
            определить – напишите или позвоните нам. Мы подскажем, как это
            сделать и сможем починить вашу кофемашину!
          </p>

          <div className="flex justify-center">
            <Button
              onClick={openModalHandler}
              className="bg-black hover:text-black hover:bg-white text-white"
            >
              Оставить заявку
            </Button>
          </div>
        </section>

        <section className="space-y-10 pt-10">
          <h2 className="text-2xl md:text-4xl text-center text-black">
            Обслуживание кофемашин {name}
          </h2>
          <p>{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className="p-5 space-y-5 border-2 border-black hover:scale-105 hover:cursor-pointer"
              onClick={openModalHandler}
              key="basic"
            >
              <h3 className="text-black font-bold">Базовое обслуживание</h3>
              <p>{service.services[0].description}</p>
              <p className="font-bold text-black">
                {service.services[0].price}
              </p>
            </div>

            <div
              className="p-5 space-y-5 border-2 border-black hover:scale-105 hover:cursor-pointer"
              onClick={openModalHandler}
              key="service"
            >
              <h3 className="text-black font-bold">Сервисное обслуживание</h3>
              <p>{service.services[1].description}</p>
              <p className="font-bold text-black">
                {service.services[1].price}
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5 border-2 border-black">
          <ChatBubbleLeftEllipsisIcon className="w-32 h-32 text-black" />

          <div className="space-y-3">
            <h3 className="text-xl font-medium">Не нашли подходящее?</h3>
            <h4>Закажите обратный звонок</h4>
            <p>
              Оставьте свои контакты в форме, наши специалисты свяжутся с вами в
              ближайшее время
            </p>
          </div>

          <Button
            onClick={openModalHandler}
            className="bg-black hover:text-black hover:bg-white text-white"
          >
            Заказать звонок
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandTemplate;
