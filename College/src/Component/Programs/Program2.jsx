import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import "./Programs2.css";
const Programs = () => {
  return (
    <div className="programs ">
      {/* <div className="program-images"> */}
      <div className="programImages">
        <img src={program_1} alt="" />

        {/* Adding program captions to be displayed due to hover */}
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Graduation Degree</p>
          </div>
      </div>
      <div className="programImages">
        {" "}
        <img src={program_2} alt="" />
        {/* Adding program captions to be displayed due to hover */}
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Masters Degree</p>
          </div>
      </div>
      <div className="programImages">
        {" "}
        <img src={program_3} alt="" />
        {/* Adding program captions to be displayed due to hover */}
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Post Graduation</p>
          </div>
      </div>
    </div>
  );
};

export default Programs;
