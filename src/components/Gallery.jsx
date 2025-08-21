import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// 1. Import the Autoplay module
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import theme from "../theme";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
];

export default function Gallery() {
  return (
    <Box
      id="gallery"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
        color="primary.main"
      >
        Our Team in Action
      </Typography>
      <Box sx={{ width: { xs: "90%", md: "65%" }, mx: "auto", my: 4 }}>
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          effect={"fade"}
          // 3. Add and configure the autoplay prop
          autoplay={{
            delay: 2500, // Time in ms between slides
            disableOnInteraction: false, // Autoplay will restart after user interaction
          }}
          // 2. Add Autoplay to the modules array
          modules={[Navigation, Pagination, Autoplay]}
          className="my-simple-swiper"
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            "--swiper-theme-color": theme.palette.secondary.main,
          }} // Add border radius and overflow hidden here
        >
          {images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img src={imgSrc} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
