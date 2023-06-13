export default function Footer(){
    return(
        <div className="footer">
            <div className="footer_Container">
                <div className="footer_Itmes">
                    <div className="footer_Sec1">
                        <span data-aos="fade-right">&copy;2020 Yourcompany</span>
                        <div className="logo" data-aos="fade-up">Landie</div>
                        <button className="btn1" data-aos="fade-left">Purchase UI Kit</button>
                    </div>
                    <div className="line"></div>
                    <div className="footer_Sec2">
                        <div className="footer_Menu">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="social">
                        <ul>
                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-snapchat"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}