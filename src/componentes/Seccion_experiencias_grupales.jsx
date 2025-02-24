import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const SeccionExperienciasGrupales = () => {
    return (
      <div className="relative flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-yellow-700 mb-6">EXPERIENCIAS GRUPALES</h2>
        <div className="relative flex items-center justify-center w-full">
          <button className="absolute left-0 bg-white rounded-full p-2 shadow-md text-gray-600 hover:bg-gray-200">
            <FiChevronLeft size={24} className='bg-yellow-500'/>
          </button>
          <div className="flex justify-center gap-6 px-12">
            <CardExperiencia 
              image="exp_grupales_1.png"
              categoria='¡Últimos cupos!'
              titulo='SAFARI (ÁFRICA)'
              fecha='5 AL 15 DE ABRIL | DESDE 5.500 USD'
              descripcion='Serengeti, viaje en globo, hotel todo incluido 4 estrellas. Vive la experiencia de conocer los 4 reyes de la sabana africana.'
              colorCategoria='bg-yellow-600'
            />
            <CardExperiencia 
              image="exp_grupales_2.png"
              categoria='AGOTADO'
              titulo='JAPÓN: TRADICIÓN Y MODERNIDAD'
              fecha='30/04 - 11/05 | DESDE 2.700 USD'
              descripcion='Tokio, Monte Fuji y Kamajuza. Conoce la cultura que combina la tradición y la tecnología.'
              colorCategoria='bg-red-600'
            />
            <CardExperiencia 
              image="exp_grupales_3.png"
              categoria='CUPOS DISPONIBLES'
              titulo='EGIPTO: MÍSTICO Y MAJESTUOSO'
              fecha='01 AL 08 DE ABRIL | DESDE 4.200 USD'
              descripcion='El Cairo, Pirámides, Valle de los Muertos y viaje por el Nilo. Retrocedamos en la historia y conozcamos una de las naciones más antiguas del mundo.'
              colorCategoria='bg-green-600'
            />
          </div>
          <button className="absolute right-0 bg-white rounded-full p-2 shadow-md text-gray-600 hover:bg-gray-200">
            <FiChevronRight size={24} className='bg-yellow-500' />
          </button>
        </div>
      </div>
    );
  };
  
  const CardExperiencia = ({ image, categoria, titulo, fecha, descripcion, colorCategoria }) => {
    return (
      <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
        <img src={require(`../imagenes/${image}`)} alt={titulo} className="w-full h-64 object-cover" />
        <div className={`text-white text-center font-bold py-2 ${colorCategoria}`}>{categoria}</div>
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-bold text-gray-800 text-center">{titulo}</h2>
          <p className="text-yellow-600 font-semibold text-center">{fecha}</p>
          <p className="text-gray-600 mt-2 text-center">{descripcion}</p>
        </div>
        <div className="bg-yellow-500 text-white text-center font-bold py-3 cursor-pointer hover:bg-yellow-600">
          MÁS INFORMACIÓN
        </div>
      </div>
    );
  };

  export default SeccionExperienciasGrupales;