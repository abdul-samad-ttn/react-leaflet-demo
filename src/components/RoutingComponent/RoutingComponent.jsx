import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import PropTypes from 'prop-types';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = (props) => {
    const {mapNavigation} = props
    const {startLocation, endLocation} = mapNavigation
    if(!startLocation) {
        return null
    }
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(startLocation?.lat, startLocation?.lang),
      L.latLng(endLocation?.lat, endLocation?.lang)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;

RoutingMachine.propTypes= {
    mapNavigation: PropTypes.shape({
        startPoints: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lang: PropTypes.number.isRequired
        }),
        endPoints: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lang: PropTypes.number.isRequired
        })
    })
}
