import Sidebar from "./shared/Sidebar";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <main className="flex h-screen">
        <Sidebar />
        <section className="w-full bg-white">
          <Weather />
        </section>
      </main>
    </>
  );
}

export default App;
