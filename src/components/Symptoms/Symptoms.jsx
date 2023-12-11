import {
  Button,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import symptomsImg from "../../assets/cough.png";

const Symptoms = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={-10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection:{
                xs:"row",
                md:"row"
            }
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              transform: "scaleX(-1)",
            }}
          >
            <ImageListItem
              sx={{
                width: 600,
                height: 600,
                textAlign: "center",
                my:{
                    xs:10,
                    md:0
                }
              }}
            >
              <img src={symptomsImg} alt={"image"} loading="lazy" />
            </ImageListItem>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              my: {
                xs: 10,
                md: 0,
              },
              marginTop:{xs:"-200px",md:0}
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1.5rem",
                  md: "3rem",
                },
                width: { xs: "auto", md: "400px" },
                textAlign: { xs: "left" },
                lineHeight: { md: "45px", xs: "30px" },
              }}
            >
              CORONA VIRUS WHAT IT IS?
            </Typography>
            <br />
            <Typography
              variant="p"
              sx={{
                my: {md:2,xs:0},
                fontSize: {
                  xs: "0.8rem",
                  md: "0.8rem",
                },
                fontWeight: { xs: "100", md: "600" },
              }}
            >
              when looking at its layout. The point of using Loren Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed
              to using
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: { md: "10px 35px", xs: "5px 15px" },
                display: "flex",
                fontSize: { md: ".9rem", xs: "0.8rem" },
                fontWeight: { md: "300", xs: "200" },
                width: { md: "200px", xs: "150px" },
                backgroundColor: "#00132b",
                mx: { xs: 10, md: 0 },
                my: 3,
              }}
            >
              READ MORE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Symptoms;
