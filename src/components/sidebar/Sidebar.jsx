import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      // console.log("res sidebar", res);
      setCats(res.data);
    };
    getCats();
  }, []);
  // console.log("username:", user);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={
            user
              ? `${PF + user.profilePic}`
              : "https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          }
          alt=""
        />

        <p>
          You are reading my posts. They are the person who wants to work and
          wants to do a great job, the
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
