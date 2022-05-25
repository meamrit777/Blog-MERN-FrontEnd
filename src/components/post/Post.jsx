import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          A lot of pain is a lot
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        The pain itself is a lot of pain The architect avoids taking on the
        responsibilities? He shuns great exertion, he scorns him, he condemns
        the flattery of those who are present, whom by reason of his eagerness,
        and, by some, he rejects laborious practice with hatred?
      </p>
    </div>
  );
}
