export default function Categoria({categoria,icono}){
    return (
        <div className="bg-sky-200 w-min text-sky-800 px-3 flex items-center gap-2 rounded-xl">
          {categoria} <em className={`iconoir-${icono}`}></em>
        </div>
    )
}