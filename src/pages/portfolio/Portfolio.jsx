/* eslint-disable no-unused-vars */
import './portfolio.scss'
import {motion}  from 'framer-motion'
import { BiArrowBack } from "react-icons/bi";
import { useParams, Link ,useHistory} from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
const arr = [1, 2, 3, 4, 5, 6];
const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const history = useHistory()
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const {data} = await axios.get('https://devkuipid.onrender.com/project/')
        if (data) {
          console.log(data)
          setProjects(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
fetchProjects()
  }, [])
  return (


    <div className="portfolio">
        <Link onClick={() => history.goBack()} className="back" >
            <BiArrowBack className="backArrow" />
          </Link>
<h1>All Projects</h1>
      <div className="linksContainer">
      {projects.map((item) => (
          <Link key={item}  to={`/work/${item?._id}`} >
        <motion.div 
        whileHover={{padding:'.3rem' , backgroundColor:'gray' }}
        transition={{duration:.5,}}
        className="item" >
          <img
           src={item.projectImage}
            alt=""
          />
          <div className="text">
            <p>
            {item.projectDescription.slice(0,70)}....
            </p>

          </div>
        </motion.div>
        </Link>
      ))}
      </div>
     
    </div>

  );
};

export default Portfolio;
