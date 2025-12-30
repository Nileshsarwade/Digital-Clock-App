import { useState } from "react";
import "./App.css";
import Heading from "./assets/Components/heading";
import Paragraph from "./assets/Components/Paragraph";
import CurrentTime from "./assets/Components/CurrentTime";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <div>
        <Heading />
        <Paragraph />
        <CurrentTime></CurrentTime>
      </div>
    </center>
  );
}
export default App;
