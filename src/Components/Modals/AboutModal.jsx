
export default function AboutModal({closeAboutModal}){

    return(
        <div className="modalBackground w-screen h-screen fixed flex justify-center items-center backdrop-blur-sm">
            <div className="modalContainer w-2/5 h-4/5 bg-[#0f172a]/75 rounded-md md:h-3/5 md:w-3/5" data-aos="zoom-in">
                <div className="flex flex-row-reverse">
                    <button className="buttonModal" onClick={()=> closeAboutModal(false)}> 
                        <img src="./closemodal.svg" alt="close modal"></img> 
                    </button>
                </div>
                <div className="title">
                <h2 className="text-[#a78bfa] font-bold font-['Encode_Sans_Expanded'] text-2xl ml-4 mb-6">ABOUT</h2>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="./mastroianni.jpg" alt="La dolce vita" className="object-fill h-48 w-96 rounded-md mb-6"></img>
                    <div className="h-60 h-max-60 overflow-y-auto p-9">
                        <p className="text-white font-['Poppins']">Amante del cinema, in particolare, del cinema italiano del ’900.<br></br>
                            Il cinema di quel tempo è stato caratterizzato da registi di grande stampo
                            come <strong>Federico Fellini</strong>. Riuscì a portare, con grande intensità, i suoi ricordi autobiografici,<br></br>  
                            trasformandoli in arte surreale, poetica e visionaria.<br></br> Il suo stile, satirico, 
                            malinconico e onirico, si esprime oggi con una sola parola: ‘felliniano’. <strong>Vittorio De Sica</strong>, 
                            invece, è stato padre fondantore del neorealismo,
                            ha rintracciato il drammatico<br></br> nelle situazioni quotidiane. <strong>Ettore Scola</strong>, 
                            ha raccontato l’Italia e gli italiani, attraverso 
                            un mix intelligente<br></br> di allegria caciarona
                            e malinconia beffarda con cui, sin dagli anni ’50, 
                            ha sapientemente condito i suoi film.<br></br> Ha descritto in modo impietoso anche la trasformazione 
                            della<br></br> sinistra italiana che probabilmente raccoglie 
                            la sintesi del suo pensiero registico e che narra vicende che vanno <br></br>
                            dalla metà degli anni ’40 a quella degli anni ’70.
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}