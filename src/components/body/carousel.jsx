import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const image1 = "https://picsum.photos/400/200";
const image2 = "https://picsum.photos/400/201";
const image3 = "https://picsum.photos/400/202";
const items = [
  {
    src:image1,
  },
  {
      src:image2,
  },
  {
    src:image3,
  }
];

const Carousel= () => <UncontrolledCarousel items={items} controls={false}/>;

export default Carousel;