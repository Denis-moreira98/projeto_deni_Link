import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FormEvent, useEffect, useState } from "react";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
   const [facebook, setFacebook] = useState("");
   const [gitHub, setGitHub] = useState("");
   const [linkedIn, setLinkedIn] = useState("");

   useEffect(() => {
      function loadLinks() {
         const docRef = doc(db, "social", "link");
         getDoc(docRef)
            .then((snapshot) => {
               if (snapshot.data() !== undefined) {
                  setFacebook(snapshot.data()?.facebook);
                  setGitHub(snapshot.data()?.gitHub);
                  setLinkedIn(snapshot.data()?.linkedIn);
               }
            })
            .catch((err) => {
               console.log("Erro ao carregar os links " + err);
            });
      }
      loadLinks();
   }, []);

   function handleRegister(e: FormEvent) {
      e.preventDefault();

      setDoc(doc(db, "social", "link"), {
         facebook: facebook,
         gitHub: gitHub,
         linkedIn: linkedIn,
      })
         .then(() => {
            console.log("CADASTRADOS COM SUCESSO");
         })
         .catch((err) => {
            console.log("ERRO AO SALVAR " + err);
         });
   }

   return (
      <div className="flex items-center flex-col min-h-screen pb-7 px-2">
         <Header />

         <h1 className="text-white text-2xl font-medium mt-8 mb-4">
            Minhas redes sociais
         </h1>

         <form
            onSubmit={handleRegister}
            className="flex flex-col max-w-xl w-full"
         >
            <label className="text-white font-medium mt-2 mb-2">
               Link do Facebook
            </label>
            <Input
               type="url"
               placeholder="Digite a url do facebook..."
               value={facebook}
               onChange={(e) => setFacebook(e.target.value)}
            />

            <label className="text-white font-medium mt-2 mb-2">
               Link do GitHub
            </label>
            <Input
               type="url"
               placeholder="Digite a url do GitHub..."
               value={gitHub}
               onChange={(e) => setGitHub(e.target.value)}
            />

            <label className="text-white font-medium mt-2 mb-2">
               Link do LinkedIn
            </label>
            <Input
               type="url"
               placeholder="Digite a url do LinkedIn..."
               value={linkedIn}
               onChange={(e) => setLinkedIn(e.target.value)}
            />

            <button
               className="text-white  bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
               type="submit"
            >
               Salvar Links
            </button>
         </form>
      </div>
   );
}
