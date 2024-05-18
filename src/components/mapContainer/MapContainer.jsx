import L from "leaflet";
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useCallback, useContext } from 'react';
import MapCustomContext from '../../contextProvider/mapContextProvider/MapCustomContext';
import RoutingMachine from '../RoutingComponent/RoutingComponent';
import "./MapContainer.css"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import MapTilesDropdownContainer from "../shared/mapTilesContainer/MapTilesContainer";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMapContainer = () => {
    const {mapNavigation, mapCenter, setMapRef} = useContext(MapCustomContext)
    const mapReady = useCallback((mapRef)=>{
        setMapRef(mapRef);
    },[setMapRef])
    return (
        <div className="leaflet-map-container">
            <MapTilesDropdownContainer />
            <MapContainer center={mapCenter} zoom={8} scrollWheelZoom={false} whenReady={mapReady}>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapNavigation?.startLocation && <RoutingMachine mapNavigation={mapNavigation}/>}
            </MapContainer>
        </div>
    )
}

export default LeafletMapContainer