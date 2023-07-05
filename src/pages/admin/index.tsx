import { useState } from "react";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { FiTrash } from "react-icons/fi";

export function Admin() {
   const [nameInput, setNameInput] = useState("");
   const [urlInput, setUrlInput] = useState("");
   const [textColor, setTextColor] = useState("#f1f1f1");
   const [bgInput, setBgInput] = useState("#121212");

   return (
      <div className="flex items-center flex-col min-h-screen pb-7 px-2">
         <Header />

         <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
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
         <article
            className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
            style={{ backgroundColor: "#2563EB", color: "#FFF" }}
         >
            <p>Canal do youtbe</p>
            <div>
               <button className="bg-neutral-900  border border-dashed p-1 rounded">
                  <FiTrash size={18} color="#FFF" />
               </button>
            </div>
         </article>
      </div>
   );
}
