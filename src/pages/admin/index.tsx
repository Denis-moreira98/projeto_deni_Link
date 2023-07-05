import { useState, FormEvent, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { FiTrash } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import {
   addDoc,
   collection,
   onSnapshot,
   query,
   orderBy,
   doc,
   deleteDoc,
} from "firebase/firestore";

interface LinkProps {
   id: string;
   name: string;
   url: string;
   bg: string;
   color: string;
}

export function Admin() {
   const [nameInput, setNameInput] = useState("");
   const [urlInput, setUrlInput] = useState("");
   const [textColor, setTextColor] = useState("#f1f1f1");
   const [bgInput, setBgInput] = useState("#121212");
   const [links, setLinks] = useState<LinkProps[]>([]);

   useEffect(() => {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      const unsub = onSnapshot(queryRef, (snapshot) => {
         let lista = [] as LinkProps[];

         snapshot.forEach((doc) => {
            lista.push({
               id: doc.id,
               name: doc.data().name,
               url: doc.data().url,
               bg: doc.data().bg,
               color: doc.data().color,
            });
         });
         setLinks(lista);
      });

      return () => {
         unsub();
      };
   }, []);

   function handleRegister(e: FormEvent) {
      e.preventDefault();

      if (nameInput === "" || urlInput === "") {
         alert("PREENCHA TODOS OS CAMPOS");
         return;
      }
      addDoc(collection(db, "links"), {
         name: nameInput,
         url: urlInput,
         bg: bgInput,
         color: textColor,
         created: new Date(),
      })
         .then(() => {
            setNameInput("");
            setUrlInput("");
            console.log("Cadastrado com sucesso!");
         })
         .catch((error) => {
            console.log("Erro ao cadastrar no banco" + error);
         });
   }

   async function handleDeleteLink(id: string) {
      const docRef = doc(db, "links", id);
      await deleteDoc(docRef);
   }

   return (
      <div className="flex items-center flex-col min-h-screen pb-7 px-2">
         <Header />

         <form
            onSubmit={handleRegister}
            className="flex flex-col mt-8 mb-3 w-full max-w-xl"
         >
            <label className="text-white font-medium mt-2 mb-2">
               Nome do link
            </label>
            <Input
               placeholder="Digite o nome do link..."
               value={nameInput}
               onChange={(e) => setNameInput(e.target.value)}
            />
            <label className="text-white font-medium mt-2 mb-2">
               URl do link
            </label>
            <Input
               type="url"
               placeholder="Digite a URL..."
               value={urlInput}
               onChange={(e) => setUrlInput(e.target.value)}
            />
            <section className="flex my-4 gap-5 ">
               <div className="flex gap-2">
                  <label className="text-white font-medium mt-2 mb-2">
                     Cor do link
                  </label>
                  <input
                     type="color"
                     value={textColor}
                     onChange={(e) => setTextColor(e.target.value)}
                  />
               </div>
               <div className="flex gap-2">
                  <label className="text-white font-medium mt-2 mb-2">
                     Fundo do link
                  </label>
                  <input
                     type="color"
                     value={bgInput}
                     onChange={(e) => setBgInput(e.target.value)}
                  />
               </div>
            </section>

            {nameInput !== "" && (
               <div className="flex items-center justify-center flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                  <label className="text-white font-medium mt-2 mb-3">
                     Veja como está ficando
                  </label>
                  <article
                     className="w-11/12 max-w-lg flex flex-col justify-between items-center bg-zinc-900 rounded px-1 py-3"
                     style={{
                        marginBottom: 8,
                        marginTop: 8,
                        backgroundColor: bgInput,
                     }}
                  >
                     <p className="font-medium" style={{ color: textColor }}>
                        {nameInput}
                     </p>
                  </article>
               </div>
            )}

            <button className="mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center">
               Cadastrar
            </button>
         </form>

         <h2 className="font-bold text-white mb-4 text-2xl">Meus links</h2>

         {links.map((link) => (
            <article
               key={link.id}
               className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
               style={{ backgroundColor: link.bg, color: link.color }}
            >
               <p>{link.name}</p>
               <div>
                  <button
                     className="border border-dashed p-1 rounded bg-neutral-900"
                     onClick={() => handleDeleteLink(link.id)}
                  >
                     <FiTrash size={18} color="#FFF" />
                  </button>
               </div>
            </article>
         ))}
      </div>
   );
}
