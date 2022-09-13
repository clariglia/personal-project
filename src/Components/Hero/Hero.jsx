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
            <main className="hero_container w-[90%] sm:w-6/12 border-y-[#0e7490] border-2 border-x-0">
                <h1 className="sm:text-6xl text-4xl text-center mt-20 font-['Archivo'] text-[#a78bfa]" data-aos="fade-up" data-aos-duration="2000">CONSIGLIA D'AMARO</h1>
                <h4 className="mt-3 mb-20 text-white text-center font-['Encode_Sans_SC'] text-sm sm:text-md" data-aos="fade-up" data-aos-duration="2000">Sono una full-stack developer, amante di gatti, <br></br> appassionata al mondo del web design e del cinema.</h4>
            </main>
            <div className="h-20 bg-[#0e7490] w-[2px] ml-px"></div>
            <section className="w-[90%] sm:w-6/12 h-14 flex justify-center">
                <button onClick={()=>{
                    setIntroOpenModal(true);
                }} className="button_hero rounded-l-md border-2 hover:bg-[#0e7490]/25 border-[#0e7490] text-white w-28 duration-200">INTRO</button>
                <button onClick={()=>{
                    setAboutOpenModal(true);
                }} className="button_hero border-y-[#0e7490] hover:bg-[#0e7490]/25 border-2 border-x-0 text-white w-28 duration-200">ABOUT</button>
                <button onClick={()=>{
                    setWorkOpenModal(true);
                }}className="button_hero text-white w-28 border-2 hover:bg-[#0e7490]/25 border-y-[#0e7490] border-l-[#0e7490] border-r-0 duration-200">WORK</button>
                <button onClick={()=>{
                    setContactOpenModal(true);
                }} className="button_hero rounded-r-md border-2 border-[#0e7490] text-white w-28 hover:bg-[#0e7490]/25 duration-200">CONTACT</button>
            </section>
            {IntroOpenModal && <IntroModal closeIntroModal={setIntroOpenModal} />}
            {AboutOpenModal && <AboutModal closeAboutModal={setAboutOpenModal} />}
            {WorkOpenModal && <WorkModal closeWorkModal={setWorkOpenModal} />}
            {ContactOpenModal && <ContactModal closeContactModal={setContactOpenModal} />}
            <div className="p-5 flex flex-col mt-2">
            <p className="text-white flex flex-row gap-2 text-xs font-['Encode_Sans_SC']">If you are interested in the project code, click here: 
                <a className="aLink" href="https://github.com/clariglia/personal-project">
                    <img className="hover:fill-[#a78bfa] fill-white" src="./github.svg" alt="github repo" width="18" height="18"></img>
                </a>
            </p>
            <p className="text-xs font-['Encode_Sans_SC'] flex justify-center text-white">© thanks to&nbsp;
             <a className="hover:text-[#a78bfa] duration-150 hover:font-bold" href="https://html5up.net/">html5&nbsp;</a> 
             for the insipiration</p>
            </div>
        </div>

        
    )
}