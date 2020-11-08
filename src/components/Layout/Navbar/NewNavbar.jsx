import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import NavbarService from './Navbar.service';
import { useRouter } from 'next/router';
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';

import Logo from './Logo';

const NewNavbar = ({ backendApiURL }) => {
  const router = useRouter();
  const slug = path =>
    path
      .split('/')
      .filter(i => i != '')
      .join('_');

  const onNavigationToRoute = (dropdownOptions, idxxx) => {
    return (
      <li key={idxxx}>
        <Link aria-label={dropdownOptions.title} href="/page/[page]" as={'/page/' + slug(dropdownOptions.path)}>
          <a href={'/page/' + slug(dropdownOptions.path)}>{dropdownOptions.title}</a>
        </Link>
      </li>
    );
  };

  const mainNavbar = (data, idx) => {
    return (
      <li key={idx} className="nav-item megamenu" style={{ width: 'auto', boxShadow: 'none' }}>
        <Link aria-label={data.title} href="/page/[page]" as={'/page/' + slug(data.path)}>
          <a href={'/page/' + slug(data.path)}>
            {' '}
            {data.title}
            <i className="fas fa-chevron-down faArrowDown" />
          </a>
        </Link>
        <ul className="dropdown-menu" style={{ minHeight: '40vh' }}>
          <li className="nav-item">
            <div className="container">
              <div className="row">
                {data.options.map((dropdown, idxx) => (
                  <div className="col" key={idxx}>
                    <Link aria-label={dropdown.title} href="/page/[page]" as={'/page/' + slug(dropdown.path)}>
                      <a href={'/page/' + slug(dropdown.path)}>
                        <h6 className="submenu-title">{dropdown.title}</h6>
                      </a>
                    </Link>

                    <ul className="megamenu-submenu">
                      {dropdown.options.map((dropdownOptions, idxxx) => onNavigationToRoute(dropdownOptions, idxxx))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </li>
    );
  };
  const { navbar } = NavbarService(backendApiURL);
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

  const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  navbar && console.log('NEW NAVBAR =====>   ', navbar);
  return (
    <>
      <TopPanel backendApiURL={backendApiURL} />
      <TopHeader backendApiURL={backendApiURL} />
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
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">{navbar.map((data, idx) => mainNavbar(data, idx))}</ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default memo(NewNavbar);
