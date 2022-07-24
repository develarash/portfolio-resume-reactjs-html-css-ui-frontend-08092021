import "./toggle.css"
import sun from "../../img/sun.png";
import moon from "../../img/moon.png";
const Toggle =() =>{
    return(
        <div className="t">
<img src={sun} alt="" className="t-icon" />
<img src={moon} alt="" className="t-icon"  />
<div className="t-button"></div>
        </div>
    )
}
export default Toggle