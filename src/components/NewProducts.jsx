import { Grid, GridItem } from "@chakra-ui/react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
const NewProducts = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold underline ">
          New Products
        </h1>
      </div>

      <div className="mt-10 p-10">
        <ScrollAnimation animateIn="fadeIn">
      <Grid
        h="400px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" className="rounded-lg">
          <img
            src="https://img.freepik.com/free-photo/display-shiny-elegant-gold-chain_23-2149635331.jpg?t=st=1719296715~exp=1719300315~hmac=4e00a84455a6cdf414518a6212aca0beafb261f1c3e72e87c92fe58728aca339&w=360"
            alt="" className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" className="rounded-xl" >
          <img
            src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8MHwwfHx8MA%3D%3D"
            alt="" className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" className="rounded-xl">
          <img
            src="https://img.freepik.com/free-photo/set-isolated-white-t-shirts_125540-1098.jpg?t=st=1719296600~exp=1719300200~hmac=8937d4a58a25bc92ca072740e4cfc6f06b64aad1d2a67b1a894aaba5fa457a20&w=900"
            alt="" className="rounded-xl" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </GridItem>
        <GridItem colSpan={2} bg="tomato" className="rounded-xl">
          <img
            src="https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828575.jpg?t=st=1719296781~exp=1719300381~hmac=a7e5216442d465e67956832793a8b4b031e01409a5d76cfbbfc0ffae44724113&w=900"
            alt="" className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </GridItem>

        <GridItem colSpan={2} bg="tomato" className="rounded-xl">
          <img
            src="https://img.freepik.com/free-photo/high-heels-black-velvet_53876-102771.jpg?t=st=1719296993~exp=1719300593~hmac=746d473075da82912c49e3b0fe44e8d75e0e689621f2e442ef3da77016498215&w=740"
            alt="" className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </GridItem>
      </Grid>
      </ScrollAnimation>
    </div>
    </>
  );
};
export default NewProducts;
