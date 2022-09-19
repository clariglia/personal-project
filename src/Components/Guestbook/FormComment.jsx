import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function FormComment(){
    const navigate = useNavigate()
    const from = useRef()
    const message = useRef()

    async function handleComment(event){
        event.preventDefault()
        const response = await fetch('http://localhost:3001/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({mittente : from.current.value, message : message.current.value})
        })

        if(response.ok){
            navigate('/guestbook')
        }
        else{
            alert(`Non è stato possibile inserire il commento`)
        }
        
    }

    return(
        <>
            <button className="fixed z-20 top-3 right-5 border-[#0e7490] border-2 rounded-md p-3 duration-200 hover:bg-[#0e7490]/25 font-['Encode_Sans_SC'] cursor">
                <Link to="/guestbook" className="text-white cursor">Guestbook</Link>
            </button>
            <button className="fixed z-20 top-20 right-5 border-[#0e7490] border-2 rounded-md p-3 duration-200 hover:bg-[#0e7490]/25 font-['Encode_Sans_SC'] cursor">
                <Link to="/" className="text-white cursor">Homepage</Link>
            </button>
            <form onSubmit={handleComment} className="flex flex-col justify-center gap-12">
                <div className="relative">
                    <input className="inputFrom bg-transparent border-[#0e7490] border-2 rounded-md h-12 w-full" 
                    type="text" 
                    name="from" 
                    ref={from} required />
                    <label className="absolute text-white font-['Encode_Sans_SC'] top-3 left-2 font-bold transition-all duration-300 ease-out">FROM:</label>
                </div>
                <div className="relative">
                    <textarea className="border-[#0e7490] border-2 bg-transparent rounded-md inputFrom" 
                    type="text" 
                    name="message" 
                    rows="6" 
                    cols="50" 
                    ref={message} 
                    required />
                    <label className="absolute text-white font-['Encode_Sans_SC'] top-3 left-2 font-bold transition-all duration-300 ease-out">MESSAGE:</label>
                </div>
                <button className="border-2 hover:bg-[#0e7490]/25 border-[#0e7490] h-12 rounded-md text-white w-60 m-auto duration-200">SEND</button>
            </form>

        </>
    )
}