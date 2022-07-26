import React, { FC } from "react";
import AppBar from "../components/AppBar";
import NavBar from "../components/NavBar";
import { ChildrenProps } from "../types/@appTypes";

const HeaderLayout: FC<ChildrenProps> = ({ children }) => (
  <>
    <AppBar />
    <NavBar />
    {children}
  </>
);

export default HeaderLayout;
