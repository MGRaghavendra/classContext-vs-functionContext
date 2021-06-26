import "./App.css";
import "./Counter.css";
import FunctionCounter from "./non-context/function-app/FunctionCounter.jsx";
import ClassCounter from "./non-context/class-app/ClassCounter.jsx";
import FunctionContextCounter from "./withContext/functionContext/FunctionContextCounter.jsx";
import ClassContextCounter from "./withContext/classContext/ClassContextCounter";
function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1 className="Container--title">With Out Context</h1>
        <div className="Container--components">
          <FunctionCounter />
          <ClassCounter />
        </div>
      </div>
      <div className="Container">
        <h1 className="Container--title">With Context</h1>
        <div className="Container--components">
          <FunctionContextCounter />
          <ClassContextCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
