import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add Ner Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/308399662/original/65f6406f6f2646b30eeec32da6903f17a4111429.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>79</td>
            <td>123</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/video/upload/so_4.464871,t_gig_cards_web/mzlm1m8dm1u1xissxpwb.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>79</td>
            <td>123</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/21976442/original/d13dc247480cc36050a6e7abf229010d42c4fa16.jpg"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>79</td>
            <td>123</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/284434535/original/496a878174434be338b18cf68f0a6cf6fcd74ff4.jpg"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>79</td>
            <td>123</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/video/upload/so_7.02987,t_gig_cards_web/yzq4amqdkq33ssrzynnd.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>79</td>
            <td>123</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/296272891/original/cdcef8a97d7dd47415447d0f9bb01218a79b7038.jpg"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>79</td>
            <td>123</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
