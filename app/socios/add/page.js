'use client'
import Image from 'next/image'
import castell from "../escudoFila.png"

const page = () => {
  return (
    <div class="h-screen flex items-center justify-center">
  <form action="" class="w-full md:w-1/3 bg-white rounded-lg items-center">
    <div class="flex font-bold justify-center mt-6">
      <Image src={castell} alt="" class="h-24 w-24" />
    </div>
    <h2 class="text-3xl text-center text-gray-700 mb-4">
      Añadir Socio
    </h2>
    <div class="px-12 pb-10">
  <div class="w-full mb-2">
    <div class="flex justify-center">
      <input
        type="text"
        placeholder="Username"
        class="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
      />
    </div>
  </div>
  <div class="w-full mb-2">
    <div class="flex justify-center">
      <input
        type="password"
        placeholder="Password"
        class="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
      />
    </div>
  </div>
</div>
  </form>
</div>
  )
}

export default page