import Image from "next/image"

const page = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 mr-5">
      {/* image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/img.png" alt="" fill className="object-contain " />
      </div>

      {/* text container  */}
      <div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col items-center justify-center gap-6 md:gap-8">
        <h1 className="font-bold text-[18px] md:text-[25px] lg:text-[30px]">Crafting Excellence: The Portfolio of Suresh Shrestha</h1>
        <p className="text-[15px] md:text-[20px] lg:text-[25px]">
          👋 Welcome to my portfolio!
          I'm thrilled to have you here. This space is where I showcase my journey and
          expertise in frontend development. Whether you're a fellow developer, a potential
          collaborator, or just curious about what I do, I'm excited to share my passion with you.
        </p>
        <div className="w-full flex gap-4">
          <button className="p-2 md:p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work </button>
          <button className="p-2 md:p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>


    </div>
  )
}

export default page
