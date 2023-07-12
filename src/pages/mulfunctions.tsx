import React from "react";
import { HeadFC, Link } from "gatsby";
import { IonIcon } from "@ionic/react";
import {
  alertCircleOutline,
  thermometerOutline,
  beakerOutline,
  cafeOutline,
  statsChartOutline,
  colorFillOutline,
  flashOffOutline,
  pintOutline,
  exitOutline,
  waterOutline,
  warningOutline,
  volumeHighOutline,
} from "ionicons/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";
import Button from "../components/Form/Button";
import Modal from "../components/Modal";
import { Helmet } from "react-helmet";

const mulfunctions = [
  {
    title: "Выдает ошибку",
    icon: alertCircleOutline,
    link: "error",
  },
  {
    title: "Делает слишком горячий кофе",
    icon: thermometerOutline,
    link: "makes-too-hot-coffee",
  },
  {
    title: "Жидкость в контейнере для отходов",
    icon: beakerOutline,
    link: "liquid-in-waste-container",
  },
  {
    title: "Кофе не крепкий",
    icon: cafeOutline,
    link: "coffee-is-not-strong",
  },
  {
    title: "Неравномерная выдача напитка",
    icon: statsChartOutline,
    link: "uneven-dispensing-of-drink",
  },
  {
    title: "Протекает вода",
    icon: colorFillOutline,
    link: "water-flowing",
  },
  {
    title: "Не включается",
    icon: flashOffOutline,
    link: "doesnt-turning-on",
  },
  {
    title: "Не вспенивает молоко",
    icon: pintOutline,
    link: "doesnt-froth-milk",
  },
  {
    title: "Не вынимается заварное устройство для промывки",
    icon: exitOutline,
    link: "brewing-unit-doesnt-come-out",
  },
  {
    title: "Не доливает кофе",
    icon: waterOutline,
    link: "doesnt-add-coffee",
  },
  {
    title: "Слышен звук помола, но не наливает кофе",
    icon: warningOutline,
    link: "doesnt-poure-coffee",
  },
  {
    title: "Шумит во время налива напитка",
    icon: volumeHighOutline,
    link: "noisy-while-pouring",
  },
];

const Mulfunctions: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
      <Helmet>
        <title>Распространенные неисправности кофемашин | CoffeeRemont24</title>
        <meta
          name="description"
          content="Узнайте о распространенных неисправностях кофемашин и как мы можем помочь в их ремонте. CoffeeRemont24 предлагает профессиональные услуги по диагностике и исправлению проблем с кофеоборудованием. Быстро и надежно устраняем все типы неисправностей."
        />
        <meta
          name="keywords"
          content="неисправности кофемашин, ремонт кофемашин Минск, диагностика кофейного оборудования, исправление проблем с кофеваркой, ремонт кофе машин, специалисты по ремонту кофемашин"
        />
      </Helmet>
      <Header />
      <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
        <h1 className="text-xl md:text-2xl text-center text-black font-medium">
          Неисправности
        </h1>
        <p>
          Даже самая качественная и дорогая кофемашина когда-нибудь ломается и у
          ее владельца возникает потребность быстро и качественно провести
          диагносику неисправности и ремонт. Вот самые распространенные поломки,
          возможные причины и способы их устранения:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {mulfunctions.map((mulfunction) => (
            <Link
              key={mulfunction.title}
              to={mulfunction.link}
              className="flex flex-col items-center justify-center border-2 border-black p-5 max-h-[15rem] h-full hover:scale-105 bg-gray-100 hover:bg-white"
            >
              <IonIcon className="w-10 h-10" icon={mulfunction.icon} />
              <p className="text-center max-w-[16rem]">{mulfunction.title}</p>
            </Link>
          ))}
        </div>

        <h2 className="text-xl md:text-2xl text-center text-black font-medium pt-10">
          Как понять что ваша кофемашина сломалась?
        </h2>

        <div className="space-y-5">
          <p>
            ​Порой поломка кофемашины неочевидна: из нее не течет вода, машина
            запускается, перемалывает и варит кофе, но вкус напитка и его
            консистенция хуже чем раньше. В этом случае имеет место быть
            внутренняя поломка и Вам нужно обратиться к специалисту для
            диагностики и ремонта.
          </p>

          <p>
            ​Если из строя вышел внутрениий датчик или нагревательный элемент и
            Ваша кофемашина перестала нагревать воду до нужной температуры или
            стала перегревать ее, она уже не может обеспечить нужное качество
            напитка. Напиток становится не таким ароматным, как раньше, и теряет
            свои полезные свойтва. Такая поломка легко диагностируется нашими
            опытными инженерами и исправляется в короткие сроки.
          </p>

          <p>
            ​Еще одной неочевидной поломкой может стать выход из строя дозатора
            кофе, что приводит к тому, что напиток становится слишком слабо
            насыщенным или очень крепким. Для устранения такой поломки
            необходимо разобрать и заменить вышедшую из строя деталь, что
            требует специального опыта с навыков.
          </p>

          <p>
            ​Чтобы избежать серьезных поломок, требующих длительного ремонта,
            необходимо как можно скорее обращаться в наш сервисный центр и
            вызывать мастера для диагностики и ремонта при наличии малейших
            неисправностей.
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5 border-2 border-black">
          <ChatBubbleLeftEllipsisIcon className="w-32 h-32 text-black" />

          <div className="space-y-3">
            <h3 className="text-xl font-medium">
              Нужна консультация специалиста?
            </h3>
            <h4>Оставьте свои контакты и мы перезвоним</h4>
            <p className="max-w-[60rem] text-base">
              Не нашли свою неисправность или хотите понять, сломалась ли ваша
              кофемашина? Если требуется дополнительная консультация - оставьте
              свои контакты в форме, наши специалисты свяжутся с вами в
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

export default Mulfunctions;
