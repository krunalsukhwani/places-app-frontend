import React from "react";
import { useParams } from "react-router-dom";

import "./UserPlaces.css";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "CN Tower",
    description: "One of the best tourist place in toronto",
    address: "290 Bremner Blvd, Toronto, ON M5V 3L9",
    imageUrl: "https://i.imgur.com/CzXTtJV.jpg",
    location: {
      lat: 43.6425662,
      lng: -79.3896317,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Centennial Progress Campus",
    description: "One of the best College in GTA",
    address: "941 Progress Ave, Scarborough, ON M1G 3T8",
    imageUrl:
      "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
    location: {
      lat: 43.7849374,
      lng: -79.2312344,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
