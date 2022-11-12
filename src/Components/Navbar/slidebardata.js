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
    title: "My Profile",
    path: "/MyProfile",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "About Us",
    path: "/faq",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
];