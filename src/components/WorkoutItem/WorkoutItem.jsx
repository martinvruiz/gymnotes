import { useState } from 'react';


export const WorkoutItem = ({ date, bodyPart, exercises, sets, reps, onClick}) => {

    const [hover, setHover] = useState(false);

    return <>
    
    <li onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="border shadow-md h-64 p-4 m-2 flex flex-col justify-center items-center">
        <p className="font-semibold text-orange-500">{date}</p>
        <div className="flex gap-1 font-bold">Grupo muscular: <p className="font-normal">{bodyPart}</p></div>
        <div className="flex gap-1 font-bold">Ejercicio: <p className="font-normal">{exercises}</p></div>
        <div className="flex gap-1 font-bold">Series: <p className="font-normal">{sets}</p></div>
        {
            reps.map((rep, index) => {
                return (
                        <div key={index} className="flex gap-1 font-bold">
                            <p>Serie {index + 1}:</p>
                            <p className="font-normal">{rep.reps} reps</p>
                            <p className="font-normal">{rep.kg} kg</p>
                        </div>
                );
            })
        }
        {
            hover && <button onClick={onClick} className="bg-red-500 text-white p-2 my-1 text-sm rounded-lg">Eliminar</button>
        }
    </li>
    
    
    </>
}