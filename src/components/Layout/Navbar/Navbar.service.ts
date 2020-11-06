import { useState, useEffect } from 'react';
import { navbarConfig } from './Navbar.prototype';
import axios from 'axios';
import useSWR from 'swr';
const NavbarService = backendApiURL => {
  const [navbar, setNavbar] = useState<any>();
  const [navbarPaths, setNavbarPaths] = useState(null);
  console.log('NavbarService process.env.backendApiURL ==> ', backendApiURL);
  const getNavbarData = async () => {
    try {
      const navbarData = await axios(backendApiURL + 'navbar/');
      const navbarPathsData = [];
      navbarData.data.map(cat => {
        cat && navbarPathsData.push(cat.path);
        cat &&
          cat.options.map(col => {
            col && navbarPathsData.push(col.path);
            col &&
              col.options.map(link => {
                link && navbarPathsData.push(link.path);
              });
          });
      });
      setNavbarPaths(navbarPathsData);
      console.log('navbarData navbarPathsData ==> ', navbarPathsData);
      setNavbar(navbarData.data);
    } catch (ex) {
      console.log('ERRORS   =====> ', ex);
    }
  };
  useEffect(() => {
    // setNavbar(navbarConfig);
    getNavbarData();
  }, []);

  return {
    navbar,
  };
};

export default NavbarService;
