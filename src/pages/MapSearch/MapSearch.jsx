import React from "react"
import LeafletMapContainer from "../../components/mapContainer/MapContainer"
import RoutePlannerInputs from "../../components/routePlanner/RoutePlanner"
import { MapContextProvider } from "../../contextProvider/mapContextProvider/MapContextProvider"

const MapSearch = () => {
    return (
        <MapContextProvider>
            <div className="map-root-wrapper">
            <RoutePlannerInputs />
            <LeafletMapContainer />
            </div>
            
        </MapContextProvider>

    )
}

export default MapSearch