"use client"

import {useState, useEffect, useRef} from "react"

const ContactForm = () => {
    const [form, setForm] = useState({nome: "", email: "", telefone: ""})
    const nomeRef = useRef() 

    useEffect(() => {
        nomeRef.current.focus
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev) => ({...prev, [name]:value}))
    }

    const handleSubmit = (e) => {
        
    }
    return(
        <form
        className="flex flex-col items-center gap-5">
            <input className="bg-gray-500 p-2 rounded-[10px]"  placeholder="nome" onChange={handleChange} value={form.nome}></input>
            <input className="bg-gray-500 p-2 rounded-[10px]" placeholder="email" onChange={handleChange} value={form.email}></input>
            <input className="bg-gray-500 p-2 rounded-[10px]" placeholder="telefone" onChange={handleChange} value={form.telefone}></input>
        </form>
    )
}

export default ContactForm