import React, { useContext } from 'react'
import imagen_avatar from '../assets/imagen_avatar.avif'
import AuthContext from '../authContext';

export default function () {
  const { authenticated,user } = useContext(AuthContext);

  return (
    <section> 
        <article class='shadow-2xl rounded-sm bg-slate-500'></article>
        </section>
  )
}