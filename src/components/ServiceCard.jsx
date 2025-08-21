import React from "react";
import { Card, CardMedia, Typography, Box, CardContent } from "@mui/material";

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
        width: cardDimensions.width,
        background: "background.default",
        color: "background.default",
        boxShadow: "none",
        borderRadius: 3
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
        <CardContent
          sx={{
            position: "relative",
            textAlign: "center",
            bgcolor: "primary.main",
            color: "white"
          }}
        >
          {caption.map((line, index) => (
            <Typography key={index} variant="h8" component="div" fontWeight="bold">
              {line}
            </Typography>
          ))}
        </CardContent>
      )}
    </Card>
  );
}

export default ServiceCard;
