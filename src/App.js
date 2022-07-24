import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
// import Toggle from "./components/toggle/Toggle";
const App=()=>{

  return <div >
    {/* <Toggle></Toggle> */}
<Intro></Intro>
<About></About>
<ProductList></ProductList>
<Contact></Contact>

  </div>

}
export default App;
