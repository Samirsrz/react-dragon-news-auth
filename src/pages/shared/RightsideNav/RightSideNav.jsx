import {FaFacebook, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'



const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl"> Login With </h2>
           <button className="btn btn-outline w-full"><FaGoogle></FaGoogle> Login with Google </button>
           <button className="btn btn-outline w-full"><FaGithub></FaGithub> Login with Github </button>

            </div>


            <div className='p-4 '>
                <h2 className="text-3xl"> Find us On </h2>
           
             <a className='p-4 flex items-center justify-center border-2 rounded-t-lg' href="">
 
              <FaFacebook className='mr-4'></FaFacebook>
              FaceBook
               </a>
             <a className='p-4 flex items-center justify-center border-2 ' href="">
 
              <FaTwitter className='mr-4'></FaTwitter>
              Twitter
               </a>
             <a className='p-4 flex items-center justify-center border-2 rounded-b-lg' href="">
 
              <FaInstagram className='mr-4'></FaInstagram>
              Instagram
               </a>
            </div>

            <div className='p-4 space-y-3 mb-6 '>
                <h2 className="text-3xl"> Q-Zone </h2>

                  <img src={qZone1} alt="" />
                  <img src={qZone2} alt="" />
                  <img src={qZone3} alt="" />
           
            </div>





        </div>
    );
};

export default RightSideNav;