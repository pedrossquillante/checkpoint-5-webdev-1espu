import Image from "next/image";
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList";
export default function Home() {
  return (
    <>
      <ContactForm></ContactForm>
      <ContactList></ContactList>
    </>
  );
}
