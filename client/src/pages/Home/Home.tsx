import { map } from "lodash";
import React from "react";
import CardHomeStay from "../../components/CardHomeStay/CardHomeStay";

const data = [
  {
    id: 1,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
  {
    id: 2,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
  {
    id: 3,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
  {
    id: 4,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
  {
    id: 5,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
  {
    id: 6,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
  {
    id: 7,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
  {
    id: 8,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
  {
    id: 9,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
  {
    id: 10,
    location: "Nha Trang, Vietnam",
    desc: "Ocean and sea views",
    date: "Jan 6 - 11",
    price: 1168933,
    star: 4.5,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    ],
    miniImage:
      "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  },
];
const Home: React.FC = () => {
  return (
    <div className="px-12 pt-[180px] max-sm:pt-[118px] max-md:pt-[90px]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {map(data, (item) => (
          <CardHomeStay item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
