import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavbarService from "./Navbar.service";

import TopPanel from "./TopPanel";
import TopHeader from "./TopHeader";

import Logo from "./Logo";

const NewNavbar = props => {
    const onNavigationToRoute = (dropdownOptions, idxxx) => {
        return (
            <li key={idxxx}>
                <Link href={dropdownOptions.path}>
                    <a>{dropdownOptions.title}</a>
                </Link>
            </li>
        );
    };

    const mainNavbar = (data, idx) => {
        return (
            <li
                key={idx}
                className="nav-item megamenu"
                style={{ width: "auto", boxShadow: "none" }}
            >
                <Link href={data.path}>
                    <a href={data.path}>
                        {" "}
                        {data.title}
                        <i className="fas fa-chevron-down faArrowDown" />
                    </a>
                </Link>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <div className="container">
                            <div className="row">
                                {data.options.map((dropdown, idxx) => (
                                    <div className="col" key={idxx}>
                                        <Link href={dropdown.path}>
                                            <a href={dropdown.path}>
                                                <h6 className="submenu-title">
                                                    {dropdown.title}
                                                </h6>
                                            </a>
                                        </Link>

                                        <ul className="megamenu-submenu">
                                            {dropdown.options.map(
                                                (dropdownOptions, idxxx) =>
                                                    onNavigationToRoute(
                                                        dropdownOptions,
                                                        idxxx
                                                    )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                                <div className="col">
                                    <ul className="megamenu-submenu">
                                        <li>
                                            <div className="aside-trending-products">
                                                <img
                                                    src="https://cdn.iconscout.com/icon/free/png-256/nike-15-761696.png"
                                                    alt="image"
                                                />

                                                <div className="category">
                                                    <h4>Top Trending</h4>
                                                </div>

                                                <a href="#" />
                                            </div>

                                            <div className="aside-trending-products">
                                                <img
                                                    src="https://cdn.iconscout.com/icon/free/png-256/nike-15-761696.png"
                                                    alt="image"
                                                />

                                                <div className="category">
                                                    <h4>Popular Products</h4>
                                                </div>

                                                <a href="#" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        );
    };
    const { navbar } = NavbarService();
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        /*  let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); */
    }, []);

    const classOne = collapsed
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";
    const classTwo = collapsed
        ? "navbar-toggler navbar-toggler-right collapsed"
        : "navbar-toggler navbar-toggler-right";
    navbar && console.log("NEW NAVBAR =====>   ", navbar);
    return (
        <>
            <TopPanel />
            <TopHeader />
            {navbar && (
                <div className="navbar-area">
                    <div id="navbar" className="comero-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Logo />

                                <button
                                    onClick={toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>

                                <div
                                    className={classOne}
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav">
                                        {navbar.map((data, idx) =>
                                            mainNavbar(data, idx)
                                        )}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default NewNavbar;
