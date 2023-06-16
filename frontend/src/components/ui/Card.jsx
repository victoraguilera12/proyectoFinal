export default function Card({children,className,onClick}){
    return (
        <div onClick={onClick} className={`px-8 py-4 transition-all drop-shadow-md rounded-md flex flex-col bg-gray-50 ${className?className:''}`}>
        {children}
        </div>
    )
}