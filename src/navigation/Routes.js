import * as React from "react";
import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import MapSearch from "../pages/MapSearch/MapSearch";
import SelectDropdownPortalContainer from "../components/shared/reactSelectDropdown/dropdownPortal/DropdownPortal";


const RootComponent = () => {
    return (
        <div >
            <MapSearch />
            <SelectDropdownPortalContainer />
        </div>
    )
}

const RouterList = createBrowserRouter([
    {
        path: "/home",
        element: <RootComponent />,
    },
    {
        path: "*",
        element: <Navigate to="/home" replace/>
    },
]);

export default RouterList;