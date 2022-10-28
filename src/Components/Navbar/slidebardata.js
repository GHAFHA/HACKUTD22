import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "About Us",
    path: "/AboutUs",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
];