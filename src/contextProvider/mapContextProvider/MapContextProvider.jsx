import { useMemo, useReducer, useCallback } from "react"
import MapCustomContext from "./MapCustomContext"
import { MapCustomReducer } from "./MapCustomReducer"
import { InitialMapState, SET_MAP_CENTER, SET_MAP_ROUTE_NAVIGATION_POINTS } from "./actionTypes"

export const MapContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(MapCustomReducer, InitialMapState)

    const setMapCenter = useCallback((center)=>{
        dispatch(SET_MAP_CENTER, center)
    },[])

    const setMapNavigation = useCallback((mapNavigation)=>{
        dispatch({type:SET_MAP_ROUTE_NAVIGATION_POINTS, payload: mapNavigation})
    },[state])


    const value = useMemo(()=>({
        ...state,
        setMapNavigation,
        setMapCenter 
    }),[state, setMapCenter])

    return (
        <MapCustomContext.Provider value={value}>
            {children}
        </MapCustomContext.Provider>
    )
}
