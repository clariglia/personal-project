import { useEffect, useState } from "react";
import AboutModal from "../Modals/AboutModal";
import ContactModal from "../Modals/ContactModal";
import IntroModal from "../Modals/IntroModal";
import WorkModal from "../Modals/WorkModal";import AOS from "aos";
import "aos/dist/aos.css";

//useEffect



export default function Hero(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const [IntroOpenModal, setIntroOpenModal] = useState(false)
    const [AboutOpenModal, setAboutOpenModal] = useState(false)
    const [WorkOpenModal, setWorkOpenModal] = useState(false)
    const [ContactOpenModal, setContactOpenModal] = useState(false)
    
    
    return(
        <div className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
            <main className="hero_container w-6/12 border-y-[#0e7490] border-2 border-x-0">
                <h1 className="text-6xl text-center mt-20 font-['Archivo'] text-[#a78bfa]" data-aos="fade-up" data-aos-duration="2000">CONSIGLIA D'AMARO</h1>
                <h4 className="mt-3 mb-20 text-white text-center font-['Encode_Sans_SC']" data-aos="fade-up" data-aos-duration="2000">A fully responsive site template designed by me and released<br></br>
                    for free under the Creative Commons license.</h4>
            </main>
            <div className="h-20 bg-[#0e7490] w-[2px] ml-px"></div>
            <section className="w-6/12 h-14 flex justify-center">
                <button onClick={()=>{
                    setIntroOpenModal(true);
                }} className="button_hero rounded-l-md border-2 border-[#0e7490] text-white w-28">INTRO</button>
                <button onClick={()=>{
                    setAboutOpenModal(true);
                }} className="button_hero border-y-[#0e7490] border-2 border-x-0 text-white w-28">ABOUT</button>
                <button onClick={()=>{
                    setWorkOpenModal(true);
                }}className="button_hero text-white w-28 border-2 border-y-[#0e7490] border-l-[#0e7490] border-r-0">WORK</button>
                <button onClick={()=>{
                    setContactOpenModal(true);
                }} className="button_hero rounded-r-md border-2 border-[#0e7490] text-white w-28">CONTACT</button>
            </section>
            {IntroOpenModal && <IntroModal closeIntroModal={setIntroOpenModal} />}
            {AboutOpenModal && <AboutModal closeAboutModal={setAboutOpenModal} />}
            {WorkOpenModal && <WorkModal closeWorkModal={setWorkOpenModal} />}
            {ContactOpenModal && <ContactModal closeContactModal={setContactOpenModal} />}

        </div>
    )
}