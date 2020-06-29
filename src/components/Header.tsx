import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../assets/logo.svg";

interface HeaderProps {
  title: string;
  url: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <img src={logo} alt={props.title} />
      <Link to={props.url}>
        <FiArrowLeft />
        {props.title}
      </Link>
    </header>
  );
};

export default Header;
