import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {

    const [toggle,  setToggle] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile/:id" }
    ];
    
    return (

        <nav className="text-white">
            <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                {
                    toggle === true ? <RiCloseLargeFill className="text-2xl"></RiCloseLargeFill> : <TiThMenu className="text-2xl"></TiThMenu>
                }
                
            </div>
            <ul className={`md:flex gap-6 justify-center absolute md:static rounded-xl bg-black duration-700 ease-in-out px-5 py-3 md:p-0 ${toggle ? 'top-8' : '-top-56'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;