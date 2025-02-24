import React from 'react'

import header from '../imagenes/header.png'
import SeccionNosotros from './Seccion_nosotros';
import SeccionExperienciasGrupales from './Seccion_experiencias_grupales';
import SeccionExperienciasPersonalizadas from './Seccion_experiencias_personalizadas';

const SeccionPrincipal = () => (
  <div id='inicio' className='relative min-h-screen bg-cover bg-center text-white flex flex-col justify-start items-center px-4 text-center w-full pt-20'
    style={{ backgroundImage: `url(${header})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
    <Cabecera />
    <div className='flex flex-col justify-center items-center w-full h-full'></div>
    <h1 className='text-4xl md:text-6xl font-bold mt-32'>THE TRAVEL</h1>
    <h2 className='text-2xl md:text-4xl text-yellow-500 mt-2'>EXPERIENCE</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl mb-12'>
      <ViajesDestino title='Viajes grupales' image={require('../imagenes/viajes_grupales.png')} />
      <ViajesDestino title='Viajes a la medida' image={require('../imagenes/viajes_a_la_medida.png')} />
      <ViajesDestino title='Destinos para parejas' image={require('../imagenes/destinos_para_parejas.png')} />
    </div>
  </div>
);

const Cabecera = () => (
  <nav className='absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white z-50'>
    <div className='text-2xl font-bold'>
      <img src={require('../imagenes/logo.png')} alt='Logo' className='h-10' />
    </div>
    <ul className='hidden md:flex space-x-6 text-gray-700'>
      <li><a href='#inicio' className='hover:text-gray-300'>Inicio</a></li>
      <li><a href='#nosotros' className='hover:text-gray-300'>Nosotros</a></li>
      <li><a href='#viajes' className='hover:text-gray-300'>Viajes</a></li>
      <li><a href='#blogs' className='hover:text-gray-300'>Blogs</a></li>
      <li><a href='#contacto' className='hover:text-gray-300'>Contacto</a></li>
    </ul>
  </nav>
);

const ViajesDestino = ({ title, image }) => (
  <div className='relative bg-white bg-opacity-20 border-4 border-white/50 rounded-2xl shadow-lg overflow-hidden w-full md:w-80 backdrop-blur-lg'>
    <img src={image} alt={title} className='w-full h-48 object-cover' />
    <div className='absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent'>
      <div className='flex items-center justify-end w-full text-white text-lg font-semibold'>
        <h3 className='mr-2'>{title}</h3>
        <span className='text-xl'>→</span>
      </div>
    </div>
  </div>
);







const App = () => (
  <div className='relative'>
    <SeccionPrincipal />
    <SeccionNosotros />
    <SeccionExperienciasGrupales />
    <SeccionExperienciasPersonalizadas />
  </div>
);

export default App;