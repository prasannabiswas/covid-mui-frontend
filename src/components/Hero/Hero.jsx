import React from "react";
import styles from "./hero.module.css";
import {
  Box,
  Button,
  Container,
  Grid,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

import coronaCell from "../../assets/Coronavirus._SARS-CoV-2.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Hero = () => {
  return (
    <Container maxWidth="xll" className={styles.hero}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          md={7}
          sx={{
            height: "60vh",
            my: {
              xs: 2,
              md: 10,
            },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              ml: {
                xs: 2,
                md: 30,
              },
              my: {
                xs: 10,
                md: 10,
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "2rem",
                  md: "5rem",
                },
                lineHeight: { md: "80px", xs: "40px" },
              }}
            >
              Care early <br /> Coronavirus
            </Typography>
            <Grid
              spacing={5}
              sx={{
                display: "inline-flex",
                gap: "20px",
                my: {
                  xs: 2,
                  md: 10,
                },
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  padding: { md: "10px 35px", xs: "5px 20px" },
                  display: "flex",
                  fontSize: { md: ".9rem", xs: "0.4rem" },
                  fontWeight: { md: "300", xs: "200" },
                  width: { md: "200px", xs: "100px" },
                }}
              >
                Read more
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  padding: { md: "10px 35px", xs: "5px 20px" },
                  display: "flex",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: { md: ".9rem", xs: "0.4rem" },
                  fontWeight: { md: "300", xs: "200" },
                  width: { md: "200px", xs: "100px" },
                }}
              >
                About us
              </Button>
              <ImageListItem
                sx={{
                  width: 350,
                  height: 350,
                  position: "absolute",
                  my: 10,
                  mx:2,
                  display:{xs:"block",md:"none"}
                }}
              >
                <img src={coronaCell} alt={"image"} loading="lazy" />
              </ImageListItem>
            </Grid>
          </Box>
        </Grid>
        <Grid
          xs="none"
          sm="none"
          md={5}
          sx={{ display: { xs: "none", sm: "block", md: "block" } }}
        >
          <ImageListItem
            sx={{
              width: 200,
              height: 200,
              position: "absolute",
              my: 2,
              mx: -15,              
            }}
          >
            <img src={coronaCell} alt={"image"} loading="lazy" />
          </ImageListItem>
          <ImageListItem
            sx={{
              width: 500,
              height: 500,
              position: "absolute",
              my: 10,
              mx: 5,
            }}
          >
            <img src={coronaCell} alt={"image"} loading="lazy" />
          </ImageListItem>
          <ImageListItem
            sx={{
              width: 200,
              height: 200,
              position: "absolute",
              my: 4,
              mx: 65,
            }}
          >
            <img src={coronaCell} alt={"image"} loading="lazy" />
          </ImageListItem>
          <ImageListItem
            sx={{
              width: 100,
              height: 100,
              position: "absolute",
              my: 55,
              mx: -8,
            }}
          >
            <img src={coronaCell} alt={"image"} loading="lazy" />
          </ImageListItem>
          <ImageListItem
            sx={{
              width: 150,
              height: 150,
              position: "absolute",
              my: 60,
              mx: 60,
            }}
          >
            <img src={coronaCell} alt={"image"} loading="lazy" />
          </ImageListItem>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
