import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";

const cardDimensionsConstants = { base: 130, multiplier: 1.5 };
const cardDimensions = {
  height: cardDimensionsConstants.base,
  width: cardDimensionsConstants.base * cardDimensionsConstants.multiplier,
};

function ServiceCard({ image, caption }) {
  return (
    <Card
      position="relative"
      sx={{
        borderRadius: 3,
        width: cardDimensions.width,
      }}
    >
      {image && (
        <CardMedia
          component="img"
          sx={{ ...cardDimensions }}
          image={image}
          alt={caption}
        />
      )}
      {caption && (
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            bgcolor: "primary.main",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Typography variant="p" fontWeight={"bold"}>
            {caption}
          </Typography>
        </Box>
      )}
    </Card>
  );
}

export default ServiceCard;
