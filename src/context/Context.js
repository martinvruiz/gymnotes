import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const Context = createContext();

export const useGlobalContext = () => useContext(Context);

export const GlobalProvider = ({ children }) => {
  const [formData, setFormData] = useState([
    {
      date: "",
      id: "",
      bodyPart: "",
      exercises: "",
      sets: 1,
      reps: [
        {
          kg: "",
          reps: "",
        },
      ],
    },
  ]);

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("workout");
    if (data) {
      setWorkouts(JSON.parse(data));
    } else {
      setWorkouts([]);
    }
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      reps: Array.from({ length: prev.sets }, () => ({ reps: "", kg: "" })),
    }));
  }, [formData.sets]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.date === "" ||
      formData.bodyPart === "" ||
      formData.exercises === ""
    ) {
      alert("Completa todos los campos");
      return;
    } else {
      const newFormData = {
        ...formData,
        id: new Date().getTime().toString(),
      };
      const update = [...workouts, newFormData];
      setWorkouts(update);
      localStorage.setItem("workout", JSON.stringify(update));
      toast.success("Guardado!");
      setFormData({
        date: "",
        id: "",
        bodyPart: "",
        exercises: "",
        sets: 1,
        reps: [{ reps: "", kg: "" }],
      });

      console.log("Guardado!" + update);
    }
  };

  const deleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workout", JSON.stringify(updatedWorkouts));
  };

  const handleDelete = (id) => {
    toast.warning(
      <div className="text-black h-full text-center">
        <span>
          <p>¿Desea eliminar el registro?</p>
          <p>{formData.date}</p>
        </span>
        <div>
          <button
            onClick={() => {
              deleteWorkout(id);
              toast.dismiss();
              toast.warning("Trasaccion Eliminada");
            }}
            className=" bg-black text-white rounded-md my-2 mx-6 px-2"
          >
            Sí
          </button>
          <button
            onClick={() => toast.dismiss()}
            className=" bg-black text-white rounded-md my-2 mx-6 px-2"
          >
            No
          </button>
        </div>
      </div>,
      {
        closeButton: false,
      }
    );
  };

  return (
    <Context.Provider
      value={{
        formData,
        setFormData,
        handleSubmit,
        workouts,
        setWorkouts,
        handleDelete,
      }}
    >
      {children}
    </Context.Provider>
  );
};
