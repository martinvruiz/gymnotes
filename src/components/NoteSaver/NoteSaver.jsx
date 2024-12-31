
import { useGlobalContext } from "../../context/Context";


export const NoteSaver = ()=>{

    const { formData, setFormData, handleSubmit } = useGlobalContext();


    const exercises = {
        pecho: ["press de banca", "hammer", "press inclinado", "mariposa", "cruces en polea", "press declinado"],
        espalda: ["dominadas", "remo abierto", "remo cerrado", "jalones en polea", "pull over"],
        piernas: ["sentadillas", "prensa", "extensiones", "curl de pierna", "peso muerto", "zancadas", "gemelos", "hip thrust"],
        biceps: ["curl de biceps", "curl martillo", "curl concentrado", "curl bayesian", "curl 21", "curl de araña", "curl de predicador"],
        triceps: ["press frances", "fondos", "patada de triceps", "tricep tras nuca", "tricep en polea", "tricep con mancuerna", "tricep con barra"],
        hombros: ["press militar", "elevaciones laterales", "elevaciones frontales", "elevaciones posteriores", "pajaros", "press arnold", "press tras nuca"],
        abdomen: ["crunch", "plancha", "elevaciones de pierna", "elevaciones de tronco", "abdominales en polea", "abdominales con rueda", "abdominales con balon", "abdominales con peso"],
    }

    const handleChange = (e)=>{

        const {name, value} = e.target

        if(name === "sets"){
            const setsData = parseInt(value, 10) || 1;
            setFormData((prev)=>({
                ...prev,
                [name]: setsData,
                reps: Array(setsData).fill(""),
            }))
        }else{
            setFormData((prev)=>({
                ...prev,
                [name]: value
            }))
        }

        console.log(formData)
    }

    const handleRepsChange = (index, field, value) => {
        const updatedReps = formData.reps.map((set, i) =>
            i === index ? { ...set, [field]: value } : set
        );
    
        setFormData((prev) => ({ ...prev, reps: updatedReps }));
    };


    return <>
    
        <h3 className="mt-4 font-bold lg:text-2xl">Guardar Nota</h3>

        <form 
            className="flex flex-col items-center w-3/4 lg:w-1/3 border border-gray-300 rounded-md p-3 shadow-md"
            onSubmit={handleSubmit}
            >

            <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 my-2 border border-gray-300 rounded-md"/>

            <select
                className="w-full p-2 my-2 border border-gray-300 rounded-md"
                name="bodyPart"
                value={formData.bodyPart}
                onChange={handleChange}>
                    <option value="">Selecciona una parte del cuerpo</option>
                    {
                        Object.keys(exercises).map((part, index)=>(
                            <option key={index} value={part}>
                                {part.charAt(0).toUpperCase() + part.slice(1)}
                            </option>
                        ))
                    }
            </select>

            {
                formData.bodyPart && exercises[ formData.bodyPart ] && (
                    <select
                    className="w-full p-2 my-2 border border-gray-300 rounded-md"
                    name="exercises"
                    value={formData.exercises}
                    onChange={handleChange}
                    >
                        <option value="">Selecciona un ejercicio</option>
                        {
                            exercises[formData.bodyPart].map((exercise, index)=>(
                                <option key={index} value={exercise}>
                                    {exercise.charAt(0).toUpperCase() + exercise.slice(1)}
                                </option>
                            ))
                        }
                    </select>
                )
            }

            <input 
                type="number" 
                name="sets" 
                id="sets"
                min={1} 
                placeholder="Cantidad de sets"
                value={formData.sets}
                onChange={handleChange}
                className="w-full p-2 my-2 border border-gray-300 rounded-md"
                />

            {formData.reps.map((set, index) => (
                <div key={index} className="w-full flex items-center my-1">
                    <label htmlFor={`rep-${index}`}>
                        Set {index + 1}:
                    </label>
                    <input
                        type="number"
                        id={`rep-${index}`}
                        value={set.reps}
                        onChange={(e) => handleRepsChange(index, "reps" ,e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder={`Reps del set ${index + 1}`}
                        min="0"
                    />
                    <input
                        type="number"
                        id={`kg-${index}`}
                        value={set.kg}
                        onChange={(e) => handleRepsChange(index, "kg" ,e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder={`KG ${index + 1}`}
                        min="0"
                    />
                </div>
            ))}

            <button 
                type="submit"
                className="w-full p-2 my-2 bg-blue-500 text-white rounded-md"
                >
                    Guardar
            </button>
        </form>
    
    </>
}