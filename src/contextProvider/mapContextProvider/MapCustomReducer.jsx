import { InitialMapState, SET_SELECTED_START_LOCATION, SET_SELECTED_END_LOCATION, SET_MAP_ROUTE_NAVIGATION_POINTS, SET_MAP_REF } from "./actionTypes";


export const MapCustomReducer = (state = InitialMapState, action) => {
    switch(action.type) {
        case SET_SELECTED_START_LOCATION: return {
            ...state,
            selectedStartLocation: action.payload
        } 
        case SET_SELECTED_END_LOCATION: return {
            ...state,
            selectedEndLocation: action.payload
        }
        case SET_MAP_ROUTE_NAVIGATION_POINTS: return {
            ...state,
            mapNavigation: action.payload
        }
        case SET_MAP_REF: return {
            ...state,
            mapRef: action.payload
        }
        default: return state
    }
}