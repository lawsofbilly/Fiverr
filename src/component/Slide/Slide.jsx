import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <h1 className="slidetitle">Popular services</h1>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

// import { cards } from "../../data";
// import CatCard from "../CatCard/CatCard";

// {cards.map((card) => (
//     <CatCard item={card} key={card.id} />
//   ))}
