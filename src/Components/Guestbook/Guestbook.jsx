
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Guestbook(){
    const [data, setData] = useState([])
    const url_backend = process.env.REACT_APP_URL_BACKEND
    useEffect(()=>{
        fetch(url_backend)
        .then(response => response.json())
        .then(data => setData(data))
    }, [])


    return(
        <div className="w-screen h-screen overflow-y-auto py-10">
        <button className="fixed z-20 top-3 right-5 border-[#0e7490] border-2 rounded-md p-3 duration-200 hover:bg-[#0e7490]/25 font-['Encode_Sans_SC'] cursor">
            <Link to="/comment" className="text-white cursor">Add a comment!</Link>
        </button>
        <button className="fixed z-20 top-20 right-5 border-[#0e7490] border-2 rounded-md p-3 duration-200 hover:bg-[#0e7490]/25 font-['Encode_Sans_SC'] cursor">
            <Link to="/" className="text-white cursor">Homepage</Link>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 grid-rows-4 w-full">
            {data.map((item) => { 
                return <div key={item.id} className="w-4/5 bg-[#0f172a]/75 backdrop-blur-sm rounded-md text-neutral-50 break-words">
                            <span className="flex flex-row gap-3 p-2">
                                <h3 className="font-['Encode_Sans_SC'] text-[#a78bfa] font-bold">From:</h3>
                                <h3 className="font-['Poppins']">{item.mittente}</h3>
                            </span>
                            <h3 className="font-['Encode_Sans_SC'] text-[#a78bfa] font-bold pl-2">Message:</h3>
                            <p className="p-3 font-['Poppins'] h-24 overflow-y-auto">{item.message}</p>
                        </div>
                })}
        </div>
        </div>

    )
}