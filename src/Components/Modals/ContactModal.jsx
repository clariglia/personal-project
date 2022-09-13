import onCopyHandler from "../Hook/useCopyHandler";

export default function ContactModal({closeContactModal}){

    return(
        <div className="modalBackground w-screen h-screen fixed flex justify-center items-center backdrop-blur-sm">
            <div className="modalContainer bg-[#0f172a]/75 rounded-md w-[100%] sm:w-[60%] md:w-[60%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%]" data-aos="zoom-in">
                <div className="flex flex-row-reverse p-2">
                    <button className="buttonModal hover:bg-[#0e7490]/25 rounded-full duration-200" onClick={()=> closeContactModal(false)}> 
                        <img src="./closemodal.svg" alt="close modal"></img>
                    </button>
                </div>
                <div className="title">
                <h2 className="text-[#a78bfa] font-bold font-['Encode_Sans_SC'] text-2xl ml-4 pl-3 mb-6">CONTACT</h2>
                </div>
                <section className="body flex flex-col justify-center items-center gap-3">
                    <img src="./contact.avif" alt="La dolce vita" className="object-fill h-48 w-96 rounded-md mb-6"></img>
                    <p className="text-white font-['Poppins'] text-center">Se vuoi saperne di più, o spulciare il mio portfolio,<br></br> 
                    contattami a questi indirizzi:</p>
                    <div className="flex flex-row gap-5">
                        <a className="aLink" href="https://www.linkedin.com/in/consiglia-d-amaro-723015230/">
                            <img width={30} height={30} src="./linkedin.svg" alt="linkedin"></img>
                        </a>
                        <a className="aLink" href="https://github.com/clariglia">
                            <img src="./github.svg" width={30} height={30} alt="github"></img>
                        </a>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3 mt-9 p-5">
                        <div className="relative flex flex-row-reverse justify-center items-center gap-4">
                            <p onClick={onCopyHandler} 
                            id='email' 
                            className="flex flex-row-reverse justify-center font-['Poppins'] text-white hover:text-[#a78bfa] duration-150 active:text-[#a78bfa] hover:font-bold">consigliadamaro0@gmail.com</p>
                            <img src="./email.svg" 
                            width={30} 
                            height={30} 
                            alt="email"></img>
                            <p id='emailPopup' className='absolute top-[24px] opacity-0 text-white'>Hai copiato l'email!</p>
                        </div>

                        <div className="relative flex flex-row-reverse justify-center items-center gap-4">
                            <p onClick={onCopyHandler} 
                            id='cellulare' 
                            className="flex flex-row-reverse justify-center font-['Poppins'] text-white hover:text-[#a78bfa] duration-150 active:text-[#a78bfa] hover:font-bold">+39 339 707 1363</p>
                            <img src="./phone.svg" width={30} height={30} alt="phone"></img>
                            <p id='cellularePopup' className='absolute top-[24px] opacity-0 text-white'>Hai copiato il cellulare!</p>
                        </div>
                    </div>
                        

                </section>

            </div>
        </div>
    )
}