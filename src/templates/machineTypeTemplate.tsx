import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Form/Button";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./repair.css";
import Modal from "../components/Modal";
import { Helmet } from "react-helmet";

const servicePrices = [
  {
    title: "Очистка от накипи (декальцинация)",
    price: "от 40 BYN",
  },
  {
    title: "Очистка от кофейных масел",
    price: "от 30 BYN",
  },
  {
    title: "Диагностика (бесплатно при ремонте)",
    price: "от 40 BYN",
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
    title: "Ремонт электропроводки",
    price: "от 60 BYN",
  },
  {
    title: "Ремонт платы питания",
    price: "от 120 BYN",
  },
  {
    title: "Ремонт помпы",
    price: "от 60 BYN",
  },
  {
    title: "Ремонт гидросистемы",
    price: "от 70 BYN",
  },
  {
    title: "Ремонт капучинатора",
    price: "от 40 BYN",
  },
  {
    title: "Замена термопредохранителя",
    price: "от 40 BYN",
  },
  {
    title: "Замена сальника заварного блока",
    price: "от 60 BYN",
  },
  {
    title: "Ремонт заварного блока",
    price: "от 60 BYN",
  },
  {
    title: "Очистка диспенсера (с разборкой)",
    price: "от 50 BYN",
  },
  {
    title: "Ремонт кофемолки",
    price: "от 60 BYN",
  },
  {
    title: "Ремонт редуктора заварного блока",
    price: "от 65 BYN",
  },
  {
    title: "Замена насоса воды",
    price: "от 40 BYN",
  },
  {
    title: "Замена счетчика воды (флоуметра)",
    price: "от 40 BYN",
  },
  {
    title: "Замена электропривода варочного модуля",
    price: "от 70 BYN",
  },
  {
    title: "Замена электромагнитного клапана",
    price: "от 40 BYN",
  },
  {
    title: "Ремонт системы подготовки кофе",
    price: "от 40 BYN",
  },
  {
    title: "Замена внутренних контактов или датчиков",
    price: "от 40 BYN",
  },
  {
    title: "Замена датчика температуры",
    price: "от 50 BYN",
  },
  {
    title: "Ремонт дренажного клапана",
    price: "от 60 BYN",
  },
];

const MachineTypeTemplate: React.FC = ({ pageContext }: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const {
    title,
    descriptionType,
    description,
    descriptionList,
    brands,
    advantages,
    seo,
  } = pageContext.machine;

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
      return (
        <GatsbyImage
          className="w-32 object-contain"
          image={image.node.childImageSharp.gatsbyImageData}
          alt={`logo: ${path}`}
        />
      );
    }

    return <img src={path} alt={`Image: ${path}`} />;
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
      <Header />
      <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
        <h1 className="text-2xl md:text-4xl text-black font-medium text-center">
          {title}
        </h1>

        {descriptionType === "text" ? (
          <p>{description}</p>
        ) : (
          <div className="space-y-5">
            <p>{description}</p>
            <ul className="space-y-3 list-disc list-inside">
              {descriptionList?.map((descriptionListItem: any) => (
                <li>{descriptionListItem}</li>
              ))}
            </ul>
          </div>
        )}

        <h2 className="text-2xl md:text-4xl md:text-4xl text-black text-center pt-10">
          Выберите бренд
        </h2>
        <div className="gridCol">
          {brands?.map((brand: any) => {
            return (
              <Link
                key={brand?.name}
                to={brand?.name || "/"}
                className="flex flex-col items-center hover:scale-105 cursor-pointer"
              >
                {getImage(brand.logo)}
              </Link>
            );
          })}
        </div>

        <h3 className="text-2xl md:text-4xl text-center text-black pt-10">
          Не нашли свою марку?
        </h3>
        <p>
          Если вы не нашли свой бренд в списке или не знаете, как его определить
          – <button className="font-bold">напишите</button> или{" "}
          <button className="font-bold">позвоните</button> нам. Мы подскажем,
          как это сделать и сможем починить вашу кофемашину!
        </p>

        <h4 className="text-2xl md:text-4xl text-center text-black pt-10">
          Преимущества
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-base">
          {advantages?.map((advantage: any) => (
            <div className="p-5 border-2 border-black space-y-5">
              <h5 className="text-xl font-bold">{advantage.title}</h5>
              {advantage.descriptionType === "text" ? (
                <p>{advantage.description}</p>
              ) : (
                <ul className="list-disc list-inside space-y-4">
                  {advantage.description.map((descriptionListItem: any) => (
                    <li>{descriptionListItem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h4 className="text-4xl text-center text-black pt-10">
          Цены на {title.toLowerCase()}
        </h4>

        <div className="relative overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-black">
              <tr>
                <th scope="col" className="px-6 py-3 text-lg">
                  Услуга
                </th>
                <th scope="col" className="px-6 py-3 text-lg text-right">
                  Цена
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  <span className="sr-only">Заказать</span>
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
                  <td className="px-6 py-4 text-right">
                    <p>{servicePrice.price}</p>
                  </td>
                  <td className="text-right">
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
        </div>

        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5 border-2 border-black">
          <ChatBubbleLeftEllipsisIcon className="w-32 h-32 text-black" />

          <div className="space-y-3">
            <h3 className="text-xl font-medium">
              Нужна консультация специалиста?
            </h3>
            <h4>Оставьте свои контакты и мы перезвоним</h4>
            <p className="max-w-[60rem] text-base">
              Не нашли марку вашей кофемашины или хотите понять, сломалась ли
              она? Если требуется дополнительная консультация - оставьте свои
              контакты в форме, наши специалисты свяжутся с вами в ближайшее
              время
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

export default MachineTypeTemplate;
