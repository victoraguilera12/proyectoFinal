import React, { useState, useEffect } from 'react'


export default function productos() {
    const [data, setData] = useState([])
    const [filter, setfilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componenteMontado = true


    useEffect(() => {
        const getProductos = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if (componenteMontado) {
                setData(await response.clone().json())
                setfilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => {
                componenteMontado = false
            }
        }
        getProductos()
    }, [])




    const Loading = () => {
        return (
            <>
               <div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
            </>
        )
    }


    const filterProductos=(cat)=>{
        const updateList= data.filter((x)=> x.category=== cat)
        setfilter(updateList)
    }
    const ShowProductos = () => {
        return (
            <>
            //arreglar filtros 
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark me-2'onClick={()=>setfilter(data)}> ALL</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProductos('rascadores')}> Lorem ip</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProductos('rascadores')}> Lorem ip</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProductos('rascadores')}> Lorem ip</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProductos('rascadores')}> Lorem ip</button>

                </div>
                {filter.map((productos) => {
                    return (
                        <>
                            <div  className="col  -md-3 mb-4">
                                <div class="card h-100 text-center p-4"key={productos.id} >
                                    <img src= {productos.image} class="card-img-top" alt={productos.title} height="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{productos.title.substring(0,12)} </h5>
                                        <p class="card-text lead fw-bold">${productos.price}</p>
                                        <a href="#" class="btn btn-outline-dark">Comprar Ahora</a>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })}
            </>
        )

    }
    return (


        <div>
            <div className="container my-5 py -5">
                <div className="row">
                    <div className="col -12 mb-5">
                        <h1 className='display-6 fw-bolder text-center shadow- sm'> Productos Recientes <hr /></h1>
                    </div>

                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProductos />}
                    </div>
                </div>

            </div>
        </div>
    )
}
