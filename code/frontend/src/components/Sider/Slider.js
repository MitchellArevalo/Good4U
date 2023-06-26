import React from 'react'

function Slider() {
    return (
        <div className='flex w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ' >
            <img src='/assets/imageslider2.png' alt='Imagen2'  />
            <img src='/assets/imageslider3.png' alt='Imagen3' className='w-1/3' />
            <img src='/assets/imageslider1.png' alt='Imagen1' className='w-1/3' />

        </div>
    )
}

export default Slider