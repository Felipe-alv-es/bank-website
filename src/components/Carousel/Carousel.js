import Carousel from "react-material-ui-carousel";
import Item from "./Items";
import homeSlider from "../../assets/utils/homeSlider.json";

function StyledCarousel(props) {
  return (
    <Carousel
      animation="slide"
      duration={700}
      interval={112000}
      indicatorContainerProps={{
        style: {
          marginTop: "-5%",
          position: "absolute",
          zIndex: "1",
          left: "-40%", // Todo: Fix page indicator position, broke in some screen sizes
        },
      }}
    >
      {homeSlider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default StyledCarousel;
