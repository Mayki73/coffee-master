import React, { useState, useEffect } from "react";
import { useStaticQuery, type PageProps, graphql, Link } from "gatsby";
import Header from "../components/Header";
import Button from "../components/Form/Button";
import { Disclosure } from "@headlessui/react";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  ClockIcon,
  RocketLaunchIcon,
  TagIcon,
  AcademicCapIcon,
  CreditCardIcon,
  CheckBadgeIcon,
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet";
import { dropdownList } from "../constants/dropdown-brands-list";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ReviewCarousel from "../components/ReviewCarousel";
import StartModal from "../components/StarterModal";
import ScrollAnimate from "../components/ScrollAnimate";

const advantages = [
  {
    title: "Гарантия 6 месяцев",
    description:
      "Документальная гарантия на ремонт - 6 месяцев! Делаем надежно.",
    icon: <ShieldCheckIcon className="w-16 h-16 font-bold" />,
  },
  {
    title: "Бесплатно",
    description: "Консультация, диагностика, выезд мастера - бесплатны всегда.",
    icon: <BanknotesIcon className="w-16 h-16 font-bold" />,
  },
  {
    title: "Срочный ремонт",
    description:
      "Можем приступить к ремонту в течение 2-х часов с момента вашего звонка.",
    icon: <ClockIcon className="w-20 h-20 font-bold" />,
  },
  {
    title: "Выезд на дом",
    description:
      "Делаем выездной ремонт кофемашин. Приезжает мастер, а не курьер.",
    icon: <RocketLaunchIcon className="w-16 h-16 font-bold" />,
  },
  {
    title: "Скидки",
    description:
      "Даем скидки до 20% за отзыв, ремонт нескольких кофемашин и на определенные модели.",
    icon: <TagIcon className="w-20 h-20 font-bold" />,
  },
  {
    title: "Опытные мастера",
    description: "В штате специалисты с опытом в ремонте более 3 лет.",
    icon: <AcademicCapIcon className="w-16 h-16 font-bold" />,
  },
  {
    title: "Все формы оплаты",
    description:
      "Работаем по наличному и безналичному расчету. Принимаем карты.",
    icon: <CreditCardIcon className="w-16 h-16 font-bold" />,
  },
  {
    title: "Оригинальные запчасти",
    description:
      "Только качественные запчасти и расходные материалы. В наличие.",
    icon: <CheckBadgeIcon className="w-16 h-16 font-bold" />,
  },
  {
    title: "Работаем по договору",
    description: "С физическими и юридическими лицами, компаниями и ИП.",
    icon: <BriefcaseIcon className="w-16 h-16 font-bold" />,
  },
];

const prices = [
  {
    title: "Базовое обслуживание",
    description:
      "Настройка, калибровка, запуск встроенной программы чистки, чистка от накипи и кофейных масел",
    price: "от 50 BYN",
  },
  {
    title: "Сервисное обслуживание",
    description:
      "Чистка диспенсера, чистка и смазка заварного устройства, замена сальников и колец",
    price: "от 60 BYN",
  },
  {
    title: "Не вынимается заварное устройство",
    description:
      "Чистка заварного устройства, ремонт платы или заварного устройства, замена сальников",
    price: "от 30 BYN",
  },
  {
    title: "Неравномерный налив",
    description:
      "Чистка гидросистемы, чистка диспенсера, чистка заварного блока, ремонт заварного блока",
    price: "от 40 BYN",
  },
  {
    title: "Не доливает кофе",
    description:
      "Чистка от накипи и кофейных масел, ремонт заварного блока, ремонт насоса, замена клапана",
    price: "от 35 BYN",
  },
  {
    title: "Не перемалывает кофе",
    description:
      "Ремонт платы, ремонт мотора кофемолки, ремонт или замена кофемолки, замена жерновов",
    price: "от 40 BYN",
  },
  {
    title: "Шумит во время налива",
    description:
      "Чистка, ремонт системы подачи воды, ремонт или замена насоса, чистка или замена помпы",
    price: "от 40 BYN",
  },
  {
    title: "Вода в контейнере для отходов",
    description:
      "Ремонт заварного устройства, замена дренажного клапана, уплотнительных колец и трубок",
    price: "от 45 BYN",
  },
  {
    title: "Кофе слишком горячий или холодный",
    description:
      "Настройка, чистка гидросистемы, замена датчика температуры или термостата",
    price: "от 35 BYN",
  },
];

