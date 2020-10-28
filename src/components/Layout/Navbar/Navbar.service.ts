import { useState, useEffect } from "react";
import { navbarConfig } from "./Navbar.prototype";

const NavbarService = () => {
    const [navbar, setNavbar] = useState<any>();

    useEffect(() => {
        setNavbar(navbarConfig);
    }, []);

    return {
        navbar,
    };
};

export default NavbarService;
