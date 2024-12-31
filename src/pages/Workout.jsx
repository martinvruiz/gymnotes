import { WorkoutList } from "../components/WorkoutList/WorkoutList"



export const Workout = () => {


    return <>
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className=" my-2 text-xl lg:text-3xl font-semibold">Tus entrenamientos</h2>
            
            <WorkoutList/>
        </div>
    </>
}