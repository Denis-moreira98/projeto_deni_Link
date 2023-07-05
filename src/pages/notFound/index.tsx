import { Link } from "react-router-dom";

export function NotFound() {
   return (
      <div className="flex w-full justify-center  min-h-screen items-center flex-col text-white">
         <h1 className="font-bold text-6xl mb-2">Erro 404</h1>
         <h1 className="font-medium text-4xl mb-4">Página não encontrada...</h1>
         <p className="italic text-2xl mb-4">
            Você caiu em uma página que não existe!
         </p>

         <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
            Voltar para Home
         </Link>
      </div>
   );
}
