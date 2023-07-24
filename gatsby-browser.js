import "./src/styles/global.css";
import React from "react";

export const wrapPageElement = ({ element }) => (
  <html lang="ru">
    <body>{element}</body>
  </html>
);
