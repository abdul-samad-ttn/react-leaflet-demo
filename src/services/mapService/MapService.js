import { leafletGeoSearchProvider } from "../../assets/utils/leafletGeoSearch"

const MapService = {
    fetchLocationFromSearchText(searchText) {
        return leafletGeoSearchProvider.search({query: searchText})
    }
}

export default MapService