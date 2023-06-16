export default function MiniUser({nombre,imagen,id}){
    return (
        <div className="flex items-center">
        <img className="w-4 rounded-full h-4 mr-2" src={imagen} alt={nombre} />
        <small className="mr-4 whitespace-nowrap text-ellipsis">{nombre}</small>
       </div>
    )
}