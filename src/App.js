import './App.css';
import SelectDropdownPortalContainer from './components/shared/reactSelectDropdown/dropdownPortal/DropdownPortal';
import CustomToastContainer from './components/shared/toastContainer/ToastContainer';
import Navigation from './navigation/Navigation';
import MapSearch from './pages/MapSearch/MapSearch';

function App() {
  return (
    <div >
      {/* <MapSearch />
      <SelectDropdownPortalContainer /> */}
      <Navigation />
      <CustomToastContainer/>
    </div>
  );
}

export default App;
