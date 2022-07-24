import Product from "../product/Product"
import "./productList.css"
import {products} from "../../data"
const ProductList =()=>{
return (
    <div className="pl">
<div className="pI-texts">
    <h1 className="pI-title">create and inspire</h1>
    <p className="pI-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus ratione mollitia est, sunt
         expedita cum! Optio minima repellat porro sint quae, ut delectus expedita hic. Rem, libero. Cupiditate, corporis.
    </p>
</div>
<div className="pI-list">
 {products.map(item=>(
      <Product key={item.id} link={item.link} img={item.img}/>

 ))}
</div>
    </div>
)
}
export default ProductList