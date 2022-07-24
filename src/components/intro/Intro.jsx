import "./intro.css";
import me from "../../img/handsome.png"
const Intro =()=>{
    return(
        <div className="i">
<div className="i-left">
    <div className="i-left-wrapper">
        <h2 className="i-intro">Hello , My name is </h2>
        <h2 className="i-name"> Arash rahimi</h2>
        <div className="i-title">
            <div className="i-title-wrapper">
            <div className="i-title-item">web developer</div>
            <div className="i-title-item olo">UI/UX Designer </div>
            <div className="i-title-item">photographer</div>
            <div className="i-title-item">writer</div>
            <div className="i-title-item">content creater</div>   
          </div>
    </div>
    <p className="i-desc">
        i design and develop service for customers of all sizes 
        spacializing in creating stylish , modern websites , web server onilne stores
    </p>
    </div>
    <svg 
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    stroke="black"
    className="i-scroll"
    xmlns="http://www.w3.org/2000/svg"
    >
    <g id="Group_p">
        <path
        id='vector_5'
        
        />    </g>
    </svg>
        
        
                
</div>
<div className="i-right">
    <div className="i-bg"> </div>
    <img src={me} alt=""  className="i-img" />
</div>

        </div>
    )

}
export default Intro;