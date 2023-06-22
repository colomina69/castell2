//import { getSocios } from "../lib/prisma/socios"
'use client'
import { useEffect,useState } from "react"

/* export async function getServerSideProps() {
  // Obtener los datos desde la URL
  
  // Pasar los datos como propiedades a la página
  return {
    props: {
      socios,
    },
  };
} */

async function Page() {
  //const {socios}=await getSocios()
  /*  const [socios, setSocios] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/socios')
        const data = await response.json();
        console.log(data)
        setSocios(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };
    
    fetchData();
    
  }, []); */
  
  const response = await fetch('http://localhost:3000/api/socios')
  const socios = await response.json();
  return (
    <section className="py-20">
    <div className="container">
      <h1>Socios</h1>
      <br />
      <table className="border-collapse border border-slate-500">
      <thead>
        <tr>
          <th className="border border-slate-900">ID</th>
          <th className="border border-slate-900">PRIMER</th>
          <th className="border border-slate-900">SEGON</th>
          <th className="border border-slate-900">NOM</th>
          <th className="border border-slate-900">TELEFONO</th>
          <th className="border border-slate-900">NAIX</th>
          <th className="border border-slate-900">CORREU</th>
        </tr>
      </thead>
      <tbody>
        {socios?.map(socio=>(
        <tr key={socio.ID}>
          <td className="border border-slate-900">{socio.ID}</td>
          <td className="border border-slate-900">{socio.PRIMER}</td>
          <td className="border border-slate-900">{socio.SEGON}</td>
          <td className="border border-slate-900">{socio.NOM}</td>
          <td className="border border-slate-900">{socio.TELEFONO}</td>
          <td className="border border-slate-900">{socio.NAIX}</td>
          <td className="border border-slate-900">{socio.CORREU}</td>
        </tr>
        ))}
      </tbody>
      </table>
      
    </div>
  </section>
  )
}

export default Page



