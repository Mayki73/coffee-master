import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeadFC } from "gatsby";

const Contacts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto my-20 font-[Comfortaa] text-lg leading-8 tracking-wider text-gray-600 font-light space-y-10">
        <h1 className="text-4xl font-medium text-center text-black">
          Контакты
        </h1>

        
      </main>
      <Footer />
    </>
  );
};

export default Contacts;

export const Head: HeadFC = () => <title>Контакты</title>;
