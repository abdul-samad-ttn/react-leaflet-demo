import { toast as toastifyComp } from "react-toastify"
import { TOASTER_TYPES } from "../constants/common"

export const toast = (
    type = TOASTER_TYPES.SUCCESS,
    message = "",
    options = {}
) => {
    const config = {
        hideProgressBar: true,
        position: "bottom-right",
        theme: "colored",
        pauseOnHover: false,
        autoClose: 2000,
        closeOnClick: true,
        draggable: false,
        closeButton: false,
        ...options
    }
    switch (type) {
        case TOASTER_TYPES.SUCCESS:
            toastifyComp.success(message, config)
            break
        case TOASTER_TYPES.ERROR:
            toastifyComp.error(message, config)
            break
        case TOASTER_TYPES.INFO:
            toastifyComp.info(message, config)
            break
        case TOASTER_TYPES.WARNING:
            toastifyComp.warn(message, config)
            break
        default:
            toastifyComp(message, config)
    }
}