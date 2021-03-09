import "@reach/slider/styles.css"

import ReactDOM from "react-dom"
import Konva from "konva"

import { SCALE_FACTOR } from "./helpers/const"

import App from "./core/App"

Konva.pixelRatio = SCALE_FACTOR
ReactDOM.render(<App />, document.getElementById("root"))
