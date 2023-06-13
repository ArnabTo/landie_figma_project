import HeroBg from "../assets/hero_bg.png"
export default function Hero(){
    return(
        <>
            <div className="hero_Section">
                <div className="hero_Container">
                    <div className="hero_Items">
                        <div className="hero_Text" >
                            <h1 className="animate__animated animate__fadeInLeft">Introduce Your Product
                            Quickly & Effectively
                            </h1>
                            <p className="animate__animated animate__fadeInUp">
                               Lorem ipsum dolor sit amet, consectetuer 
                               adipiscing elit. Aenean commodo ligula eget dolor.
                               Aenean massa. Cum sociis natoque penatibus et magnis dis
                               parturient montes, nascetur ridiculus.
                               <br/>
                               <br/>
                               mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                               sem. Nulla consequat massa quis enim.
                            </p>
                            <div className="hero_Button_group">
                              <button className="btn1 animate__animated animate__bounceIn">Purchase UI Kit</button>
                              <button className="btn2 animate__animated animate__bounceIn">learn More.</button>
                            </div>
                        </div>
                        <img src={HeroBg} className="hero_Background animate__animated animate__fadeInRight"/>
                    </div>
                </div>
            </div>
        </>
    )
}