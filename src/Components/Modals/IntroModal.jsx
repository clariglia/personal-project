

export default function IntroModal({closeIntroModal}){

    return(
        <div className="modalBackground w-screen h-screen fixed flex justify-center items-center backdrop-blur-sm">
            <div className="modalContainer w-2/5 h-4/5 bg-[#0f172a]/75 rounded-md md:h-3/5 md:w-3/5"  data-aos="zoom-in">
                <div className="flex flex-row-reverse">
                    <button className="buttonModal" onClick={()=> closeIntroModal(false)}>
                        <img src="./closemodal.svg" alt="close modal"></img>
                    </button>
                </div>
                <div>
                    <h2 className="text-[#a78bfa] font-bold font-['Encode_Sans_Expanded'] text-2xl ml-4 mb-6">INTRO</h2>
                </div>
                <div className="body flex flex-col justify-center items-center">
                    <div className="flex justify-start">
                        <img src="./meme.jpg" alt="Me" className="object-cover h-64 w-52 rounded-md mb-6"></img>
                    </div>
                    <div className="h-40 max-h-40 overflow-y-auto p-9">
                        <p className="text-white font-['Encode_Sans_Expanded']">Sono una ragazza di 21 anni piena di passioni e interessi.<br></br>
                        Curiosa di tutto ciò che le circonda, amante della musica, cinema,<br></br>
                        politica e programmazione.
                        Intraprendente, sempre pronta<br></br> 
                        ad abbattere ostacoli della vita.<br></br>
                        Tendo ad essere affidabile negli impegni assegnatomi.<br></br> Dinamica, 
                        pronta ad apprendere nuove nozioni.<br></br>
                        Mi piacerebbe esplorare il mondo<br></br>
                        della fotografia, e perché no,<br></br>
                        poter viaggiare il più possibile e
                        poter scattare posti a me sconosciuti.</p>   
                    </div>
                    
                </div>

            </div>
        </div>
    )
}