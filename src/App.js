import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <section className="app__body">
        <Sidebar />
        <Chat />
      </section>
    </div>
  );
}

export default App;
