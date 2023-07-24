import "./src/styles/global.css";
import React from "react";

export const wrapPageElement = ({ element }) => (
  <html lang="ru">
    <head>{element}</head>
  </html>
);
