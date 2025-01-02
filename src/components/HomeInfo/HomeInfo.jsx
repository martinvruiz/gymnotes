import { InfoItem } from "../InfoItem/InfoItem";
import images from "../../icons/icons";

export const HomeInfo = () => {
  return (
    <>
      <div className="w-3/5 flex flex-col items-center text-center my-4">
        <h3 className="text-3xl my-2 font-bold border-b border-orange-500 w-full p-1">
          Beneficios de ir al gimnasio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
          <InfoItem
            title="Fortalecimiento muscular"
            text="Incrementa la fuerza y tonifica los músculos."
            img={images[0]}
          />
          <InfoItem
            title="Mejora la resistencia"
            text="Incrementa la capacidad aeróbica y anaeróbica."
            img={images[1]}
          />
          <InfoItem
            title="Control del peso"
            text="Ayuda a quemar calorías y controlar el peso corporal."
            img={images[2]}
          />
          <InfoItem
            title="Reducción del estrés"
            text="Libera endorfinas, que mejoran el estado de ánimo y reducen el estrés."
            img={images[3]}
          />
          <InfoItem
            title="Mayor autoestima"
            text="Alcanzar metas físicas mejora la confianza en uno mismo."
            img={images[4]}
          />
          <InfoItem
            title="Aumento de la energía diaria"
            text="Mejora la capacidad para realizar tareas cotidianas."
            img={images[5]}
          />
        </div>
      </div>
    </>
  );
};
