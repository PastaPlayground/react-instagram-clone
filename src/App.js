import "./App.css";
import Header from "./components/Header/Header";
import Stories from "./components/Stories/Stories";
import Feed from "./components/Feed/Feed";
import Message from "./components/Message/Message";

function App() {
  return (
    <div className="App">
      <Header />

      <Stories />

      <Feed />
      </div>
  );
}

export default App;
