import Sidebar from "./shared/Sidebar";
import Weather from "./components/Weather";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");

  return (
    <>
      <main className="flex h-screen">
        <Sidebar location={location} setLocation={setLocation} />
        <section className="w-full bg-white">
          <Weather />
        </section>
      </main>
    </>
  );
}

export default App;
