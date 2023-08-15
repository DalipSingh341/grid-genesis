import React, { useState } from "react";
import { Discord, Instagram, Twitter } from "./IconsSvg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";

import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import Button from "react-bootstrap";
const NavBar = () => {
  const [first, setFirst] = useState(true);

  function shownav() {
    setFirst(false);
    document.body.classList.add("overflow-hidden");
  }
  function hidenav() {
    setFirst(true);
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      
      <Container>
        <div className="pt-4 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3 align-items-center ">
            <Link>
              <Instagram />
            </Link>
            <Link>
              <Discord />
            </Link>
            <Link>
              <Twitter />
            </Link>
          </div>

          <ul
            className={
              first
                ? "d-flex nav_bar mb-0 ps-0 gap-4"
                : "ps-0 d-flex nav_bar show mb-0 gap-4"
            }
          >
            <li>
              <Link
                to="/"
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_fontSpring fs_16 fw_400 fc_black d-inline-block nav_text"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_fontSpring fs_16 fw_400 fc_black d-inline-block nav_text"
              >
                OUR STORY
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_fontSpring fs_16 fw_400 fc_black d-inline-block nav_text"
              >
                ROADMAP
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_fontSpring fs_16 fw_400 fc_black d-inline-block nav_text"
              >
                TRAITS
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_fontSpring fs_16 fw_400 fc_black d-inline-block nav_text"
              >
                TEAM
              </Link>
            </li>
            <li>
              <Link
                to="/genesis"
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_fontSpring fs_16 fw_400 fc_pink d-inline-block nav_text"
              >
                GENESIS
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_fontSpring fs_16 fw_400 fc_black d-inline-block nav_text"
              >
                FAQS
              </Link>
            </li>
          </ul>
          <button
            className="position-relative z-3 d-lg-none cross_btn"
            onClick={first ? shownav : hidenav}
          >
            {" "}
            {first ? (
              <Icon icon={menu} size={50} />
            ) : (
              <Icon icon={x} size={50} />
            )}
          </button>
        </div>
      </Container>
    </>
  );
};

export default NavBar;
