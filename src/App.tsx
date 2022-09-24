import "./styles.css";

export default function App() {
  const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  ];

  const decodedValue = ([...colors]: string[]) => {
    const firstTwoColors = colors.slice(0, 2); // ['green', 'brown']
    const colorIndeces = firstTwoColors.map((color) => COLORS.indexOf(color)); // [5, 1]
    const joinedIndeces = colorIndeces.join(""); // '51'
    return +joinedIndeces; // 51
  };

  console.log(decodedValue(["brown", "black", "orange"]));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
