import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CardActionArea,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
  IconButton,
} from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import banner from "../../assets/newsletter-banner.jpg";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const cards = [
  {
    title: "DR. GOLAP DEN",
    description:
      "it is a long established fact that a reader will be distracted by the readdable content of a page when looking at its layout. The point of using Lorem Ipsum is that has a more-or-less normal distribution of letters as a opposed to using 'Content here, content here,' making it look",
    image:
      "https://images.pexels.com/photos/9869646/pexels-photo-9869646.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "DR. GOLAP DEN",
    description:
      "it is a long established fact that a reader will be distracted by the readdable content of a page when looking at its layout. The point of using Lorem Ipsum is that has a more-or-less normal distribution of letters as a opposed to using 'Content here, content here,' making it look",
    image:
      "https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const textFieldStyling = {
  "& label": {
    color: "white",
  },
  "& input": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderRadius: "50px",
      backgroundColor: "rgba(255,255,255,0.2)",
    },
    "&:hover fieldset": {
      borderColor: "#A0AAB4",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
};

const Doctors = () => {
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
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              my: 5,
              width: { md: "850px", xs: "80%" },
              flexDirection: "column",
              display: "flex",
              marginTop: "50px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                fontWeight: "900",
                fontSize: {
                  xs: "1.2rem",
                  md: "2.5rem",
                  textAlign: "center",
                },
              }}
            >
              What Doctors Say...
            </Typography>
          </Box>
          <Box
            container
            sx={{
              height: "60%",
              width: "60%",
              my: { md: 5, xs: -10 },
              flexDirection: { md: "row", xs: "column" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginTop: { md: "-40px", xs: "-150px" },
            }}
          >
            {cards.map((item, key) => {
              return (
                <Box
                  key={key}
                  sx={{
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 450,
                      minWidth: { md: 350, xs: 150 },
                      minHeight: { md: 250, xs: 150 },
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      item
                      sx={{
                        display: "flex",
                        height: { md: "100px", xs: "50px" },
                        width: { md: "100px", xs: "50px" },
                        display: "flex",
                        zIndex: 2,
                        position: "absolute",
                        marginTop: { md: "-300px", xs: "-90px" },
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={item.image}
                        sx={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                    <CardActionArea>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            fontWeight: { md: "900", xs: "700" },
                            fontSize: { md: "1.5rem", xs: "0.8rem" },
                            marginTop: { md: "30px", xs: "80px" },
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { md: "0.8rem", xs: "0.4rem" },
                          }}
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Box
                      item
                      sx={{
                        display: "flex",
                        height: { md: "50px", xs: "20px" },
                        width: { md: "50px", xs: "20px" },
                        display: "flex",
                        my: { md: 1, xs: 0 },
                        zIndex: 2,
                      }}
                    >
                      <FormatQuoteIcon
                        style={{
                          height: "100%",
                          width: "100%",
                          transform: "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </Card>
                </Box>
              );
            })}
          </Box>
          <Box
            id="contact"
            minWidth="100vw"
            sx={{
              height: { md: "25vh", xs: "15vh" },
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.2)",
              marginTop: { md: "-13vh",xs:"" },
              backgroundImage: `url(${banner})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backdropFilter: "blur(5px)",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              margin="normal"
              id="email"
              label="Your Email"
              name="subscribe"
              sx={{
                width: "90%",
                ...textFieldStyling,
              }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: { md: "10px 35px", xs: "5px 15px" },
                display: "flex",
                fontSize: { md: ".9rem", xs: "0.5rem" },
                fontWeight: { md: "300", xs: "400" },
                width: { md: "200px", xs: "120px" },
                borderRadius: "50px",
                backgroundColor: "#00132b",
              }}
            >
              SUBSCRIBE NOW
            </Button>
          </Box>

          {/* Footer Section */}
          <Box
            minWidth="100vw"
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
              backgroundColor: "#00132b",
              color: "white",
              flexDirection: "column",
              my:{xs:-25,md:0}
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}
            >
              © 2023 All rights reserved. Made with ❤️ Prasanna Biswas.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Link href="/">
                <IconButton sx={{color:"blue"}} >
                  <Twitter />
                </IconButton>
              </Link>
              <Link href="/">
                <IconButton sx={{color:"blue"}}>
                  <Facebook />
                </IconButton>
              </Link>
              <Link href="/">
                <IconButton sx={{color:"blue"}}>
                  <LinkedIn />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
