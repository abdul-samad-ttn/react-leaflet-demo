import './App.css';
import CustomToastContainer from './components/shared/toastContainer/ToastContainer';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div >
      <Navigation />
      <CustomToastContainer/>
    </div>
  );
}

export default App;
