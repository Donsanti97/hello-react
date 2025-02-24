import React from 'react'
import {FaInstagram} from 'react-icons/fa'

const SeccionNosotros = () => (
  <div id='nosotros' className='py-16 bg-white text-gray-800 text-left'>
    <h2 className='text-3xl font-bold text-yellow-600 mb-4 text-center'>N O S O T R O S</h2>
    <p className='max-w-4xl mx-auto text-lg mb-8 text-justify'>
      Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
      aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
      iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
      feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
      luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
    </p>
    <div className='flex flex-col justify-center items-center gap-6 max-w-5xl mx-auto'>
      <div className='flex items-center w-full'>
        <div className='flex flex-col items-center w-64 h-64 flex-shrink-0 relative'>
          <img src={require('../imagenes/nosotros_1.png')} alt='Nosotros 1' className='rounded-lg w-full h-full object-cover' />
          <FaInstagram className='absolute -left-10 top-1/2 transform -translate-y-1/2 text-yellow-600 text-3xl' />
          <p className='text-yellow-600 mt-2'>@churroceballos</p>
        </div>
        <div className='grid grid-cols-3 gap-4 w-full'>
          <img src={require('../imagenes/nosotros_2.png')} alt='Nosotros 2' className='rounded-lg w-full h-64 object-cover' />
          <img src={require('../imagenes/nosotros_3.png')} alt='Nosotros 3' className='rounded-lg w-full h-64 object-cover' />
          <div className='relative rounded-lg overflow-hidden w-full h-64'>
            <img src={require('../imagenes/nosotros_4.png')} alt='Nosotros 4' className='w-full h-full object-cover shadow-lg' style={{ boxShadow: 'inset -50px 0px 50px rgba(0, 0, 0, 0.5)' }} />
            <div className='absolute inset-0 flex items-center justify-end bg-black/30 pr-4'>
              <span className='text-white text-3xl'>→</span>
            </div>
          </div>
        </div>
      </div>
      <hr className='w-full border-t-2 border-yellow-600 mt-6' />
    </div>
  </div>
);

export default SeccionNosotros;