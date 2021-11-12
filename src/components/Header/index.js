import React from "react";
import "./Header.css";

export default function Header({ black }) {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Logo Netflix"
          />
          ;
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://occ-0-684-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41"
            alt="Icone do Usuário"
          />{" "}
          ;
        </a>
      </div>
    </header>
  );
}
