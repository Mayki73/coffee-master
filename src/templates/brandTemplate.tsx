import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GatsbyImage } from "gatsby-plugin-image";
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
import ScrollAnimate from "../components/ScrollAnimate";
import SEOWrapper from "../components/SEOWrapper";

const BrandTemplate: React.FC = ({ pageContext }: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const {
    name,
    title,
    description,
    logo,
    service,
    mulfunctions,
    models,
    seo,
    image,
  } = pageContext.brand;

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

  const getLogo = () => {
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

  const getImage = () => {
    const img = data.allFile.edges.find(({ node }: any) => {
      return node.relativePath === image;
    });

    if (image) {
      return (
        <GatsbyImage
          image={img.node.childImageSharp.gatsbyImageData}
          style={{ width: "70%" }}
          alt={title}
        />
      );
    }

    // Return a placeholder or fallback image if desired
    return <img src={image} alt={`Image: ${image}`} />;
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />

      <SEOWrapper
        title={seo.title}
        description={seo.description}
        link={seo.link}
      >
        <Header />
        <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
          <ScrollAnimate>
            <h1 className="text-xl md:text-2xl font-bold text-black text-center">
              {title}
            </h1>
          </ScrollAnimate>

          <ScrollAnimate>
            <div className="flex flex-col md:flex-row items-center space-y-5 md:space-x-10">
              <p>{description}</p>
              {getLogo()}
            </div>
          </ScrollAnimate>

          <section className="pt-10 space-y-10">
            <ScrollAnimate>
              <h2 className="text-center text-xl md:text-2xl text-black">
                Преимущества и условия
              </h2>
            </ScrollAnimate>

            <ScrollAnimate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div
                  className="space-y-5 p-5 border-2 border-black bg-gray-100 hover:bg-white hover:cursor-pointer hover:scale-105"
                  onClick={openModalHandler}
                >
                  <h3 className="text-lg font-bold text-black">
                    Гарантия – полгода
                  </h3>

                  <p>
                    Гарантия на ремонт кофемашины{" "}
                    {name[0].toUpperCase() + name.slice(1)} составляет 6
                    месяцев. Мы не являемся посредниками, имеем достаточно опыта
                    и уверены в качестве своей работы. Поэтому можем
                    гарантировать ее документально.
                  </p>
                </div>

                <div
                  className="space-y-5 p-5 border-2 border-black bg-gray-100 hover:bg-white hover:cursor-pointer hover:scale-105"
                  onClick={openModalHandler}
                >
                  <h3 className="text-lg font-bold text-black">
                    Работаем по договору
                  </h3>

                  <p>
                    Мы работаем с физическими и юридическими лицами, по
                    наличному и безналичному расчету. Принимаем к оплате карты:
                    Visa, Master Card, МИР. Не берем предоплату и предупреждаем
                    заранее, если стоимость ремонта может измениться
                  </p>
                </div>

                <div
                  className="space-y-5 p-5 border-2 border-black bg-gray-100 hover:bg-white hover:cursor-pointer hover:scale-105"
                  onClick={openModalHandler}
                >
                  <h3 className="text-lg font-bold text-black">
                    Бесплатно всегда
                  </h3>

                  <ul className="space-y-5 list-disc list-inside">
                    <li key="diagnostic">Диагностика</li>
                    <li key="consultation">Консультация</li>
                  </ul>
                </div>

                <div
                  className="space-y-5 p-5 border-2 border-black bg-gray-100 hover:bg-white hover:cursor-pointer hover:scale-105"
                  onClick={openModalHandler}
                >
                  <h3 className="text-lg font-bold text-black">Скидки</h3>

                  <ul className="space-y-5 list-disc list-inside">
                    <li key="repair">За ремонт нескольких кофемашин</li>
                    <li key="discount">Мы часто проводим различные акции</li>
                    <li key="leave order">
                      Оставьте заявку прямо сейчас и получите свой первый
                      подарок
                    </li>
                  </ul>
                </div>

                <div
                  className="space-y-5 p-5 border-2 border-black bg-gray-100 hover:bg-white hover:cursor-pointer hover:scale-105"
                  onClick={openModalHandler}
                >
                  <h3 className="text-lg font-bold text-black">
                    Выезд домой или в офис
                  </h3>

                  <p>
                    Для вашего удобства мы осуществляем выездной ремонт и
                    обслуживание кофемашин{" "}
                    {name[0].toUpperCase() + name.slice(1)}: на дому, в офисе, в
                    кафе или ресторане.
                  </p>
                </div>

                <div
                  className="space-y-5 p-5 border-2 border-black bg-gray-100 hover:bg-white hover:cursor-pointer hover:scale-105"
                  onClick={openModalHandler}
                >
                  <h3 className="text-lg font-bold text-black">
                    Срочный ремонт
                  </h3>

                  <p>
                    Если вам требуется экспресс ремонт кофемашины{" "}
                    {name[0].toUpperCase() + name.slice(1)} – мы сделаем его
                    всего за 2 часа с момента вашего обращения. Не теряйте ни
                    минуты – звоните!
                  </p>
                </div>

                <div
                  className="space-y-5 p-5 border-2 border-black bg-gray-100 hover:bg-white hover:cursor-pointer hover:scale-105"
                  onClick={openModalHandler}
                >
                  <h3 className="text-lg font-bold text-black">
                    Опытные мастера
                  </h3>

                  <ul className="space-y-5 list-disc list-inside">
                    <li key="master experience">
                      У всех мастеров огромный опыт в ремонте кофемашин и
                      кофеварок {name[0].toUpperCase() + name.slice(1)}{" "}
                      различной степени сложности
                    </li>
                    <li key="own masters">
                      Все мастера в штате компании, мы не отдаем работы
                      сторонним специалистам, потому что ценим качество
                    </li>
                    <li key="learning">
                      Научим вас проводить необходимые процедуры по обслуживанию
                      и очистке кофемашин{" "}
                      {name[0].toUpperCase() + name.slice(1)}.
                    </li>
                  </ul>
                </div>
                <div
                  className="space-y-5 p-5 border-2 border-black bg-gray-100 hover:bg-white hover:cursor-pointer hover:scale-105"
                  onClick={openModalHandler}
                >
                  <h3 className="text-lg font-bold text-black">
                    Оригинальные запчасти
                  </h3>

                  <ul className="space-y-5 list-disc list-inside">
                    <li key="original">
                      Мы закупаем только оригинальные запчасти{" "}
                      {name[0].toUpperCase() + name.slice(1)} от производителя у
                      проверенных поставщиков
                    </li>
                    <li key="details">
                      Часто выходящие из строя детали{" "}
                      {name[0].toUpperCase() + name.slice(1)} уже в наличии у
                      мастера, поэтому ремонт занимает не более трех часов.
                    </li>
                    <li key="chemistry">
                      Вы можете приобрести профессиональную химию для
                      обслуживания
                      {name[0].toUpperCase() + name.slice(1)} у наших мастеров.
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimate>
          </section>

          <section className="pt-10 space-y-10">
            <ScrollAnimate>
              <h2 className="text-center text-xl md:text-2xl text-black">
                Цены на ремонт бренда {name.toUpperCase()}
              </h2>
            </ScrollAnimate>

            <ScrollAnimate>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {mulfunctions?.map((mulfunction: any) => (
                  <div
                    key={mulfunction.title}
                    onClick={openModalHandler}
                    className="border-2 border-black p-5 space-y-5 hover:scale-105 hover:cursor-pointer bg-gray-100 hover:bg-white"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-black p-6">
                      {mulfunction.title}
                    </h3>
                    <p>{mulfunction.description}</p>
                    <p className="text-black font-bold">{mulfunction.price}</p>
                  </div>
                ))}
                <ScrollAnimate>
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
                </ScrollAnimate>
              </div>
            </ScrollAnimate>
          </section>

          <section className="pt-10">
            <ScrollAnimate>
              <h2 className="text-xl md:text-2xl text-black text-center">
                Ремонтируем модели
              </h2>
            </ScrollAnimate>

            <div>
              <dl className="mt-10">
                <ul className="list-none list-inside space-y-6">
                  {models.map((model: any) => (
                    <li key={model.title}>
                      <ScrollAnimate>
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
                      </ScrollAnimate>
                    </li>
                  ))}
                </ul>
              </dl>
            </div>
          </section>

          <section className="pt-10 space-y-10">
            <ScrollAnimate>
              <h2 className="text-xl md:text-2xl text-black text-center">
                Не нашли свою модель?
              </h2>
            </ScrollAnimate>

            <ScrollAnimate>
              <p>
                Если вы не нашли свою модель в списке или не знаете, как ее
                определить – напишите или позвоните нам. Мы подскажем, как это
                сделать и сможем починить вашу кофемашину!
              </p>
            </ScrollAnimate>

            <ScrollAnimate>
              <div className="flex justify-center">
                <Button
                  onClick={openModalHandler}
                  className="bg-black hover:text-black hover:bg-white text-white"
                >
                  Оставить заявку
                </Button>
              </div>
            </ScrollAnimate>
          </section>

          <section className="space-y-10 pt-10">
            <ScrollAnimate>
              <h2 className="text-xl md:text-2xl text-center text-black">
                Обслуживание кофемашин {name}
              </h2>
            </ScrollAnimate>

            <ScrollAnimate>
              <div className="flex items-center justify-center grid grid-cols-1 md:grid-cols-4 space-y-5 md:space-x-10">
                <p className="col-span-3">{service.description}</p>
                {getImage()}
              </div>
            </ScrollAnimate>

            <ScrollAnimate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-100 hover:bg-white">
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
                  className="p-5 space-y-5 border-2 border-black hover:scale-105 hover:cursor-pointer bg-gray-100 hover:bg-white"
                  onClick={openModalHandler}
                  key="service"
                >
                  <h3 className="text-black font-bold">
                    Сервисное обслуживание
                  </h3>
                  <p>{service.services[1].description}</p>
                  <p className="font-bold text-black">
                    {service.services[1].price}
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </section>

          <ScrollAnimate>
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5 border-2 border-black">
              <ChatBubbleLeftEllipsisIcon className="w-32 h-32 text-black" />

              <div className="space-y-3">
                <h3 className="text-xl font-medium">Не нашли подходящее?</h3>
                <h4>Закажите обратный звонок</h4>
                <p>
                  Оставьте свои контакты в форме, наши специалисты свяжутся с
                  вами в ближайшее время
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
      </SEOWrapper>
    </>
  );
};

export default BrandTemplate;
