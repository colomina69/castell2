


'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';



const Page = ({ params }) => {

  const [fotos, setFotos] = useState([]);

  const id = params.id;

  const datos = async (id) => {
    const respuesta = await fetch(`http://www.morosdelcastell.com:3001/files/${id}`);
    const data = await respuesta.json();
    setFotos(data)
  }

  /*  useEffect(async()=>{
     
     datos(id)
 
   },[]) */

   datos(id)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {fotos.map((foto, index) => (
        <div key={index}>
          <Link href={`/fotos/${foto.path}`}>

            <Image src={`http://www.morosdelcastell.com:3001${foto.path}`} alt={`Image ${index + 1}`} className="w-full h-auto rounded-md" width={500} height={500} />

          </Link>
        </div>
      ))}
    </div>
  )

}

export default Page