import React from "react";
import { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import classes from "./uploadImagesAddProperty.module.css";
const UploadImagesAddProperty = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return (
    <>
      <input
        type="file"
        className={classes.upload}
        multiple
        accept="image/*"
        onChange={onImageChange}
        style={{ marginLeft: 25 }}
      />

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        borderColor="black"
      >
        <ImageList
          sx={{
            width: 1200,
            height: 450,
            marginTop: 10,
            marginLeft: 10,
          }}
          variant="woven"
          cols={3}
          gap={5}
        >
          {imageURLs.map((imageSrc) => (
            <ImageListItem key={imageSrc}>
              <img
                src={imageSrc}
                srcSet={imageSrc}
                alt="property image"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </>
  );
};
export default UploadImagesAddProperty;
