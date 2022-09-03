import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const Nav=()=>{
    const width = window.innerHeight;
    const breakpoint=620;
    return width<breakpoint?<NavbarMobile/>:<Navbar/>
}
export default Nav;