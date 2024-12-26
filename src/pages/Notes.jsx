import { NoteSaver } from "../components/NoteSaver/NoteSaver"


export const Notes = ()=>{



    return <>
    
        <div className="flex flex-col items-center h-screen">

            <h2 className="mt-4 font-bold lg:text-4xl">Notas</h2>
            <p className="my-2 text-center text-gray-800 lg:text-xl">Aqui encontrarás todas las notas que has creado.</p>

            <NoteSaver/>
        </div>
    
    </>
}