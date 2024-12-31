



export const WorkoutSelect = ({value, onChange}) => {


    const bodypart = ["pecho", "espalda", "piernas", "hombros", "biceps", "triceps", "abdomen"]
    const capital = (string) => {
        if (!string) return "";
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return <>
    
        <select name="bodypart" value={value} onChange={onChange} id="" className="m-2 p-2 border border-slate-500 rounded-md shadow-md text-center">
            <option value="">Todos los ejercicios</option>
            {
                bodypart.map((part, index) => {
                    return <option key={index} value={part}>{capital(part)}</option>
                })
            }
        </select>
    
    </>


}