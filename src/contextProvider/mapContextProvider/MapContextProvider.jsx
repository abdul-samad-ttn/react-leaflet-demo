import { useMemo, useReducer, useCallback } from "react"
import MapCustomContext from "./MapCustomContext"
import { MapCustomReducer } from "./MapCustomReducer"
import { InitialMapState, SET_MAP_CENTER, SET_MAP_REF, SET_MAP_ROUTE_NAVIGATION_POINTS } from "./actionTypes"
import { type } from "@testing-library/user-event/dist/type"

export const MapContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(MapCustomReducer, InitialMapState)

    const setMapCenter = useCallback((center)=>{
        dispatch(SET_MAP_CENTER, center)
    },[])

    const setMapNavigation = useCallback((mapNavigation)=>{
        dispatch({type:SET_MAP_ROUTE_NAVIGATION_POINTS, payload: mapNavigation})
    },[state])

    const setMapRef = useCallback((mapRefArg)=>{
        dispatch({type: SET_MAP_REF, payload: mapRefArg})
    },[state])


    const value = useMemo(()=>({
        ...state,
        setMapNavigation,
        setMapCenter,
        setMapRef
    }),[state, setMapCenter, setMapRef])

    return (
        <MapCustomContext.Provider value={value}>
            {children}
        </MapCustomContext.Provider>
    )
}
