import React, { useState } from "react";
import Estrellas from "./Estrellas";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import Categoria from "./Categoria";

export default function Product({ data }) {
    const [expanded,setExpanded] = useState(false);
    const navigate = useNavigate();
    const renderEstado = (tipo,completado,icon,categoria) =>{
        console.log(tipo)
        if(tipo == 'VENTA'){
            return completado ? 
            <div className="bg-gray-200 w-min text-sm text-gray-800 px-3 flex items-center gap-2 rounded-xl">
          Vendido <em className="iconoir-send-dollars"></em>
        </div>
            :
            <div className="bg-green-200 w-min text-sm text-green-800 px-3 flex items-center gap-2 rounded-xl">
          Vendiendo <em className="iconoir-dollar"></em>
        </div>;
        }else{
            return(
                <div className="bg-rose-100 w-min whitespace-nowrap py-1 text-sm text-rose-800 px-3 ml-3 mt-2 flex items-center gap-2 rounded-xl">
                Buscando {categoria} <em className={`iconoir-${icon}`}></em>
                </div>  
            )
        }
    }

    const navigateToPost = () =>navigate(`/marketplace/${data.id_publicacion}`);
    const isVenta = () =>{return data.tipo =='VENTA'}
    const isVendido= ()=>{return data.fecha_vendido!=null ? true:false}

    const itemVenta = () =>{
        return (
            <>
                   <div className="flex items-center">
        <img className="w-4 rounded-full h-4 mr-2" src={data.img_usuario} alt={data.nombre_usuario} />
        <small className="mr-4 whitespace-nowrap text-ellipsis">{data.nombre_usuario}</small>
        {renderEstado(data.tipo,data.completado)}
       </div>
                <img
                src={data.imagen}
                className="w-4/5 self-center rounded-xl mt-4"
                alt="Producto"
              />
       <div className="flex gap-3 justify-center my-2">
        <Categoria categoria={data.nombre_categoria} icono={data.icono}></Categoria>
        < Estrellas estrellas={data.estrellas}></Estrellas>
        </div>
      <div className="">
        
        
        <h4 className="text-lg">
          {data.nombre} <span className="font-mono">- {data.marca}</span>
        </h4>
        {data.titulo}
        <h3 className="text-2xl my-2">${data.precio?.toLocaleString("es-CL")}</h3>

        {isVendido()?
        (<Button onClick={navigateToPost} type="reversed" color="ui">Vendido </Button>):
        (<Button onClick={navigateToPost}>Comprar Ahora</Button>)}
      </div>
            </>
        );
    }
    const reverseExpanded = () =>setExpanded(!expanded);

    const itemBusca = () =>{
        return(
            <>
                   <div className=" flex items-center">
        <img className="w-4 rounded-full h-4 mr-2" src={data.img_usuario} alt={data.nombre_usuario} />
        <small className="mr-4 whitespace-nowrap text-ellipsis">{data.nombre_usuario}</small>
        <small className="text-gray-400">{data.fecha_post? new Date(data.fecha_post).toLocaleDateString('es-CL'):''}</small>
        <em onClick={reverseExpanded} className={`cursor-pointer transition-all absolute top-2 right-2 iconoir-nav-arrow-down w-4 h-4 rounded-full hover:bg-slate-200  ${expanded ? 'rotate-180':''}`}></em>
       </div>
        {renderEstado(data.tipo,data.completado,data.icono,data.nombre_categoria)}

      <div className="mt-2">
            <h6 className="text-lg">
        {data.titulo}
            </h6>
        
            <p className={`transition-all text-sm tracking-tight overflow-hidden text-gray-600 ${expanded?'h-52':'h-0'}`}>
                {data.descripcion}
            </p>
            <Button color="secondary" className="w-full justify-center my-2" onClick={navigateToPost}>Contactar</Button>
      </div>
            </>
        )
    }

  return (
    <Card className={isVendido()?'opacity-40 grayscale hover:opacity-70 hover:grayscale-0':''}>
        {isVenta() ? itemVenta():itemBusca()}
    </Card>

  );
}