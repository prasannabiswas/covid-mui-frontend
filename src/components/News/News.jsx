import React from "react";
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
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

const cards = [
  {
    title: "Cases 01",
    description:
      "it is a long established fact that a reader will be distracted by the readdable content of a page when looking at its layout. The point of using Lorem Ipsum is that has a more-or-less normal distribution of letters as a opposed to using 'Content here, content here,' making it look",
  },
  {
    title: "Cases 02",
    description:
      "it is a long established fact that a reader will be distracted by the readdable content of a page when looking at its layout. The point of using Lorem Ipsum is that has a more-or-less normal distribution of letters as a opposed to using 'Content here, content here,' making it look",
  },
  {
    title: "Cases 03",
    description:
      "it is a long established fact that a reader will be distracted by the readdable content of a page when looking at its layout. The point of using Lorem Ipsum is that has a more-or-less normal distribution of letters as a opposed to using 'Content here, content here,' making it look",
  },
];

const News = () => {
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
              marginTop:{xs:"-100px",md:"50px"}
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
              Coronavirus cases
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
                my: 2,
              }}
            >
              it is a long established fact that a reader will be distracted by
              the readdable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that has a more-or-less normal
              distribution of letters as a opposed to using 'Content here,
              content here,' making it look
            </Typography>
          </Box>
          <Box
            container
            sx={{
              height: "60%",
              width: "60%",
              my: {md:5,xs:-10},
              flexDirection: { md: "row", xs: "column" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginTop:{md:"-80px",xs:"-300px"}
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
                      minHeight: { md: 350, xs: 100 },
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardActionArea>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="240"
                          image="https://images.pexels.com/photos/4021262/pexels-photo-4021262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="green iguana"
                          sx={{
                            display: {
                              md: "block",
                              xs: "none",
                              padding: "10px",
                            },
                          }}
                          loading="lazy"
                        />
                        <CardMedia
                          component="img"
                          height="50"
                          image="https://images.pexels.com/photos/4021262/pexels-photo-4021262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="green iguana"
                          sx={{
                            display: {
                              md: "none",
                              xs: "block",
                              padding: "5px",
                            },
                          }}
                        />
                        <Button
                          variant="contained"
                          size="medium"
                          sx={{
                            padding: { md: "10px 35px", xs: "5px 15px" },
                            display: "flex",
                            fontSize: { md: ".9rem", xs: "0.3rem" },
                            fontWeight: { md: "300", xs: "200" },
                            width: { md: "200px", xs: "30px" },
                            position:"absolute"
                          }}
                        >
                          READ MORE
                        </Button>
                      </Box>

                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            fontWeight: { md: "900", xs: "700" },
                            fontSize: { md: "1.5rem", xs: "0.8rem" },
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
                    <Box
                      item
                      sx={{
                        display: "flex",
                        height: {md:"50px",xs:"20px"},
                        width: {md:"50px",xs:"20px"},
                        position: "absolute",
                        display: "flex",
                        marginTop: {md:"440px",xs:"120px"},
                        zIndex: 2,
                      }}
                    >
                      <CoronavirusIcon
                        style={{ height: "100%", width: "100%", color: "red" }}
                      />
                    </Box>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default News;
