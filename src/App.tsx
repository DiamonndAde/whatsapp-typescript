import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__body">
        {/* SideBar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
      </div>
    </div>
  );
};

export default App;
