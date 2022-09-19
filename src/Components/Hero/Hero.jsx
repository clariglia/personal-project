import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonsHero from "../Buttons/ButtonsHero";
import { Link } from "react-router-dom"

export default function Hero(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    return(
        <div className="flex flex-col justify-center items-center h-screen w-screen overflow-y-auto">
            <main className="hero_container w-[90%] sm:w-6/12 border-y-[#0e7490] border-2 border-x-0 relative">
                <h1 className="sm:text-6xl text-4xl text-center mt-20 font-['Archivo'] text-[#a78bfa]" data-aos="fade-up" data-aos-duration="2000">CONSIGLIA D'AMARO</h1>
                <h4 className="mt-3 mb-20 text-white text-center font-['Encode_Sans_SC'] text-sm sm:text-md" data-aos="fade-up" data-aos-duration="2000">Sono una full-stack developer, amante di gatti, <br></br> 
                appassionata al mondo del web design e del cinema.</h4>
                <div className="border-[#0e7490] border-2 border-b-0 rounded-t-md p-3 duration-200 hover:bg-[#0e7490]/25 font-['Encode_Sans_SC'] text-white absolute bottom-0 left-[50%] translate-x-[-50%]">
                    <Link className="cursor" to="/guestbook">GUESTBOOK</Link>
                </div>
            </main>
            <div className="h-20 bg-[#0e7490] w-[2px] ml-px"></div>
            <section className="w-[90%] sm:w-6/12 h-14 flex justify-center">
                <ButtonsHero />
            </section>
            <div className="p-5 flex flex-col mt-2">
            <p className="text-white flex flex-row gap-2 text-xs font-['Encode_Sans_SC']">If you are interested in the project code, click here: 
                <a className="cursor" href="https://github.com/clariglia/personal-project">
                    <img className="hover:fill-[#a78bfa] fill-white" src="./github.svg" alt="github repo" width="18" height="18"></img>
                </a>
            </p>
            <p className="text-xs font-['Encode_Sans_SC'] flex justify-center text-white">© thanks to&nbsp;
             <a className="hover:text-[#a78bfa] duration-150 hover:font-bold cursor" href="https://html5up.net/">html5&nbsp;</a> 
             for the insipiration</p>
            </div>
        </div>

        
    )
}