import { createContext, useContext, useState, useEffect } from "react";


const Context = createContext();

export const useGlobalContext = () => useContext(Context);

export const GlobalProvider = ({ children }) => {

    const [formData, setFormData] = useState([{
        date: "",
        id: "",
        bodyPart: "",
        exercises: "",
        sets: 1,
        reps: [{
            kg: "",
            reps: "",
        }],
}])

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        const data = localStorage.getItem("workout")
        if(data){
            setWorkouts(JSON.parse(data))
        }else{
            setWorkouts([])
        }
    }, [])

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            reps: Array.from({ length: prev.sets }, () => ({ reps: "", kg: "" })),
        }));
    }, [formData.sets]);


    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(formData.date === "" || formData.bodyPart === "" || formData.exercises === ""){
            alert("Completa todos los campos")
            return
        } else{
            const newFormData = {
                ...formData,
                id: new Date().getTime().toString(),
            }
            const update = [...workouts, newFormData]
            setWorkouts(update)
            localStorage.setItem("workout", JSON.stringify(update))
            alert("Nota guardada")
            setFormData({ date: "", id: "" ,bodyPart: "", exercises: "", sets: 1, reps: [{reps : "", kg : ""}] })

        }
    }

    const deleteWorkout = (id) => {
        const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
        setWorkouts(updatedWorkouts);
        localStorage.setItem("workout", JSON.stringify(updatedWorkouts));
    };

return <Context.Provider value={{ formData, setFormData, handleSubmit, workouts, setWorkouts, deleteWorkout }}>
            {children}
        </Context.Provider>

}