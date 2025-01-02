export const InfoItem = ({ img, title, text }) => {
  return (
    <>
      <div className="flex flex-col items-center w-56 h-56 p-2 border-2 rounded-lg shadow-md m-2">
        <img src={img} alt={img} className="object-contain w-2/4 h-2/4" />
        <h4 className="p-1 mt-1 font-bold text-orange-500">{title}</h4>
        <p className="p-1">{text}</p>
      </div>
    </>
  );
};
