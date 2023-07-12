import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { dropdownList } from "../../constants/dropdown-brands-list";
import { repairList } from "../../constants/repair";
import { Link } from "gatsby";

const contacts = [
  {
    title: "Адрес",
    value: "г. Москва, ул. Ленина, д. 1",
    icon: <MapPinIcon className="w-7 h-7" />,
  },
  {
    title: "Телефон",
    value: "+7 (495) 555-55-55",
    icon: <PhoneIcon className="w-7 h-7" />,
  },
  {
    title: "Email",
    value: "info@somemail.com",
    icon: <EnvelopeIcon className="w-7 h-7" />,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white font-[Comfortaa] text-base md:text-lg">
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between max-w-screen-2xl mx-5 md:mx-auto py-10 md:py-10 p-0 md:p-10">
        <div className="space-y-10">
          <h2 className="text-xl font-bold">Домашние</h2>
          <ul className="space-y-2">
            {dropdownList[0].brands.map((item) => (
              <li key={item.name}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-10">
          <h2 className="text-xl font-bold">Ремонт</h2>
          <ul className="space-y-2">
            {repairList.map((item) => (
              <li key={item.title}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
            <li key="price">
              <Link to="/prices">Цены</Link>
            </li>
            <li key="malfunctions">
              <Link to="/mulfunctions">Неисправности</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          <h2 className="text-xl font-bold">Контакты</h2>
          <ul className="space-y-5">
            {contacts.map((item) => (
              <li className="flex space-x-10" key={item.title}>
                {item.icon}
                <p className="text-lg">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
