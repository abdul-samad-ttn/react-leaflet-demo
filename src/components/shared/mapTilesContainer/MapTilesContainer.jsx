import React, { useCallback, useContext, useMemo, useState } from "react";
import ReactSelectDropdown from "../reactSelectDropdown/ReactSelectDropdown";
import "./MapTilesContainer.css";
import MapCustomContext from "../../../contextProvider/mapContextProvider/MapCustomContext";
import L from "leaflet";

const MapTilesDropdownContainer = () => {
    const {mapRef} = useContext(MapCustomContext)

    const [selectedTile, setSelectedTile] = useState(null)

    const tilesList = useMemo(() => {
        const list = [
            {
                value: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                label: "Default",
                selected: true
            },
            {
                value: "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
                label: "Cycle",
            },
            {
                value: "https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
                label: "Rail lines"
            },
            {
                value: "https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png",
                label: "Hiking"
            },
            {
                value: "https://tiles.stadiamaps.com/tiles/stamen_terrain_labels/{z}/{x}/{y}{r}.{ext}",
                label: "Terrain labels",
                ext: "png"
            },
            {
                value: "https://tiles.stadiamaps.com/tiles/stamen_terrain_lines/{z}/{x}/{y}{r}.{ext}",
                label: "Terrain lines",
                ext: "png"
            },
            {
                value: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}",
                label: "US Geological Survey",
            },
            {
                value: "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
                label: "National Geographic World Map",
            }
        ]

        return list;
    }, [])

    const onTileSelection = useCallback((selectedRow) => {
        console.log("onTileSelection", selectedRow)
        let uri = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        if (selectedRow?.value) {
            uri = selectedRow.value
        }
        setSelectedTile(selectedRow)
        L.tileLayer(uri, {ext: selectedRow?.ext || ""}).addTo(mapRef.target)
    }, [mapRef])

    return (
        <div className="map-tiles-dropdown-container">
            <ReactSelectDropdown
                name="selectedTile"
                options={tilesList}
                value={selectedTile}
                onChange={onTileSelection}
                className={{ root: "react-select-root" }}
                placeholder={"Select tile"}
            />
        </div>
    )
}

export default MapTilesDropdownContainer;