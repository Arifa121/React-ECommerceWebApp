import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import "./header.css";
import { motion } from "framer-motion";
const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "blog",
    display: "Blog",
  },
  {
    path: "contact",
    display: "Contact",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1 className="mt-2">Smartmart</h1>
                {/* <p>Since 1995</p> */}
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <Link
                      className={
                        location.pathname === `/${item.path}`
                          ? "nav__active"
                          : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line">
                  {" "}
                  <span className="badge">10</span>
                </i>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">2</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
            </div>
            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
// import React from "react";

// const Header = () => {
//   return (
//     <header className="header">
//       <Container>
//         <Row>
//           <div className="nav__wrapper">
//             <div className="logo">
//               <img src={logo} alt="" />
//               <div>
//                 <h1 className="mt-2">Smartmart</h1>
//                 {/* <p>Since 1995</p> */}
//               </div>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </header>
//   );
// };

// export default Header;
