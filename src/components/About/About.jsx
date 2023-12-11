import {
  Button,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import coronaRedImg from "../../assets/download.jpeg";

const About = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{ flexDirection: "column", display: "flex",my:{md:0,xs:10} }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "1.5rem",
                md: "3.5rem",
              },
              textAlign:{xs:"left"},
              lineHeight: { md: "60px", xs: "50px" },
            }}
          >
            About Corona Virus
          </Typography>
          <hr
            style={{
              width: "105px",
              color: "red",
              backgroundColor: "red",
              height: "10px",
              borderRadius: "15px",
              marginTop: "30px",
            }}
          />
          <Typography
            variant="p"
            sx={{
              my: 5,
              fontSize: {
                xs: "0.8rem",
                md: "1rem",
              },
              fontWeight:{xs:"100",md:"500"}
            }}
          >
            English. Many desktop publishing packages and web page editors now
            use Lorem Ipsum as their default model text, and a search for
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
              mx:{xs:10,md:0}
            }}
          >
            READ MORE
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          sx={{ display: { xs: "none", sm: "block", md: "block" } }}
        >
          <ImageListItem
            sx={{
              width: 400,
              height: 400,
            }}
          >
            <img src={coronaRedImg} alt={"image"} loading="lazy" />
          </ImageListItem>
          <ImageListItem
            sx={{
              width: 100,
              height: 100,
            }}
          >
            <img src={coronaRedImg} alt={"image"} loading="lazy" />
          </ImageListItem>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
