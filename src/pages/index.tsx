import * as React from "react";
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

const IndexPage: React.FC<PageProps> = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
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
      <Helmet>
        <title>Ремонт кофемашин - Coffeemaster</title>
        <meta
          name="description"
          content="Представляем вам качественный ремонт кофемашин в Минске. Наша команда опытных мастеров специализируется на ремонте и обслуживании кофемашин различных моделей и брендов. Мы предлагаем широкий спектр услуг, включая диагностику, ремонт неисправностей, замену деталей и профилактику. Наша цель - обеспечить надежное функционирование вашей кофемашины и наслаждение вкусным кофе каждый день. Обратитесь к нам для профессионального ремонта кофемашин в Минске."
        />
        <meta
          name="keywords"
          content="Ремонт кофемашин, ремонт кофемашин в Минске, ремонт кофемашин в Минске цены, сервис по ремонту кофемашин, кофемашина ремонт, обслуживание кофемашин, ремонт кофемашин Bosch, ремонт кофемашин Saeco, ремонт кофемашин DeLonghi, ремонт кофемашин Jura, ремонт кофемашин Krups, ремонт кофемашин Gaggia, качественный ремонт кофемашин, профессиональный ремонт кофемашин, ремонт кофейных машин в Минске, специалисты по ремонту кофемашин, быстрый ремонт кофемашин, надежный ремонт кофемашин, ремонт кофемашин всех брендов."
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
            className="p-2 rounded-2xl space-y-10 flex flex-col items-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(101,101,101, 80%), rgba(121,121,121,60%), rgba(164,164,164,50%), rgba(208,208,208,0), rgba(255,255,255, 0))",
            }}
          >
            <h1 className="text-2xl md:text-4xl text-center font-bold">
              Ремонт кофемашин в Минске
            </h1>
            <p className="w-full max-w-[150rem] md:max-w-[80rem] text-center text-base md:text-xl">
              Наши мастера выполняют качественный ремонт для продления срока
              службы кофемашин. Мы не делаем диагностику за деньги – мы выявляем
              неисправные компоненты и меняем их на новые.
            </p>
            <Button
              onClick={openModalHandler}
              className="text-black bg-white hover:bg-black hover:text-white"
            >
              Рассчитать стоимость ремонта
            </Button>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-5 md:mx-auto">
          <h2 className="text-2xl md:text-4xl text-center">
            Узнать стоимость ремонта
          </h2>

          <div className="divide-y">
            <dl className="mt-10 space-y-6">
              {dropdownList.map((item) => (
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
              ))}
            </dl>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-5 md:mx-auto space-y-20">
          <h2 className="text-2xl md:text-4xl text-center">
            Наши преимущества
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-5">
            {advantages.map((advantage) => (
              <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-5 md:space-x-10">
                {advantage.icon}
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">{advantage.title}</h3>
                  <p className="text-gray-600 max-w-[30rem] md:max-w-full">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-screen-2xl mx-5 md:mx-auto space-y-10">
          <h2 className="text-center text-2xl md:text-4xl">
            Цены на ремонт и обслуживание
          </h2>

          <div className="flex justify-center">
            <p className="max-w-[70rem] text-center text-gray-600">
              Цены отличаются в зависимости от необходимых работ по устранению
              неисправности, а также марки и модели кофемашины. Точную стоимость
              мастер сможет определить только после диагностики.
            </p>
          </div>

          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            {prices.map((price) => (
              <div
                onClick={openModalHandler}
                className="flex flex-col justify-between space-y-10 p-5 border-2 border-black hover:scale-105 hover:cursor-pointer"
              >
                <h3 className="text-2xl font-bold">{price.title}</h3>
                <p className="text-gray-600">{price.description}</p>
                <p className="font-bold text-xl">{price.price}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={openModalHandler}
              className="bg-black hover:text-black hover:bg-white text-white"
            >
              Заказать ремонт
            </Button>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-5 text-center md:text-left md:space-x-20">
          <InformationCircleIcon className="w-32 h-32 " />
          <div className="space-y-5">
            <h4 className="text-2xl">Остались вопросы?</h4>
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
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
