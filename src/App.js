import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavBar from './components/NavBar/NavBar';
import ProductList from "./components/ProductList/ProductList";




function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <ProductList />
    </Provider>
  );
}

export default App;


