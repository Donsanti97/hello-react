import React from 'react'

const SeccionExperienciasPersonalizadas = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-700 mb-6">EXPERIENCIAS PERSONALIZADAS</h2>
        <div className="flex items-center w-full">
          <img src={require('../imagenes/exp_personalizadas.png')} alt="Experiencia Personalizada" className="w-2/5 h-73 rounded-lg shadow-lg object-cover" />
          <div className="w-1/2 p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">¿QUÉ NOS HACE DIFERENTES?</h3>
            <p className='max-w-4xl mx-auto text-xl mb-8 text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet
              dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              Duis autem vel eum iriure dolor in hendrerit in vulputate
              velit esse molestie consequat, vel illum dolore eu feugiat
              nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue
              duis dolore te feugait nulla facilisi.
            </p>
            <button className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 text-left block text-xl">
              COTIZAR MI VIAJE
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default SeccionExperienciasPersonalizadas;