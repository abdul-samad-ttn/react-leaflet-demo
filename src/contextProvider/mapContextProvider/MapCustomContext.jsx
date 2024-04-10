import { createContext } from "react"
import { InitialMapState } from "./actionTypes"

const  MapCustomContext = createContext(InitialMapState)
export default MapCustomContext