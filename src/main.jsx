import { createRoot } from "react-dom/client";
import "./index.css";
import ColorPicker from "./assets/Colorpicker.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ColorPicker/>
)