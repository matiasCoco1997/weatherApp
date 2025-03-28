export default function Sidebar() {
  return (
    <nav className="bg-amber-500 text-white p-4 h-full md:min-w-[300px] flex flex-col justify-between">
      <h1 className="text-2xl text-center pb-8">Weather App</h1>
      <ul className="flex-1">
        <li className="py-2">opciones</li>
        <li className="py-2">opciones</li>
        <li className="py-2">opciones</li>
      </ul>
      <div className="flex flex-col gap-3">
        <a
          href="https://github.com/matiasCoco1997"
          target="_blank"
          className="text-[#7D2D87] bg-white p-2 rounded font-semibold transition duration-400 hover:text-white hover:bg-[#7D2D87]"
        >
          Perfil Github
        </a>
        <a
          href="https://www.linkedin.com/in/matias-coco-812a41230/"
          target="_blank"
          className="text-[#2365AF] bg-white p-2 rounded font-semibold transition duration-400 hover:text-white hover:bg-[#2365AF]"
        >
          Perfil LinkedIn
        </a>
        <p className="text-center font-semibold">
          Inicio de proyecto - 28/03/2025
        </p>
      </div>
    </nav>
  );
}
