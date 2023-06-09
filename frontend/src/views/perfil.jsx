import React from 'react'
import imagen_avatar from '../assets/imagen_avatar.avif'

export default function () {
  return (
    <section> 
        <div class="m-4 p-4 shadow-md rounded -full ">
            
            <h1 class="text-center"> Mi Perfil </h1>
            <div class="d-flex pt-4">
        <img class="w-30 h-30 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={imagen_avatar} alt="Bordered avatar"></img>
         <h5 class="pt-4 pl-4">nombre del usuario</h5>
         <div class=" block mx-auto shadow-sm rounded max-w-lg pt-4">
              <h1 class>sobre mi</h1>
                <p>descripcion: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime vel tempora aut perferendis laboriosam accusantium, hic error nobis nulla magni, rem asperiores enim? Eligendi repellendus ea ipsa odio quibusdam.</p>
         </div>
         </div>
         
         </div>
         
         <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
       <h2 class="text-center ">Mis Publicaciones</h2>
        </section>
  )
}
