import './App.css';
import SelectDropdownPortalContainer from './components/shared/reactSelectDropdown/dropdownPortal/DropdownPortal';
import CustomToastContainer from './components/shared/toastContainer/ToastContainer';
import MapSearch from './pages/MapSearch/MapSearch';

function App() {
  return (
    <div >
      <MapSearch />
      <SelectDropdownPortalContainer />
      <CustomToastContainer/>
    </div>
  );
}

export default App;
