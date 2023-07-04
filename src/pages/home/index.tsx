import { Social } from "../../components/social";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Home() {
   return (
      <div className="flex flex-col w-full py-4 items-center justify-center">
         <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
            Denis Moreira
         </h1>
         <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

         <main className="flex flex-col w-11/12 max-w-xl text-center">
            <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
               <a>
                  <p className="text-base md:text-lg ">Canal no Youtube</p>
               </a>
            </section>

            <footer className="flex justify-center gap-2 my-4">
               <Social url="https://www.youtube.com/watch?v=XxE7bZlyiNw&ab_channel=30PRAUM">
                  <FaFacebook size={35} color="#fff" />
               </Social>
               <Social url="https://www.youtube.com/watch?v=XxE7bZlyiNw&ab_channel=30PRAUM">
                  <FaInstagram size={35} color="#fff" />
               </Social>
               <Social url="https://www.youtube.com/watch?v=XxE7bZlyiNw&ab_channel=30PRAUM">
                  <FaYoutube size={35} color="#fff" />
               </Social>
            </footer>
         </main>
      </div>
   );
}
