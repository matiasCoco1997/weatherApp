export default function Sidebar({ location, setLocation }) {
  const searchWeather = (e) => {
    e.preventDefault();
    console.log(location);
  };

  return (
    <nav className="bg-amber-500 text-white p-4 h-full md:min-w-[300px] flex flex-col justify-between">
      <h1 className="text-2xl text-center pb-8">Weather App</h1>

      <form className="flex-1 flex flex-col gap-4">
        <label htmlFor="location" className="font-semibold text-lg">
          Ingrese una locación
        </label>
        <input
          id="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Ingrese una locación"
          className="bg-white rounded w-full p-2 text-black focus:outline-none"
        />

        <button
          onClick={searchWeather}
          type="submit"
          className="bg-[#7D2D87] text-white p-2 rounded font-semibold transition duration-400 hover:bg-[#5E1F6D] cursor-pointer"
        >
          Buscar
        </button>
      </form>

      <div className="flex flex-col gap-3">
        <a
          href="https://www.figma.com/design/tAipfyfEFnpVb7bOO5etNf/Curriculum-Vitae?node-id=0-1&p=f"
          target="_blank"
          className="text-black bg-white p-2 rounded font-semibold transition duration-400 hover:text-white hover:bg-black"
        >
          Perfil Github
        </a>
        <a
          href="https://github.com/matiasCoco1997"
          target="_blank"
          className="text-[#7D2D87] bg-white p-2 rounded font-semibold transition duration-400 hover:text-white hover:bg-[#7D2D87]"
        >
          Curriculum Vitae
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
