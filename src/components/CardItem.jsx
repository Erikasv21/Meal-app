import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ModalItem from "./ModalItem";
import "../styles/carditem.css";

const CardItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          height: "100%",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          // margin: "0 30px",
        }}
        id="card-id"
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            height: "100%",
            width: "100%",
            background: "cover",
          }}
          image={item.strMealThumb}
          alt="food-image"
        />
        <CardContent sx={{ flexGrow: 1, background: "#DFF6FF" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ fontSize: "20px" }}
          >
            <strong>{item.strMeal}</strong>
          </Typography>
          <Typography>{item.strCategory}</Typography>
        </CardContent>
        <CardActions sx={{ background: "#DFF6FF" }}>
          <Button size="small" onClick={handleOpen}>
            Ingredients
          </Button>
          <ModalItem open={open} handleClose={handleClose} item={item} />
        </CardActions>
      </Card>
    </>
  );
};

export default CardItem;
