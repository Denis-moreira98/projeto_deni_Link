import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { Input } from "../../components/input";

import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   function handleSubmit(e: FormEvent) {
      e.preventDefault();

      if (email === "" || password === "") {
         alert("PREENCHA TODOS OS CAMPOS");
         return;
      }
      signInWithEmailAndPassword(auth, email, password)
         .then(() => {
            console.log("Logado con sucesso");
            navigate("/admin", { replace: true });
         })
         .catch((error) => {
            console.log("Erro fazer o login");
            console.log(error);
         });
   }

   return (
      <div className="flex w-full h-screen items-center flex-col justify-center">
         <Link to="/">
            <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
               Deni
               <span className="bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent">
                  Link
               </span>
            </h1>
         </Link>
         <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl  flex flex-col px-2"
         >
            <Input
               placeholder="Digite seu email..."
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />

            <Input
               placeholder="**********"
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />

            <button
               type="submit"
               className="h-9 bg-blue-600 rounded border-0  text-lg font-medium text-white"
            >
               Acessar
            </button>
         </form>
      </div>
   );
}
