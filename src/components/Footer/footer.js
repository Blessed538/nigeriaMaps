import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <div>
        <footer className={s.contentFooter}>
          Powered by{" "}
          <strong>National Information Technology Developmnet Agency</strong>{" "}
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Footer;
