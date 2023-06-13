import Sec1Img from "../assets/undraw_mobile_login_ikmv.png"
import SubDiv from "../assets/coding.png"
export default function Section1() {
    return (
        <>
            <div className="section1">
                <div className="section1_Container">
                    <div className="sec1_Items">
                        <div className="sec1_Text">
                        <span >
                            <h1 data-aos="zoom-in-up">Light, Fast & Powerful</h1>
                            <p data-aos="zoom-in-up">
                            Lorem ipsum dolor sit amet, consectetuer 
                               adipiscing elit. Aenean commodo ligula eget dolor.
                               Aenean massa. Cum sociis natoque penatibus et magnis dis
                               parturient montes, nascetur ridiculus.
                               <br/>
                               <br/>
                               mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                               sem. Nulla consequat massa quis enim.
                            </p>
                            </span>
                            <div className="subDiv">
                                <div className="subDiv1" data-aos="zoom-in-up">
                               <img src={SubDiv}/>
                                    <h5>Title Goes Here</h5>
                                    <p>  Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula eget dolor.
                                    </p>
                                </div>
                                <div className="subDiv2" data-aos="zoom-in-up">
                                <img src={SubDiv}/>
                                    <h5>Title Goes Here</h5>
                                    <p>  Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula eget dolor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img className="sec1_Background img-fluid" data-aos="zoom-in-left" src={Sec1Img} />
                    </div>
                </div>
            </div>
        </>
    )
}