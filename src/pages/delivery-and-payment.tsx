import React from "react";
import { Helmet } from "react-helmet";
import { TruckIcon, BanknotesIcon } from "@heroicons/react/20/solid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimate from "../components/ScrollAnimate";

const DeliveryAndPayment: React.FC = () => {
  const logoUrl = "static/icon.png"; // Replace with your logo URL

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "CoffeeRemont24",
    url: "https://www.coffeeremont24.by/delivery-and-payment/",
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
          Доставка и оплата - Ремонт кофемашин в Минске | CoffeeRemont24
        </title>
        <meta
          name="description"
          content="Условия оплаты и доставки ремонта кофемашины на сайте CoffeeRemont24. Узнайте подробности о способах оплаты и условиях доставки после ремонта кофемашины. Мы предлагаем удобные варианты оплаты и оперативную доставку в Минске."
        />
        <link
          rel="canonical"
          href="https://coffeeremont24.by/delivery-and-payment/"
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Доставка и оплата - Ремонт кофемашин в Минске | CoffeeRemont24"
        />
        <meta
          property="og:description"
          content="Условия оплаты и доставки ремонта кофемашины на сайте CoffeeRemont24. Узнайте подробности о способах оплаты и условиях доставки после ремонта кофемашины. Мы предлагаем удобные варианты оплаты и оперативную доставку в Минске."
        />
        <meta
          property="og:url"
          content="https://coffeeremont24.by/delivery-and-payment/"
        />
        <meta property="og:site_name" content="coffeeremont24" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Условия оплаты и доставки ремонта кофемашины на сайте CoffeeRemont24. Узнайте подробности о способах оплаты и условиях доставки после ремонта кофемашины. Мы предлагаем удобные варианты оплаты и оперативную доставку в Минске."
        />
        <meta
          name="twitter:title"
          content="Доставка и оплата - Ремонт кофемашин в Минске | CoffeeRemont24"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="max-w-screen-2xl mx-5 md:mx-auto my-20 font-[Comfortaa] text-base md:text-lg leading-8 tracking-wider text-gray-600 font-light">
        <ScrollAnimate>
          <h1 className="text-xl md:text-2xl text-center text-black font-normal">
            Доставка и оплата
          </h1>
        </ScrollAnimate>

        <ScrollAnimate>
          <p className="mt-10">
            Мы стремимся обеспечить удобство и надежность в процессе ремонта
            вашей кофемашины. Мы понимаем, что доставка и оплата играют важную
            роль в вашем опыте обслуживания, поэтому предлагаем гибкие условия,
            чтобы сделать процесс максимально удобным для вас. Наша команда
            готова организовать безопасную доставку вашей кофемашины из и в
            удобное для вас место. Мы понимаем, что ваше устройство является
            важным компонентом вашей жизни, поэтому мы обеспечиваем аккуратную
            обработку и бережную перевозку, чтобы гарантировать сохранность
            вашей кофемашины во время доставки.
          </p>
        </ScrollAnimate>

        <ScrollAnimate>
          <h2 className="text-xl md:text-2xl text-center text-black font-normal mt-20">
            Доставка по Минску
          </h2>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-10 space-y-10 md:space-y-0">
            <div className="justify-center items-center flex md:hidden">
              <TruckIcon className="w-32 h-32 text-black" />
            </div>

            <p className="col-span-3">
              Если вы хотите воспользоваться услугой доставки вашей кофемашины в
              сервис и обратно, просто укажите это менеджеру, который ответит на
              ваш звонок, и предоставьте свой адрес. Важно отметить, что данная
              услуга является бесплатной, даже если вы откажетесь от ремонта.
              Доставка осуществляется как в дневное, так и вечернее время.
              Менеджер согласует с вами время и день, когда курьер прибудет к
              вам. В зависимости от маршрута курьера, доставка может быть
              выполнена в тот же день или на следующий день после заказа. По
              завершении ремонта, мы свяжемся с вами для согласования времени
              доставки обратно. Все, что вам нужно сделать, это сообщить
              менеджеру о желании воспользоваться услугой доставки вашей
              кофемашины, предоставить адрес и мы сделаем все возможное, чтобы
              обеспечить вам удобство и комфорт в процессе обслуживания.
            </p>
            <div className="justify-center items-center hidden md:flex">
              <TruckIcon className="w-32 h-32 text-black" />
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <h2 className="text-xl md:text-2xl text-center text-black font-normal mt-20">
            Оплатить ремонт можно следующими способами:
          </h2>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-10 space-y-10 md:space-y-0">
            <div className="justify-center items-center flex md:hidden">
              <BanknotesIcon className="w-32 h-32 text-black" />
            </div>

            <ul className="col-span-3 list-disc list-inside space-y-5">
              <li>наличными деньгами</li>
              <li>
                банковской картой (если мы производим доставку кофемашины,
                следует предупредить заранее о желании расплатится картой)
              </li>
              <li>
                безналичным платежом (для юридических лиц) гарантируем полный
                пакет документов.
              </li>
            </ul>

            <div className="justify-center items-center hidden md:flex">
              <BanknotesIcon className="w-32 h-32 text-black" />
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <h2 className="text-xl md:text-2xl text-center text-black font-normal mt-20">
            Доставка в Минской области (не более 50 км)
          </h2>
        </ScrollAnimate>

        <ScrollAnimate>
          <ul className="mt-10 list-decimal list-inside space-y-5">
            <li>
              Вы оставляете заявку на сайте или звоните менеджеру, Вас
              консультируют по возможным причинам поломки и ориентировочной
              стоимости ремонта.
            </li>
            <li>
              После чего оформляется заявка на перевозку транспортной компанией,
              забор происходит по графику обслуживания населенных пунктов страны
              (Дни доставки: Пн – Сб). Стоимость доставки 20 рублей для
              стандартной бытовой кофемашины.
            </li>
            <li>
              Как только кофемашина приедет к нам в мастерскую она будет
              распакована и принята в ремонт, о чем мы вам сообщим телефонным
              звонком.
            </li>
            <li>
              После проведения бесплатной диагностики, будет проведено
              согласование стоимости ремонта.
            </li>
            <li>
              Получив, Ваше согласие мы отремонтируем и проверим кофемашину.
              Если же откажетесь от ремонта, мы ее упакуем и отправим к вам той
              же транспортной компанией к вам домой.
            </li>
            <li>
              Закончив с ремонтом, мы упакуем вашу машину и подготовим для
              транспортировки.
            </li>
            <li>
              Оплата доставки и стоимости услуг по ремонту, стоимости запчастей
              производится курьеру транспортной компании в момент возвращения
              кофемашины.
            </li>
          </ul>
        </ScrollAnimate>
      </main>
      <Footer />
    </>
  );
};

export default DeliveryAndPayment;
