import { Link } from "react-router-dom";


export const Navbar = ()=>{


    return <>
    
        <nav className="w-full h-12 shadow flex items-center justify-center">
            <ul className="flex gap-8 justify-center item-center">
                <li>
                    <Link to="/" className="text-lg font-semibold">Inicio</Link>
                </li>
                <li>
                    <Link to="/notes" className="text-lg font-semibold">Notas</Link>
                </li>
                <li>
                    <Link to="/workout" className="text-lg font-semibold">Entrenamientos</Link>
                </li>
            </ul>
        </nav>

    </>
}