const reviews = [
  {
    id: 1,
    name: "Александр",
    text: "Отличный сервис! Они быстро и эффективно починили мою кофемашину. Очень рекомендую!",
  },
  {
    id: 2,
    name: "Анастасия",
    text: "CoffeeRemont24 оказал отличное обслуживание. Они исправили проблемы с завариванием моей кофемашины в кратчайшие сроки. Теперь я могу наслаждаться своим любимым кофе снова!",
  },
  {
    id: 3,
    name: "Андрей",
    text: "Я был впечатлен профессионализмом. Они справились с ремонтом моей кофемашины с большим мастерством и дали полезные советы по обслуживанию. Спасибо!",
  },
  {
    id: 4,
    name: "Андрей",
    text: "Быстрый и надежный сервис! Они решили проблему с помолом в моей кофемашине и даже провели ее тщательную очистку. Очень доволен!",
  },
  {
    id: 5,
    name: "Денис",
    text: "CoffeeRemont24 превзошел мои ожидания. Они были честными о процессе ремонта и стоимости. Моя кофемашина теперь работает как новая. Отличная работа!",
  },
  {
    id: 6,
    name: "Николай",
    text: "У меня была самая неочевидная поломка. Они оперативно диагностировали проблему с моей кофемашиной и предложили экономичное решение. Очень доволен!",
  },
  {
    id: 7,
    name: "Юлия",
    text: "Я очень рекомендую CoffeeRemont24 для ремонта кофемашин. У них опытная команда, которая быстро починила нагревательный элемент в моей кофемашине. Теперь я могу наслаждаться горячим кофе каждое утро!",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isOpenStartModal, setIsOpenStartModal] = useState<boolean>(false);

  const changeStartModalState = () => {
    setIsOpenStartModal(!isOpenStartModal);
  };

  useEffect(() => {
    setTimeout(() => {
      changeStartModalState();
    }, 30000);
  }, []);

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

  const getImage = (path: string) => {
    const image = data.allFile.edges.find(({ node }: any) => {
      return node.relativePath === path;
    });

    if (image) {
      return image.node.childImageSharp.gatsbyImageData;
    }

    // Return a placeholder or fallback image if desired
    return <img src={path} alt={`Image: ${path}`} />;
  };

  const backgroundImage = getImage("coffee-machine_in_kitchen.png");

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
      <StartModal isOpen={isOpenStartModal} setIsOpen={changeStartModalState} />
      <Helmet>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Ремонт кофемашин в Минске на дому и в офисе - сервисный центр
          Сoffeeremont
        </title>
        <meta
          name="description"
          content="Ремонт кофемашин в Минске и области с выездом на дом. Бесплатная диагностика, гарантия, низкие цены, опытные мастера, срочный ремонт - сервисный центр coffeeremont24"
        />
        <link rel="canonical" href="https://www.coffeeremont24.by/" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ремонт кофемашин в Минске на дому и в офисе - сервисный центр СoffeeRemont"
        />
        <meta
          property="og:description"
          content="Ремонт кофемашин в Минске и области с выездом на дом. Бесплатная диагностика, гарантия, низкие цены, опытные мастера, срочный ремонт - сервисный центр coffeeremont24"
        />
        <meta property="og:url" content="https://www.coffeeremont24.by/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="CoffeeRemont24" />
        <meta
          name="twitter:description"
          content="Ремонт кофемашин в Минске и области с выездом на дом. Бесплатная диагностика, гарантия, низкие цены, опытные мастера, срочный ремонт - сервисный центр coffeeremont24"
        />
        <meta
          name="twitter:title"
          content="Ремонт кофемашин в Минске на дому и в офисе - сервисный центр Сoffeeremont"
        />
      </Helmet>

      <Header />

      <main className="font-[Comfortaa] mt-20 space-y-20 pb-20">
        <section
          className="flex flex-col items-center space-y-10 px-5 md:px-0 py-16 p-0 md:p-16 text-white"
          style={{
            backgroundImage: `url(${backgroundImage.images.fallback.src})`,
            objectFit: "cover",
            backgroundSize: "cover",
          }}
        >
          <div
            className="p-2 py-6 rounded-sm space-y-10 flex flex-col items-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(101,101,101, 80%), rgba(121,121,121,60%), rgba(164,164,164,50%), rgba(208,208,208,0), rgba(255,255,255, 0))",
            }}
          >
            <ScrollAnimate>
              <h1 className="text-xl md:text-2xl text-center font-bold">
                Ремонт кофемашин в Минске
              </h1>
            </ScrollAnimate>
            <ScrollAnimate>
              <p className="w-full max-w-[150rem] md:max-w-[80rem] text-center text-base md:text-xl">
                Наши мастера выполняют качественный ремонт для продления срока
                службы кофемашин. Мы не делаем диагностику за деньги – мы
                выявляем неисправные компоненты и меняем их на новые.
              </p>
            </ScrollAnimate>
            <ScrollAnimate>
              <div className="flex justify-center">
                <Button
                  onClick={openModalHandler}
                  className="text-black bg-white hover:bg-black hover:text-white"
                >
                  Рассчитать стоимость ремонта
                </Button>
              </div>
            </ScrollAnimate>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-5 md:mx-auto">
          <ScrollAnimate>
            <h2 className="text-xl md:text-2xl text-center">
              Узнать стоимость ремонта
            </h2>
          </ScrollAnimate>

          <div className="divide-y">
            <dl className="mt-10 space-y-6">
              {dropdownList.map((item) => (
                <ScrollAnimate>
                  <Disclosure
                    as="div"
                    key={item.title}
                    className="pt-6 pb-3 border-b border-black"
                  >
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-black">
                            <span className="text-xl font-semibold leading-7">
                              {item.title}
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
                          <div
                            className={`grid grid-cols-1 md:grid-cols-${item.columns} gap-10 py-10`}
                          >
                            {item.brands.map((brand) => (
                              <Link
                                to={brand.link}
                                className="flex flex-col items-center justify-center space-y-3 hover:scale-105"
                              >
                                <img
                                  className="max-w-[10rem] max-h-[10rem]"
                                  src={brand.image}
                                  alt={brand.name}
                                />
                                {item.labels ? (
                                  <p className="text-center">{brand.name}</p>
                                ) : null}
                              </Link>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </ScrollAnimate>
              ))}
            </dl>
          </div>
        </section>

        <section className="w-full py-20 bg-gray-100">
          <div className="max-w-screen-2xl mx-5 md:mx-auto space-y-20">
            <ScrollAnimate>
              <h2 className="text-xl md:text-2xl text-center">
                Наши преимущества
              </h2>
            </ScrollAnimate>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-5">
              {advantages.map((advantage) => (
                <ScrollAnimate>
                  <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-5 md:space-x-10">
                    {advantage.icon}
                    <div className="space-y-5">
                      <h3 className="text-xl font-bold">{advantage.title}</h3>
                      <p className="text-gray-600 max-w-[30rem] md:max-w-full">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-5 md:mx-auto space-y-10">
          <ScrollAnimate>
            <h2 className="text-center text-xl md:text-2xl">
              Цены на ремонт и обслуживание
            </h2>
          </ScrollAnimate>

          <div className="flex justify-center">
            <ScrollAnimate>
              <p className="max-w-[70rem] text-center text-gray-600">
                Цены отличаются в зависимости от необходимых работ по устранению
                неисправности, а также марки и модели кофемашины. Точную
                стоимость мастер сможет определить только после диагностики.
              </p>
            </ScrollAnimate>
          </div>

          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            {prices.map((price) => (
              <ScrollAnimate>
                <div
                  onClick={openModalHandler}
                  className="flex flex-col justify-between space-y-10 p-5 border-2 border-black hover:scale-105 hover:cursor-pointer bg-gray-100 hover:bg-white"
                >
                  <h3 className="text-xl font-bold">{price.title}</h3>
                  <p className="text-gray-600">{price.description}</p>
                  <p className="font-bold text-xl">{price.price}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
          <ScrollAnimate>
            <div className="flex justify-center">
              <Button
                onClick={openModalHandler}
                className="bg-black hover:text-black hover:bg-white text-white"
              >
                Заказать ремонт
              </Button>
            </div>
          </ScrollAnimate>
        </section>

        <section className="w-full py-20 bg-gray-100">
          <div className="max-w-screen-2xl mx-5 md:mx-auto space-y-10 pb-10">
            <ScrollAnimate>
              <h2 className="text-center text-xl md:text-2xl">Отзывы</h2>
            </ScrollAnimate>
          </div>

          <div className="max-w-screen-2xl mx-5 md:mx-auto">
            <ScrollAnimate>
              <ReviewCarousel reviews={reviews} />
            </ScrollAnimate>
          </div>
        </section>
        <ScrollAnimate>
          <section className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-5 text-center md:text-left md:space-x-20">
            <InformationCircleIcon className="w-32 h-32 " />
            <div className="space-y-5">
              <h4 className="text-xl">Остались вопросы?</h4>
              <p className="text-gray-600">
                Закажите обратный звонок и наши специалисты свяжутся с вами в
                ближайшее время и проконсультируют по интересующим вопросам
              </p>
            </div>
            <Button
              onClick={openModalHandler}
              className="bg-black hover:text-black hover:bg-white text-white"
            >
              Перезвонить
            </Button>
          </section>
        </ScrollAnimate>
      </main>

      <Footer />
    </>
  );
};

export default IndexPage;
