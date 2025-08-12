import React from "react";
import {
  Box,
  Container,
  Divider,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const descriptionParagraphs = [
  "We’re a local cleaning company servicing South East Queensland with over 16 years of experience across residential, commercial, and government sectors. From homes to medical centres and offices, we deliver high-quality, reliable cleaning tailored to your needs.",
  "Our team is trusted for professionalism, consistency, and attention to detail. Whether it’s regular housekeeping, hygiene cleans, or commercial work, we bring care and precision to every job.",
  "As an independent provider, we offer flexible, personalised service without compromising on standards. We’re proud to help create cleaner, healthier spaces across the region.",
];

const servicesList = [
  {
    name: "Residential Cleaning",
    brief: "Regular, deep, bond & spring cleans",
  },
  { name: "Commercial Cleaning", brief: "Offices, retail, industrial & more" },
  {
    name: "Medical Centre Cleaning",
    brief: "Trained professionals, hygienic results",
  },
  {
    name: "Post Build & Renovation Cleaning",
    brief: "Dust-free, spotless finish",
  },
  {
    name: "Carpet, Upholstery & Leather Cleaning",
    brief: "Steam clean & stain removal",
  },
  {
    name: "Wet & Dry Vacuuming",
    brief: "Powerful extraction for all surfaces",
  },
];

function HeroSecond() {
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
      <Box bgcolor={"primary.main"} sx={{ borderRadius: 6 }} minWidth={"30vw"}>
        <List sx={{ color: "white" }}>
          {servicesList.map((service, index) => (
            <React.Fragment key={service.name}>
              <ListItem sx={{ py: 2 }}>
                <ListItemText
                  primary={
                    <>
                      <Box component="span" sx={{ fontWeight: "bold" }}>
                        {service.name}
                      </Box>
                      {` - ${service.brief}`}
                    </>
                  }
                />
              </ListItem>

              {index < servicesList.length - 1 && (
                <Divider
                  component="li"
                  sx={{ bgcolor: "secondary.main", mx: 2 }}
                />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: { xs: "center", sm: "center", md: "left" },
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
        }}
      >
        <Typography variant="h5" color="black" component="p" sx={{ mb: 4 }}>
          Cleaning Experts
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color="primary.main"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Homes, Businesses, and clinics covered.
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
    </Box>
  );
}

export default HeroSecond;
