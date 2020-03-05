import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import ReactLogo from "../react-logo/react-logo";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            About
          </Link>
          <Link
            className={slug === "portfolio" ? "selected" : null}
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className={slug === "contact" ? "selected" : null}
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
