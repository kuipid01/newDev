/* eslint-disable no-unused-vars */
import './portfolio.scss'
import {motion}  from 'framer-motion'
import { BiArrowBack } from "react-icons/bi";
import {  Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios";
const arr = [1, 2, 3, 4, 5, 6];
const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
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
        <div onClick={handleClick} className="back" >
            <BiArrowBack className="backArrow" />
          </div>
<h1>All Projects</h1>
      <div className="linksContainer">
      {projects.reverse().map((item) => (
  <Link key={item._id} to={`/work/${item._id}`}>
    <motion.div 
      whileHover={{ padding: '.3rem', backgroundColor: 'gray' }}
      transition={{ duration: .5 }}
      className="item"
    >
      <img
        src={item.projectImage}
        alt={item.projectDescription} // Use descriptive alt text
      />
      <div className="text">
        <p>
          {item.projectDescription.length > 70 
            ? `${item.projectDescription.slice(0, 70)}...` 
            : item.projectDescription}
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
