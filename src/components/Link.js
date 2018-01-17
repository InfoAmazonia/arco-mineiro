import React from "react";
import { Link } from "react-router-dom";

export default ({ to, localized, children, ...props }) => (
  <Link to={localized ? to : `/${locale}${to}`} {...props}>
    {children}
  </Link>
);
