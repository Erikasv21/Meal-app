import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";

const CardItem = ({ item }) => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "400px",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              // margin: "0 30px",
            }}
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
            <CardContent sx={{ flexGrow: 0, background: "#DFF6FF" }}>
              <Typography gutterBottom variant="h5" component="h2">
                {item.strMeal}
              </Typography>
              <Typography>{item.strCategory}</Typography>
            </CardContent>
            {/* <CardActions sx={{ background: "#DFF6FF" }}>
              <Button size="small">Ingredients</Button>
            </CardActions> */}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CardItem;
