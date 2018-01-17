import React from "react";
import { NavLink } from "react-router-dom";

export default ({ to, children, ...props }) => (
  <NavLink to={`/${locale}${to}`} {...props}>
    {children}
  </NavLink>
);
