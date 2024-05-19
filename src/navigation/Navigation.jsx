import * as React from "react";
import {
    RouterProvider
} from "react-router-dom";
import RouterList from "./Routes";

const Navigation = () => {
    return (
        <RouterProvider router={RouterList} />
    );
}
export default Navigation;