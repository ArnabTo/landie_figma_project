import { useState } from "react"

export default function NavigationBar(){
    const [showNav, setShowNav] = useState(false);
    return(
        <>
            <div className="navBar animate__animated animate__fadeInLeft">
                <div className="nav_Container">
                    <div className="nav_items" id={ showNav ? "mobileNav" : "nav_items"  }>
                        <div className="menu" data-aos="fade-right">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="logo">Landie</div>
                        <div className="buy_Button"><span>Buy Now</span></div>
                    </div>
                    <div className="hamburger_Menu" onClick={() => setShowNav(!showNav)}>
                    <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
// id={showNav ? "showNav" : "nav_items" }