import React from "react";

import "../Logo/Logo.css";

const logo = props => {
  return (
    <div className="Logo">
      <img
        className="LogoImg"
        src="https://image.shutterstock.com/z/stock-vector-burger-abstract-outline-vector-logo-template-fast-food-isolated-line-art-stylized-icon-unusual-1036987246.jpg"
        alt="MyBurger"
      />
    </div>
  );
};

export default logo;
