import "./App.css";
import SearchAutocomplete from "./Components/SearchAutocomplete";

function App() {
  return (
    <div className="App">
      <SearchAutocomplete
        url="https://dummyjson.com/recipes/search?q="
        delimiter="="
      />
    </div>
  );
}

export default App;
