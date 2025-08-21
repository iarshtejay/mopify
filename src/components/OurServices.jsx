import { Typography, Box } from "@mui/material";
import ServiceCard from "./ServiceCard";

import services from "../data/servicesData";

const descriptionParagraphs = [
  "At Mopify Cleaning Services, we offer more than just cleaning — we deliver reliable service with a personal touch. As a local, independent company, our experienced team is committed to providing high-quality cleaning tailored to your needs, whether at home, office, or medical facility. We prioritise clear communication, flexibility, and a hassle-free experience for both clients and businesses.",
  "Booking with us is simple. You can request quotes or schedule services anytime by calling our friendly team 24/7. We’re here to make your cleaning experience smooth, convenient, and trustworthy.",
];

function OurServices() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "white",
        color: "white",
        py: { xs: 8, md: 10 },
        px: { xs: 8, md: 10 },
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: { xs: "center", sm: "center", md: "left" },
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
        }}
      >
        <Typography variant="h5" color="black" component="p" sx={{ mb: 4 }}>
          Our Services
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color="primary.main"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          A Commitment to Excellence and Hygiene
        </Typography>
        {descriptionParagraphs.map((para, idx) => (
          <Typography
            variant="p"
            color="black"
            key={`paraDesc-${idx}!`}
            gutterBottom
            marginBottom={idx == descriptionParagraphs.length - 1 ? 0 : 3}
          >
            {para}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: "grid",
          // --- Responsive Column Setup ---
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", // 2 columns on extra-small screens (mobile)
            sm: "repeat(3, 1fr)", // 3 columns on small screens
            md: "repeat(4, 1fr)", // 4 columns on medium screens and up (tablet/desktop)
          },
          // ------------------------------
          gap: 2, // Sets the space between grid items
          p: 2, // Adds padding around the entire grid
        }}
      >
        {services.map((service) => (
          <ServiceCard image={service.image} caption={service.caption} />
        ))}
      </Box>
    </Box>
  );
}

export default OurServices;
