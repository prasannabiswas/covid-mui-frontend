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
import { motion } from "framer-motion";

import coronaCell from "../../assets/Coronavirus._SARS-CoV-2.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-650%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

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
            zIndex: "2",
          }}
        >
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
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
              <motion.div variants={textVariants}>
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
              </motion.div>
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
                <motion.div variants={textVariants}>
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
                </motion.div>
                <motion.div variants={textVariants}>
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
                </motion.div>
                <ImageListItem
                  sx={{
                    width: 350,
                    height: 350,
                    position: "absolute",
                    my: 10,
                    mx: 2,
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <img src={coronaCell} alt={"image"} loading="lazy" />
                </ImageListItem>
              </Grid>
            </Box>
          </motion.div>
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
        <Typography
          variant="h4"
          sx={{
            fontSize: { md: "50vh" },
            position: "absolute",
            whiteSpace: "nowrap",
            bottom: "20px",
            width: "30%",
            fontWeight: "bold",
            color: "rgba(255,255,255,0.2)",
            zIndex: "1",
          }}
        >
          <motion.p
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            Covid-19 News and its Latest Updates for free!
          </motion.p>
        </Typography>
      </Grid>
    </Container>
  );
};

export default Hero;
