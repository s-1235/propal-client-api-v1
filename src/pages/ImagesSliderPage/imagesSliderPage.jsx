import * as React from "react";
import { Box, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
const ImagesSliderPage = (props) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          ":hover": {
            bgcolor: "#FF1C1C", // theme.palette.primary.main
            color: "white",
          },
          backgroundColor: "white",
          border: "none",
          borderColor: "white",
          height: "50px",
          width: "50px",
          marginRight: 15,
          boxShadow: "none",
          marginTop: 5,
          marginLeft: 5,
        }}
        startIcon={
          <ArrowBack sx={{ height: "50px", width: "50px", color: "black" }} />
        }
      ></Button>
      <Typography
        variant="h1"
        sx={{ color: "red", fontFamily: "Josefin Sans", textAlign: "center" }}
      >
        Images
      </Typography>
      <Box
        sx={{ width: "100%", height: "80%", height: 450, overflowY: "scroll" }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                srcSet={item.img}
                alt="Property_Images"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
export default ImagesSliderPage;
