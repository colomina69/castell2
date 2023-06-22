'use client'
import { useState } from 'react';

/* import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient() */


export default function Form() {
  const [primer, setPrimer] = useState('');
  const [segon, setSegon] = useState('');
  const [nom, setNom] = useState('');
  const [telefono, setTelefono] = useState('');
  const [naix, setNaix] = useState('');
  const [correu, setCorreu] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Procesando')
     try {
      const res=await fetch('http://localhost:3000/api/socios',{
        method:'POST',
        
        body:JSON.stringify({
          PRIMER:primer,SEGON:segon,NOM:nom,TELEFONO:telefono,NAIX:naix,CORREU:correu
        })
      })
      console.log(res)
     /*    const newSocio = await prisma.socios.create({
        data: {
          PRIMER:primer,
          SEGON:segon,
          NOM:nom,
          TELEFONO:telefono,
          NAIX:naix,
          CORREU:correu
        },
      });  */
      const result=await res.json()
      console.log(result);
      // Puedes agregar aquí cualquier lógica adicional después de enviar el formulario

      // Limpiar los campos del formulario después de enviarlo
      setPrimer('');
      setSegon('');
      setNom('');
      setTelefono('');
      setNaix('');
      setCorreu('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="PRIMER" className="block text-gray-700 font-bold mb-2">
            PRIMER:
          </label>
          <input
            type="text"
            id="PRIMER"
            className="border border-gray-400 p-2 w-full"
            value={primer}
            onChange={(e) => setPrimer(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="SEGON" className="block text-gray-700 font-bold mb-2">
            SEGON:
          </label>
          <input
            type="text"
            id="SEGON"
            className="border border-gray-400 p-2 w-full"
            value={segon}
            onChange={(e) => setSegon(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="NOM" className="block text-gray-700 font-bold mb-2">
            NOM:
          </label>
          <input
            type="text"
            id="NOM"
            className="border border-gray-400 p-2 w-full"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="TELEFONO" className="block text-gray-700 font-bold mb-2">
            TELEFONO:
          </label>
          <input
            type="text"
            id="TELEFONO"
            className="border border-gray-400 p-2 w-full"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="NAIX" className="block text-gray-700 font-bold mb-2">
            NAIX:
          </label>
          <input
            type="text"
            id="NAIX"
            className="border border-gray-400 p-2 w-full"
            value={naix}
            onChange={(e) => setNaix(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="CORREU" className="block text-gray-700 font-bold mb-2">
            CORREU:
          </label>
          <input
            type="text"
            id="CORREU"
            className="border border-gray-400 p-2 w-full"
            value={correu}
            onChange={(e) => setCorreu(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}