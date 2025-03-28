import Sidebar from "./shared/Sidebar";

function App() {
  return (
    <>
      <main className="flex h-screen">
        <Sidebar />
        <section className="w-full">
          <h1 className="bg-red-500">Weather App</h1>
        </section>
      </main>
    </>
  );
}

export default App;
