
export default function WorkModal({closeWorkModal}){

    return(
        <div className="modalBackground w-screen h-screen fixed flex justify-center items-center backdrop-blur-sm">
            <div className="modalContainer bg-[#0f172a]/75 rounded-md w-[100%] sm:w-[60%] md:w-[60%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%]"  data-aos="zoom-in">
                <div className="flex flex-row-reverse p-2">
                    <button className="buttonModal hover:bg-[#0e7490]/25 rounded-full" onClick={()=> closeWorkModal(false)}>
                        <img src="./closemodal.svg" alt="close modal"></img>
                    </button>
                </div>
                <div className="title">
                <h2 className="text-[#a78bfa] font-bold font-['Encode_Sans_Expanded'] text-2xl ml-4 mb-6">WORK</h2>
                </div>
                <div className="body flex justify-center items-center flex-col">
                    <img src="./codingg.avif" alt="coding" className="object-fill h-48 w-96 rounded-md mb-6"></img>
                    <div className="h-60 max-h-60 overflow-y-auto p-9">
                        <p className="text-white font-['Poppins']">Sono una fullstack web developer.<br></br>
                        In quest'anno, grazie al corso Develhope, ho mosso i primi passi
                        su come fare una SPA (Single Page Application).<br></br>
                        Ho iniziato da Git/Github, strumento fondamentale per sfruttare
                        il versioning. <br></br>
                        Sono passata ai linguaggi di markup e stile: HTML5 e CSS3 e 
                        imparato SASS, un preprocessore CSS che permette di definire<br></br>
                        fogli di stile con una forma più semplice e definita.
                        Da lì ho studiato JavaScript, linguaggio di programmazione<br></br>
                        per creare pagine web interattive e migliorare l'esperienza 
                        utente di un sito Web. <br></br>
                        In seguito, ho appreso le conoscenze di React,
                        libreria JavaScript per creare interfacce utente, e Redux,<br></br>
                        fornisce un modo semplice per centralizzare lo stato e 
                        la logica di un'applicazione web.<br></br>
                        Infine ho esaminato alcune nozioni fontamentali di Node.js, runtime
                        di JavaScript usato sia per lo sviluppo frontend che backend.<br></br>
                        Mi piacerebbe approfondire le mie competenze in React e migliorare
                        sulle nozioni che ho appreso in quest'anno,<br></br>
                        imparare Next.js e Angular e <br></br>
                        muovere i primi passi nel mondo dell'UI/UX design.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}