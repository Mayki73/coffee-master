import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface IProps {
  reviews: {
    id: number;
    name: string;
    text: string;
  }[];
}

const ReviewCarousel: React.FC<IProps> = ({ reviews }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[0].text}</p>
      <p className="font-bold">{reviews[0].name}</p>
    </div>,
    <div className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[1].text}</p>
      <p className="font-bold">{reviews[2].name}</p>
    </div>,
    <div className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[3].text}</p>
      <p className="font-bold">{reviews[3].name}</p>
    </div>,
    <div className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[4].text}</p>
      <p className="font-bold">{reviews[4].name}</p>
    </div>,
    <div className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[5].text}</p>
      <p className="font-bold">{reviews[5].name}</p>
    </div>,
    <div className="p-5 bg-gray-200 space-y-5 mr-10 " data-value="1">
      <p className="leading-relaxed">{reviews[6].text}</p>
      <p className="font-bold">{reviews[6].name}</p>
    </div>,
  ];
  // const settings = {
  //   arrows: false,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   responsive: [
  //     {
  //       breakpoint: 1980,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //         arrows: false,
  //         centerMode: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //         arrows: false,
  //         centerMode: true,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //         arrows: false,
  //         centerMode: true,
  //       },
  //     },
  //   ],
  // };

  // const SlideContainer = styled(Slider)`
  //   .slick-slide {
  //     margin: auto 20px; /* Adjust the value to set the desired gap */
  //     height: 120px;
  //   }
  //   @media (max-width: 600px) {
  //       .slick-slide {
  //           margin: 0 3px; /* Adjust the value to set the desired gap */
  //           height: 180px;
  //       }
  //   }
  // `;

  // return (
  //   <SlideContainer {...settings}>
  //     {reviews.map((review) => (
  //       <div key={review.id} className="p-5 bg-gray-200 space-y-5">
  //         <p>{review.text}</p>
  //         <p className="font-bold">{review.name}</p>
  //       </div>
  //     ))}
  //   </SlideContainer>
  // );
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy=""
    />
  );
};

export default ReviewCarousel;
