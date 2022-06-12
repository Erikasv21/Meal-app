import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../styles/modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalItem = ({ open, handleClose, item }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item.strMeal} <br></br>
            <strong>Ingredients:</strong>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul className="list-in-modal">
              <li>{item.strIngredient1}</li> <br></br>
              <li>{item.strIngredient2}</li>
              <br></br>
              <li>{item.strIngredient3}</li>
              <br></br>
              <li>{item.strIngredient4}</li>
              <br></br>
              <li>{item.strIngredient5}</li>
              <br></br>
              <li>{item.strIngredient6}</li>
              <br></br>
              <li>{item.strIngredient7}</li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalItem;
