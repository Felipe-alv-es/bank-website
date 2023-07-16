import Carousel from "react-material-ui-carousel";

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
          left: "-40%", // Todo: Fix page indicator position, break in some screen sizes
        },
      }}
      {...props}
    >
      {props.children}
    </Carousel>
  );
}

export default StyledCarousel;
