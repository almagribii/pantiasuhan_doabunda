import { Navbar } from "../../../../components/layout/navbar";
import { ContactForm } from "./component/KontakForm"; 

export function Kontak() {
  return (
    <>
      <Navbar />
      <main className="">
        <ContactForm />
      </main>
    </>
  );
}
