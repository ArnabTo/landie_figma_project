import Sec2c2Bg from "../assets/undraw_mention_6k5d.png"
export default function Section2C2() {
    return (
        <div className="section2">
            <div className="section2_Container">
                <div className="sec2_Items">
                <img className="sec2_Background img-fluid" data-aos="fade-right" src={Sec2c2Bg}/>
                    <div className="sec2_Text">
                    <h1 data-aos="fade-left">Light, Fast & Powerful</h1>
                        <p data-aos="fade-left">
                        Lorem ipsum dolor sit amet, consectetuer 
                               adipiscing elit. Aenean commodo ligula eget dolor.
                               Aenean massa. Cum sociis natoque penatibus et magnis dis
                               parturient montes, nascetur ridiculus.
                               <br/>
                               <br/>
                               mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                               sem. Nulla consequat massa quis enim.
                        </p>
                        <button className="btn1">Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}