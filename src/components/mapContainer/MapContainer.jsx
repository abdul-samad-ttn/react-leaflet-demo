import L from "leaflet";
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useContext } from 'react';
import MapCustomContext from '../../contextProvider/mapContextProvider/MapCustomContext';
import RoutingMachine from '../RoutingComponent/RoutingComponent';
import "./MapContainer.css"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMapContainer = () => {
    const {mapNavigation, mapCenter} = useContext(MapCustomContext)
    return (
        <div className="leaflet-map-container">
            <MapContainer center={mapCenter} zoom={15} scrollWheelZoom={false}>
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