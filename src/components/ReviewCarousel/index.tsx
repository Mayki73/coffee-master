import React from "react";
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
    <div key={0} className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[0].text}</p>
      <p className="font-bold">{reviews[0].name}</p>
    </div>,
    <div key={1} className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[1].text}</p>
      <p className="font-bold">{reviews[2].name}</p>
    </div>,
    <div key={2} className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[3].text}</p>
      <p className="font-bold">{reviews[3].name}</p>
    </div>,
    <div key={3} className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[4].text}</p>
      <p className="font-bold">{reviews[4].name}</p>
    </div>,
    <div key={4} className="p-5 bg-gray-200 space-y-5 mr-10" data-value="1">
      <p className="leading-relaxed">{reviews[5].text}</p>
      <p className="font-bold">{reviews[5].name}</p>
    </div>,
    <div key={5} className="p-5 bg-gray-200 space-y-5 mr-10 " data-value="1">
      <p className="leading-relaxed">{reviews[6].text}</p>
      <p className="font-bold">{reviews[6].name}</p>
    </div>,
  ];

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
