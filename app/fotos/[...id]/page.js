import React from 'react'
import Image from 'next/image';
const page = ({params}) => {
    const {id}=params
 
  return (
    <Image src={`http://www.morosdelcastell.com:3001/${id[0]}/${id[1]}/${id[2]}`} alt={id[2]} className="w-full h-auto rounded-md" width={500} height={500} />
  )
}

export default page