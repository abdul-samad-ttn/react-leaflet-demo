import React, { useCallback, useContext, useState } from "react"
import "./RoutePlanner.css"
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import MapService from "../../services/mapService/MapService";
import ReactSelectDropdown from "../shared/reactSelectDropdown/ReactSelectDropdown";
import useOptimalReq from "../../assets/utils/debouncedRequest";
import { toast } from "../../assets/utils/common";
import { TOASTER_TYPES } from "../../assets/constants/common";
import MapCustomContext from "../../contextProvider/mapContextProvider/MapCustomContext";

const RoutePlannerInputs = () => {
    const {setMapNavigation} = useContext(MapCustomContext)
    const getDebouncedData = useOptimalReq(1000, 1)
    const [startLocation, setStartLocation] = useState("")
    const [startLocationOptions, setStartLocationOptions] = useState([])

    const [endLocation, setEndLocation] = useState("")
    const [endLocationOptions, setEndLocationOptions] = useState([])

    const getGeoDataBySearchText = async searchText => {
        return await MapService.fetchLocationFromSearchText(searchText)
    }

    const onChangeStartLocation = useCallback((selectedRow) => {
        setStartLocation(selectedRow)
    }, [])

    const getStartLocationData = useCallback(async (text) => {
        const result = await getGeoDataBySearchText(text)
        if (!result?.length) {
            return
        }
        const list = []
        result.forEach((item) => {
            list.push({
                ...item,
                value: `${item.x}_${item.y}`
            })
        })
        setStartLocationOptions(list);
    }, [])

    const onStartLocationInputTextChange = useCallback((text) => {
        if (!text?.length) {
            return
        }
        getDebouncedData(() => {
            getStartLocationData(text)
        })
        return text
    }, [])

    const onChangeEndLocation = useCallback((selectedRow) => {
        setEndLocation(selectedRow)
    }, [])

    const getEndLocationData = useCallback(async (text) => {
        const result = await getGeoDataBySearchText(text)
        if (!result?.length) {
            return
        }
        const list = []
        result.forEach((item) => {
            list.push({
                ...item,
                value: `${item.x}_${item.y}`
            })
        })
        setEndLocationOptions(list);
    }, [])

    const onEndLocationInputTextChange = useCallback((text) => {
        if (!text?.length) {
            return
        }
        getDebouncedData(() => {
            getEndLocationData(text)
        })
        return text
    }, [])

    const onPlanRouteCTA = useCallback(() => {
        if (!startLocation) {
            toast(TOASTER_TYPES.ERROR, "Please select start location.")
            return
        }
        if (!endLocation) {
            toast(TOASTER_TYPES.ERROR, "Please select end location.")
            return
        }
        const mapNavigationPayload = {
            startLocation: {lat: startLocation.y, lang: startLocation.x},
            endLocation: {lat: endLocation.y, lang: endLocation.x}
        }
        setMapNavigation(null)
        setTimeout(() => {
            setMapNavigation(mapNavigationPayload)    
        }, 0);
        
        // plan route with start and end locations
    }, [startLocation, endLocation, setMapNavigation])

    return (
        <div>


            <div className="search-wrapper">

                <InputGroup className="input-group-wrapper">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        From Location
                    </InputGroup.Text>
                    <ReactSelectDropdown
                        name="startLocation"
                        options={startLocationOptions}
                        value={startLocation}
                        onInputChange={onStartLocationInputTextChange}
                        onChange={onChangeStartLocation}
                        className={{ root: "react-select-root" }}
                    />
                </InputGroup>

                <InputGroup className="input-group-wrapper">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Destination Location
                    </InputGroup.Text>
                    <ReactSelectDropdown
                        name="endLocation"
                        options={endLocationOptions}
                        value={endLocation}
                        onInputChange={onEndLocationInputTextChange}
                        onChange={onChangeEndLocation}
                        className={{ root: "react-select-root" }}
                    />
                </InputGroup>
                <Button variant="primary" onClick={onPlanRouteCTA}>Plan Route</Button>
            </div>
            <div className="submit-wrapper">
               
            </div>
        </div>
    )

}

export default RoutePlannerInputs