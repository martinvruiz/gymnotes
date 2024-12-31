
import { useGlobalContext } from "../../context/Context"
import { format, parseISO, compareDesc } from "date-fns"
import { WorkoutItem } from "../WorkoutItem/WorkoutItem"
import { WorkoutSelect } from "../WorkoutSelect/WorkoutSelect"
import { useState, useEffect } from "react"


export const WorkoutList = () => {


const { workouts, deleteWorkout } = useGlobalContext()

const [bodyPart, setBodyPart] = useState("")

const [filteredWorkouts, setFilteredWorkouts] = useState([])

useEffect((
    () => {
        setFilteredWorkouts(workouts)
    }
), [workouts])

useEffect(() => {

    let updatedWorkouts = [...workouts]

    if(bodyPart === ""){
        setFilteredWorkouts(workouts)
    }

    const data = localStorage.getItem("workout")
    if(data){
        const parsedData = JSON.parse(data)
        if(bodyPart){
            updatedWorkouts = parsedData.filter((workout) => workout.bodyPart === bodyPart)
        }
    }


    updatedWorkouts.sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));
    setFilteredWorkouts(updatedWorkouts)
}, [bodyPart, workouts])

const filterWorkouts = (e) => {
    const selected = e.target.value
    setBodyPart(selected)
}

const formatDate = (date) => {
    return format(parseISO(date), "dd/MM/yyyy")
}

const capital = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}


    return <>
        <WorkoutSelect value={bodyPart} onChange={filterWorkouts}/>
        <ul className="flex flex-col flex-wrap md:flex-row items-center justify-center">
            
            {
                filteredWorkouts.map((workout, index) => {
                    return <WorkoutItem key={index} onClick={()=> deleteWorkout(workout.id)} date={formatDate(workout.date)} bodyPart={capital(workout.bodyPart)} exercises={capital(workout.exercises)} sets={workout.sets} reps={workout.reps}/>})
                }
            </ul>
        </>
    }
