//import { getSocios } from "../lib/prisma/socios"
'use client'
import { useEffect,useState } from "react"

export default function Listado(){
  //const {socios}=await getSocios()
  const [socios, setSocios] = useState([]);
  

    
    const fetchData = async () => {
      const response = await fetch('/api/socios');
      const jsonData = await response.json();
      setSocios(jsonData);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
  
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





