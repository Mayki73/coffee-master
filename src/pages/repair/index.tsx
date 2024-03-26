import React from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import Header from "../../components/Header";
import Button from "../../components/Form/Button";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import ScrollAnimate from "../../components/ScrollAnimate";
import SEOWrapper from "../../components/SEOWrapper";
import Link from "next/link";
import Image from "next/image";
import Brands from "../../data/brands.json";
import "../../styles/repair.css";
import "../../app/globals.css";

const Repair: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const households = Brands["machines"].find(
    (machine) => machine.type === "household"
  );
  const builtIn = Brands["machines"].find(
    (machine) => machine.type === "built-in"
  );
  const professionals = Brands["machines"].find(
    (machine) => machine.type === "professional"
  );
  const vendings = Brands["machines"].find(
    (machine) => machine.type === "vending"
  );

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
      <SEOWrapper
        title="Ремонт кофемашин и кофеварок в Минске - coffeeremont24"
        description="CoffeeRemont24 предлагает профессиональные услуги по ремонту кофемашин разных категорий. Выберите нужную категорию: Бытовые кофемашины, Встраиваемые, Профессиональные или Вендинговые, и ознакомьтесь со списком брендов, которые мы обслуживаем"
        link="https://www.coffeeremont24.by/repair/"
      >
        <Header />
        <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light">
          <ScrollAnimate>
            <h1 className="text-xl md:text-2xl text-center text-black font-medium">
              Ремонт кофемашин
            </h1>
          </ScrollAnimate>

          <div className="space-y-10 mt-10 border-b border-black pb-20">
            <ScrollAnimate>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
                <h2 className="text-xl md:text-xl text-black font-medium">
                  <Link
                    href="/repair/household/"
                    className="flex space-x-5 items-center justify-center hover:border-b-2 hover:border-black transition-all duration-100 text-gray-600 hover:text-black"
                  >
                    Бытовые (домашние)
                  </Link>
                </h2>
                <Button
                  onClick={openModalHandler}
                  className="bg-black hover:text-black hover:bg-white text-white"
                >
                  Заявка на ремонт
                </Button>
              </div>
            </ScrollAnimate>

            <ScrollAnimate>
              <p>
                Бытовые кофемашины используются дома, на одного человека или
                семью. Производительность таких кофемашин до 10-15 напитков в
                сутки, поэтому контейнеры для воды и отходов имеют небольшие
                объемы. Требовательны к соблюдению инструкции и нуждаются в
                уходе.
              </p>
            </ScrollAnimate>

            <ul className="list-none list-inside gridCol">
              {households?.brands.map((brand: any) => (
                <li key={brand.name}>
                  <ScrollAnimate>
                    <Link
                      href={`/repair/household/${brand.name}/`}
                      className="flex flex-col items-center hover:scale-105"
                    >
                      <Image
                        src={`/brands/${brand.logo}`}
                        alt={brand.name}
                        width={200}
                        height={200}
                      />
                    </Link>
                  </ScrollAnimate>
                </li>
              ))}

              <Link
                href="/repair/household/"
                className="flex space-x-5 items-center justify-center hover:scale-110"
              >
                <p>Все бренды</p>
                <ChevronDoubleRightIcon className="w-10 h-10" />
              </Link>
            </ul>
          </div>

          <div className="space-y-10 mt-20 border-b border-black pb-20">
            <ScrollAnimate>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
                <h2 className="text-xl md:text-xl text-black font-medium">
                  <Link
                    href="/repair/built-in/"
                    className="flex space-x-5 items-center justify-center hover:border-b-2 hover:border-black transition-all duration-100 text-gray-600 hover:text-black"
                  >
                    Встраиваемые
                  </Link>
                </h2>

                <Button
                  onClick={openModalHandler}
                  className="bg-black hover:text-black hover:bg-white text-white"
                >
                  Заявка на ремонт
                </Button>
              </div>
            </ScrollAnimate>

            <ScrollAnimate>
              <p>
                Встраиваемые кофемашины часто имеют строение бытовых с теми же
                характеристиками. При производстве используются рабочие узлы,как
                в бытовых кофемашинах. Отличаются только встраиваемым корпусом.
                Встречаются встройки профессиональных марок, принцип такой же –
                популярный аппарат в корпусе для встраивания. Ремонт усложняется
                необходимостью выстраивания техники и последующей разборкой.
              </p>
            </ScrollAnimate>

            <ul className="list-none list-inside gridCol">
              {builtIn?.brands.map((brand: any) => (
                <li key={brand.name}>
                  <ScrollAnimate>
                    <Link
                      href={`/repair/built-in/${brand.name}/`}
                      className="flex flex-col items-center hover:scale-105"
                    >
                      <Image
                        src={`/brands/${brand.logo}`}
                        alt={brand.name}
                        width={200}
                        height={200}
                      />
                    </Link>
                  </ScrollAnimate>
                </li>
              ))}

              <Link
                href="/repair/built-in/"
                className="flex space-x-5 items-center justify-center hover:scale-110"
              >
                <p>Все бренды</p>
                <ChevronDoubleRightIcon className="w-10 h-10" />
              </Link>
            </ul>
          </div>

          <div className="space-y-10 mt-20 border-b border-black pb-20">
            <ScrollAnimate>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
                <h2 className="text-xl md:text-xl text-black font-medium">
                  <Link
                    href="/repair/professional/"
                    className="flex space-x-5 items-center justify-center hover:border-b-2 hover:border-black transition-all duration-100 text-gray-600 hover:text-black"
                  >
                    Профессиональные
                  </Link>
                </h2>

                <Button
                  onClick={openModalHandler}
                  className="bg-black hover:text-black hover:bg-white text-white"
                >
                  Заявка на ремонт
                </Button>
              </div>
            </ScrollAnimate>

            <div className="space-y-5">
              <ScrollAnimate>
                <p>
                  Профессиональные кофемашины рассчитаны на большое количество
                  напитков в сутки 70-100 шт.. Выполнены с расчетом на качество
                  производимого напитка и долгую работу. Профессиональные машины
                  нуждаются в качественном сырье (вода,зерна).
                </p>
              </ScrollAnimate>

              <ScrollAnimate>
                <p>Делятся на два типа – автоматические и рожковые.</p>
              </ScrollAnimate>

              <ScrollAnimate>
                <ul className="list-disc list-inside">
                  <li key="option-1">
                    Рожковые имеют простое строение и требуют определенных
                    навыков для производства кофе. Обычно используются с бариста
                    и отдельной кофемолкой.
                  </li>
                  <li key="option-2">
                    Автоматические имеют сложное строение, много комплектующих,
                    оснащены встроенной кофемолкой и способны произвести больше
                    напитков за меньшее время. Не требуют особенных навыков
                    пользователя, но нуждаются в суточном и периодическом
                    обслуживании.
                  </li>
                </ul>
              </ScrollAnimate>
            </div>

            <ul className="list-none list-inside gridCol">
              {professionals?.brands.map((brand: any) => (
                <li key={brand.name}>
                  <ScrollAnimate>
                    <Link
                      href={`/repair/professional/${brand.name}/`}
                      className="flex flex-col items-center hover:scale-105"
                    >
                      <Image
                        src={`/brands/${brand.logo}`}
                        alt={brand.name}
                        width={200}
                        height={200}
                      />
                    </Link>
                  </ScrollAnimate>
                </li>
              ))}

              <Link
                href="/repair/professional/"
                className="flex space-x-5 items-center justify-center hover:scale-110"
              >
                <p>Все бренды</p>
                <ChevronDoubleRightIcon className="w-10 h-10" />
              </Link>
            </ul>
          </div>

          <div className="space-y-10 mt-20 pb-20">
            <ScrollAnimate>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
                <h2 className="text-xl md:text-xl text-black font-medium">
                  <Link
                    href="/repair/vending/"
                    className="flex space-x-5 items-center justify-center hover:border-b-2 hover:border-black transition-all duration-100 text-gray-600 hover:text-black"
                  >
                    Вендинговые аппараты
                  </Link>
                </h2>

                <Button
                  onClick={openModalHandler}
                  className="bg-black hover:text-black hover:bg-white text-white"
                >
                  Заявка на ремонт
                </Button>
              </div>
            </ScrollAnimate>

            <ScrollAnimate>
              <p>
                Вендинговые кофемашины рассчитаны на производство большого
                количества напитков в ущерб качеству. Обычно используется
                примешивание миксерами, например сухого молока.Требуют
                профилактического обслуживания и тонкой настройки. Выполняют
                прием монет и выдачу стаканчиков, работая автономно, исключая
                необходимость участия персонала.
              </p>
            </ScrollAnimate>

            <ul className="list-none list-inside gridCol">
              {vendings?.brands.map((brand: any) => (
                <li key={brand.name}>
                  <ScrollAnimate>
                    <Link
                      href={`/repair/vending/${brand.name}/`}
                      className="flex flex-col items-center hover:scale-105"
                    >
                      <Image
                        src={`/brands/${brand.logo}`}
                        alt={brand.name}
                        width={200}
                        height={200}
                      />
                    </Link>
                  </ScrollAnimate>
                </li>
              ))}

              <Link
                href="/repair/vending/"
                className="flex space-x-5 items-center justify-center hover:scale-110"
              >
                <p>Все бренды</p>
                <ChevronDoubleRightIcon className="w-10 h-10" />
              </Link>
            </ul>
          </div>

          <ScrollAnimate>
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5 border-2 border-black mt-10">
              <ChatBubbleLeftEllipsisIcon className="w-32 h-32 text-black" />

              <div className="space-y-3">
                <h3 className="text-xl font-medium">
                  Нужна консультация специалиста?
                </h3>
                <h4>Оставьте свои контакты и мы перезвоним</h4>
                <p className="max-w-[60rem] text-base">
                  Не нашли марку вашей кофемашины или хотите понять, сломалась
                  ли она? Если требуется дополнительная консультация - оставьте
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
          </ScrollAnimate>
        </main>
        <Footer />
      </SEOWrapper>
    </>
  );
};

export default Repair;
