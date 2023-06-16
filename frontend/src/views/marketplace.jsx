import { useState, useEffect } from "react";
import Product from "../components/Product";
import Footer from "../components/Footer";

const mockData = [
  {
    estrellas: 3,
    id_publicacion: 1,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 2,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: "2023-06-09 12:00:00",
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: true,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 3,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "BUSCA",
    activo: true,
    completado: false,
  },
  {
    estrellas: 3,
    id_publicacion: 4,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "BUSCA",
    activo: true,
    completado: true,
  },
  {
    estrellas: 3,
    id_publicacion: 5,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 6,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 7,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 8,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 9,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 10,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 11,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 12,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 13,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
  {
    estrellas: 3,
    id_publicacion: 14,
    id_usuario: 1,
    fecha_post: "2023-06-09 12:00:00",
    id_categoria: 1,
    icono: "walking",
    nombre_categoria: "Calzado",
    fecha_vendido: null,
    nombre_usuario: "Jorge Paz",
    img_usuario:
      "https://pbs.twimg.com/profile_images/1471851251893776393/w_ok4x-d_400x400.jpg",
    titulo: "Articulo de prueba",
    precio: 29990,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis odio voluptates obcaecati temporibus reprehenderit illo nemo ullam fugit dignissimos minus nihil neque ut, nulla, quaerat cupiditate beatae minima quis.",
    tipo: "VENTA",
    activo: true,
    completado: false,
    id_producto: 1,
    nombre: "Zapatillas Niteball",
    marca: "Adidas",
    imagen:
      "https://www.dimarsa.cl/media/catalog/product/m/a/marcasadidasoriginalss24144-negro1jpeg_0.jpg",
  },
];
export default function Marketplace() {
  const [data, setData] = useState(mockData);
  const [filter, setfilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componenteMontado = true;

  useEffect(() => {
    const getFromDB = async () => {
      const response = await fetch("http://localhost:3000/test");
      console.log(await response.json());
    };
    getFromDB();
  }, []);

  const renderElements = (data) => {
    return (
      <>
        {data.map((item) => (
          <Product key={item.id_publicacion} data={item}></Product>
        ))}
      </>
    );
  };

  const filterBy = (tipo) =>{
    return data.filter(item=>item.tipo == tipo)
  }

  return (
    < >
        <h2 className="text-3xl">Marketplace</h2>

      <div className="flex flex-col lg:flex-row w-full gap-6 mb-6">
        <section className="flex-[8]">
            <h4 className="text-xl text-gray-400">En venta</h4>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
            {renderElements(filterBy('VENTA'))}
          </div>
        </section>
        <section className="flex-[2] sticky top-24 h-[calc(100% - 60px)]">
        <h4 className="text-xl text-gray-400">Se Busca</h4>
        <div className="grid w-full grid-cols-1 gap-4 ">
            {renderElements(filterBy('BUSCA'))}
          </div>

        </section>
      </div>
      {/* <h2 className="text-3xl font-sans tracking-widest font-bold ">
        Marketplace
      </h2>

      <h2>Se vende</h2>
      <h2>Se Busca</h2> */}

    </>
  );
}