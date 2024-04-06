import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LegtSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightsideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Homes = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>?
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">

                <div  className=" text-center">
                    <LeftSideNav></LeftSideNav>
             
                   </div>
           
              <div className="col-span-2 text-center">
                    <h2 className="text-4xl">News coming soon</h2>
                </div>
    
              <div className=" text-center">
                  <RightSideNav></RightSideNav>
              </div>
    
        </div>
            
        </div>
    );
};

export default Homes;