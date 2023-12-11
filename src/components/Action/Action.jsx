import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
    Backdrop,
  Box,
  Button,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";

import maskmanImg from "../../assets/covid-mask-man.jpg";
import maskImg from "../../assets/maskMan.jpg";
import maskmanIconImg from "../../assets/icons/mask.png";
import washing from "../../assets/icons/washing.png";
import home from "../../assets/icons/house.png";

const carousel = [
  {
    title: "Wear Mask",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
    icon: maskmanIconImg,
  },
  {
    title: "Wash Your Hands",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
    icon: washing,
  },
  {
    title: "Stay at Home",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
    icon: home,
  },
];

const Action = () => {
  const splideOptions = {
    perPage: 3,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "3.5rem",
    pagination: false,
    padding: "3rem",
    autoplay: true,
    pauseOnHover: true,
    arrow: false,
    height: "auto",
    autoScroll: {
      speed: 2,
    },
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            flexDirection: {
              xs: "row",
              md: "column",
            },
            textAlign: "center",
          }}
        >
          <Box sx={{ my: 5 }}>
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                fontWeight: "900",
                fontSize: {
                  xs: "1.2rem",
                  md: "2.5rem",
                },
              }}
            >
              How to protect yourself
            </Typography>
            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: {
                  xs: "0.8rem",
                  md: "0.8rem",
                },
                width: "80%"
              }}
            >
              when looking at its layout. The point of using Loren Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed
              to using
            </Typography>
          </Box>
          <Box
            sx={{
              height: { md: "60vh", xs: "45vh" },
              width: "80%",
              borderRadius: "100px",
              backgroundColor: "rgba(0,0,0,0.2)",
              background: `url(${maskImg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backdropFilter: "blur(20em)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: { xs: 5, md: 0 },
              WebkitBackdropFilter:"blur(20px)"
            }}
          >
            <Box
              container
              sx={{
                height: "80%",
                width: "80%",
                my: 5,
              }}
            >
              <Splide options={splideOptions} AutoScroll>
                {carousel.map((item, key) => {
                  return (
                    <SplideSlide
                      key={key}
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                          <Box
                            sx={{
                              height: "100px",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <img src={item.icon} height="70" />
                          </Box>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{
                                fontSize: { md: "1.2rem", xs: "0.5rem" },
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontSize: { md: "0.8rem", xs: "0.25rem" },
                              }}
                            >
                              {item.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>                        
                      </Card>
                      <Button
                        variant="contained"
                        size="medium"
                        sx={{
                          padding: { md: "10px 35px", xs: "5px 15px" },
                          display: "flex",
                          fontSize: { md: ".9rem", xs: "0.3rem" },
                          fontWeight: { md: "300", xs: "200" },
                          width: { md: "200px", xs: "30px" },
                          backgroundColor: "#00132b",
                          my: 3,
                        }}
                      >
                        READ MORE
                      </Button>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </Box>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Action;
