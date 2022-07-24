import "./about.css"
import photografer from "../../img/pm.jpg"
import Award from "../../img/award.png"

const About=()=>{
    return(
        <div className="a">
<div className="a-left">
    <div className="a-card bg">s</div>
    <div className="a-card">
        <img className="a-img" src={photografer} alt="" />
    </div>

</div>
<div className="a-right">
    <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
            It is a long established fact that a reader will be
        </p>
        <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga ipsa ipsam possimus? Praesentium laudantium nemo, itaque consequatur distinctio suscipit, sapiente quos autem eveniet amet aut! Repellat sint tempore aliquid. 
        </p>
        <div className="a-award">
            <img className="a-award-img" src={Award} alt="" />
            <div className="a-award-texts">
                <h4 className="a-award-title">this is title</h4>
                <p className="a-award-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic voluptatem neque iusto. Non ratione qui veniam officia accusamus.
                </p>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}
export default About;