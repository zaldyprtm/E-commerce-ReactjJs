import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Dots } from "react-preloaders";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import NewProducts from "./NewProducts";
import Animatetext from "./Animatetext";


const Home = ({ deviceType = "desktop" }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=3")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <>
        <div className="flex items-center justify-center">
          <div
            className="flex justify-betwenn items-center gap-10 mt-10 mx-auto mb-10"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?t=st=1719299574~exp=1719303174~hmac=ccce6a5b16f497a04fed6e96fb70292a589fba48033367395ca59de5f9158b0c&w=1060')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
              height: "400px",
            }}
          >
            <div>

              <Animatetext  
              className="text-5xl font-bold text-white"
              />
              <div className="p-8 -mt-10">
                <Button colorScheme="blue" className="" onClick={() => window.location.href = '/store'}>
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto gap-7 p-10 rounded-lg">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={deviceType !== "mobile"}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="gap-6 mt-10"
          >
            <div className="rounded-full">
              <img
                src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHwwfDB8fHww"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8MHwwfHx8MA%3D%3D"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1603252110971-b8a57087be18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8MHwwfHx8MA%3D%3D"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHwwfDB8fHww"
                alt=""
                className="rounded-lg"
              />
            </div>
          </Carousel>
        </div>

        <div>

          <h1 className="text-center text-3xl font-bold underline">
            Our Best Deal
          </h1>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
            {data.map((product) => (
              <Card key={product.id} maxW="sm" m="4">
                <CardBody>
                  <Image
                    src={product.image}
                    alt={product.title}
                    borderRadius="lg"
                    boxSize="150px"
                    objectFit="cover"
                    mx="auto"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{product.title}</Heading>
                    <Text>{product.description}</Text>
               
                  </Stack>
                </CardBody>
                <Divider />
    
              </Card>
            ))}
          </div>
          </ScrollAnimation>
            <NewProducts />
        </div>
      </>
    </>
  );
};

export default Home;
