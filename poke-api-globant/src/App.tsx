import "./App.css";
import Prompt from "./components/Prompt.tsx";
import PreviousPrompt from "./components/PreviousPrompt.tsx";
import DiscreteSlider from "./components/DiscreteSlider.tsx";
import List from "./components/List.tsx";

export default function App() {
  const types = [
    { value: "normal", label: "Normal" },
    { value: "fire", label: "Fire" },
    { value: "fighting", label: "Fighting" },
    { value: "flying", label: "Flying" },
    { value: "grass", label: "Grass" },
    { value: "poison", label: "Poison" },
    { value: "electric", label: "Electric" },
    { value: "ground", label: "Ground" },
    { value: "psychic", label: "Psychic" },
    { value: "rock", label: "Rock" },
    { value: "ice", label: "Ice" },
    { value: "bug", label: "Bug" },
    { value: "dragon", label: "Dragon" },
    { value: "ghost", label: "Ghost" },
    { value: "dark", label: "Dark" },
    { value: "steel", label: "Steel" },
    { value: "fairy", label: "Fairy" },
  ];

  const shapes = [
    { value: "square", label: "Square" },
    { value: "triangle", label: "Triangle" },
    { value: "circle", label: "Circle" },
    { value: "donut", label: "Donut" },
    { value: "heart", label: "Heart" },
    { value: "kite", label: "Kite" },
    { value: "crescent", label: "Crescent" },
  ];

  return (
    <>
      {PreviousPrompt()}
      <div className="prompt">{Prompt()}</div>
      <div className="type-list">Type {List(types)}</div>
      <div className="shape-list">Shape {List(shapes)}</div>
      <div className="image-amount">Number of images {DiscreteSlider()}</div>
    </>
  );
}
