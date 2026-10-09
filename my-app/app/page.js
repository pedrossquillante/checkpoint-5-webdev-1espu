"use client"

import Image from "next/image";
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList";
import FilterInput from "./components/FilterInput"
import "./globals.css" 
import contactsApi from "./services/contactsApi";
import { useEffect, useState } from "react";
export default function Home() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    async function carregar() {
      const resp = await contactsApi.get("https://6ac832b375a4ce3fe7228023.mockapi.io/webdev/contacts")
      setContacts(resp.map((c) => {c.data.nome}))
    }
    carregar()
  }, [])

  return (
    <>
      <FilterInput></FilterInput>
      <ContactForm></ContactForm>
      <ContactList contacts={contacts}></ContactList>
    </>
  );
}
