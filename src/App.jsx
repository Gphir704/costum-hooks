import "./App.css";
import useDarkMode from "./hooks/useDarkMode";
import useWindowResize from "./hooks/useWindowResize";

function App() {
  const [mode, setMode] = useDarkMode();
  const width = useWindowResize();

  const handleDarkMode = () => {
    setMode(() => !mode);
  };

  return (
    <div>
      {mode && <h1> DARK MODE ON </h1>}

      {width <= 575 && !mode && <h1> DARK MODE OFF </h1>}
      {!mode && <h1> DARK MODE OFF </h1>}

      {width >= 576 && (
        <button
          style={{ fontSize: "50px", background: "lightblue" }}
          onClick={() => handleDarkMode()}
        >
          SWITCH MODE
        </button>
      )}
    </div>
  );
}

export default App;
