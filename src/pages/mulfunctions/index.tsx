import React from "react";
import { PiWarningCircle } from "react-icons/pi";
import { BsThermometer } from "react-icons/bs";
import { HiBeaker } from "react-icons/hi";
import { IoCafe, IoStatsChart, IoFlash } from "react-icons/io5";
import { BiColorFill, BiExit, BiWater, BiVolumeFull } from "react-icons/bi";
import { SlCup } from "react-icons/sl";
import { CiWarning } from "react-icons/ci";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";
import Button from "../../components/Form/Button";
import Modal from "../../components/Modal";
import ScrollAnimate from "../../components/ScrollAnimate";
import SEOWrapper from "../../components/SEOWrapper";
import Link from "next/link";
import "../../app/globals.css";

const mulfunctions = [
  {
    title: "Выдает ошибку",
    icon: PiWarningCircle,
    link: "/mulfunctions/error/",
  },
  {
    title: "Делает слишком горячий кофе",
    icon: BsThermometer,
    link: "/mulfunctions/makes-too-hot-coffee/",
  },
  {
    title: "Жидкость в контейнере для отходов",
    icon: HiBeaker,
    link: "/mulfunctions/liquid-in-waste-container/",
  },
  {
    title: "Кофе не крепкий",
    icon: IoCafe,
    link: "/mulfunctions/coffee-is-not-strong/",
  },
  {
    title: "Неравномерная выдача напитка",
    icon: IoStatsChart,
    link: "/mulfunctions/uneven-dispensing-of-drink/",
  },
  {
    title: "Протекает вода",
    icon: BiColorFill,
    link: "/mulfunctions/water-flowing/",
  },
  {
    title: "Не включается",
    icon: IoFlash,
    link: "/mulfunctions/doesnt-turning-on/",
  },
  {
    title: "Не вспенивает молоко",
    icon: SlCup,
    link: "/mulfunctions/doesnt-froth-milk/",
  },
  {
    title: "Не вынимается заварное устройство для промывки",
    icon: BiExit,
    link: "/mulfunctions/brewing-unit-doesnt-come-out/",
  },
  {
    title: "Не доливает кофе",
    icon: BiWater,
    link: "/mulfunctions/doesnt-add-coffee/",
  },
  {
    title: "Слышен звук помола, но не наливает кофе",
    icon: CiWarning,
    link: "/mulfunctions/doesnt-poure-coffee/",
  },
  {
    title: "Шумит во время налива напитка",
    icon: BiVolumeFull,
    link: "/mulfunctions/noisy-while-pouring/",
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
      <SEOWrapper
        title="Неисправности кофемашин и кофеварок - coffeeremont24"
        description="Узнайте о распространенных неисправностях кофемашин и как мы можем помочь в их ремонте. CoffeeRemont24 предлагает профессиональные услуги по диагностике и исправлению проблем с кофеоборудованием. Быстро и надежно устраняем все типы неисправностей."
        link="https://www.coffeeremont24.by/mulfunctions/"
      >
        <Header />
        <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
          <ScrollAnimate>
            <h1 className="text-xl md:text-2xl text-center text-black font-medium">
              Неисправности
            </h1>
          </ScrollAnimate>

          <ScrollAnimate>
            <p>
              Даже самая качественная и дорогая кофемашина когда-нибудь ломается
              и у ее владельца возникает потребность быстро и качественно
              провести диагносику неисправности и ремонт. Вот самые
              распространенные поломки, возможные причины и способы их
              устранения:
            </p>
          </ScrollAnimate>

          <ul className="grid grid-cols-1 md:grid-cols-4 gap-10 list-none list-inside">
            {mulfunctions.map((mulfunction) => (
              <li className="h-full" key={mulfunction.title}>
                <ScrollAnimate className="h-full">
                  <Link
                    key={mulfunction.title}
                    href={mulfunction.link}
                    className="flex flex-col items-center justify-center border-2 border-black p-5 h-full hover:scale-105 bg-gray-100 hover:bg-white"
                  >
                    <mulfunction.icon className="w-10 h-10" />
                    <p className="text-center max-w-[16rem]">
                      {mulfunction.title}
                    </p>
                  </Link>
                </ScrollAnimate>
              </li>
            ))}
          </ul>

          <ScrollAnimate>
            <h2 className="text-xl md:text-2xl text-center text-black font-medium pt-10">
              Как понять что ваша кофемашина сломалась?
            </h2>
          </ScrollAnimate>

          <div className="space-y-5">
            <ScrollAnimate>
              <p>
                ​Порой поломка кофемашины неочевидна: из нее не течет вода,
                машина запускается, перемалывает и варит кофе, но вкус напитка и
                его консистенция хуже чем раньше. В этом случае имеет место быть
                внутренняя поломка и Вам нужно обратиться к специалисту для
                диагностики и ремонта.
              </p>
            </ScrollAnimate>

            <ScrollAnimate>
              <p>
                ​Если из строя вышел внутрениий датчик или нагревательный
                элемент и Ваша кофемашина перестала нагревать воду до нужной
                температуры или стала перегревать ее, она уже не может
                обеспечить нужное качество напитка. Напиток становится не таким
                ароматным, как раньше, и теряет свои полезные свойтва. Такая
                поломка легко диагностируется нашими опытными инженерами и
                исправляется в короткие сроки.
              </p>
            </ScrollAnimate>

            <ScrollAnimate>
              <p>
                ​Еще одной неочевидной поломкой может стать выход из строя
                дозатора кофе, что приводит к тому, что напиток становится
                слишком слабо насыщенным или очень крепким. Для устранения такой
                поломки необходимо разобрать и заменить вышедшую из строя
                деталь, что требует специального опыта с навыков.
              </p>
            </ScrollAnimate>

            <ScrollAnimate>
              <p>
                ​Чтобы избежать серьезных поломок, требующих длительного
                ремонта, необходимо как можно скорее обращаться в наш сервисный
                центр и вызывать мастера для диагностики и ремонта при наличии
                малейших неисправностей.
              </p>
            </ScrollAnimate>
          </div>

          <ScrollAnimate>
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5 border-2 border-black">
              <ChatBubbleLeftEllipsisIcon className="w-32 h-32 text-black" />

              <div className="space-y-3">
                <h3 className="text-xl font-medium">
                  Нужна консультация специалиста?
                </h3>
                <h4>Оставьте свои контакты и мы перезвоним</h4>
                <p className="max-w-[60rem] text-base">
                  Не нашли свою неисправность или хотите понять, сломалась ли
                  ваша кофемашина? Если требуется дополнительная консультация -
                  оставьте свои контакты в форме, наши специалисты свяжутся с
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

export default Mulfunctions;
