
'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [fotos, setFotos] = useState([]);

  const obtenerFotos = async () => {
    try {
      const respuesta = await fetch('http://www.morosdelcastell.com:3001/archivos');
      const data = await respuesta.json();
      setFotos(data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };
  useEffect(() => {

    obtenerFotos();
  }, []);

  return (

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-10 z-0">
        {fotos.map((foto, index) => (
         <div key={index}>
          <Link href={`/fotos/${foto.año}`}>
            <div className='relative'>
              <Image src={`http://www.morosdelcastell.com:3001/ima/${foto.año}/${foto.primero}`} alt={`Image ${index + 1}`} className="w-full h-auto rounded-md" width={500} height={500} />
              <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
                <h1 className='text-black bg-white text-4xl font-bold'>{foto.año}</h1>

              </div>
            </div>
          </Link>
         </div>
       ))} 
     </div>
  );
};
export default Page;