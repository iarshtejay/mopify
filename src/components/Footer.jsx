import { Box, Container, Typography, Stack, Link, Avatar } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import contactData from "../data/contactInfo.json";

const iconMap = {
  PhoneIcon: <PhoneIcon fontSize="large" />,
  EmailIcon: <EmailIcon fontSize="large" />,
  LocationOnIcon: <LocationOnIcon fontSize="large" />,
  FacebookIcon: <FacebookIcon fontSize="large" />,
  InstagramIcon: <InstagramIcon fontSize="large" />,
};

function Footer() {
  return (
    <Box
      sx={{ bgcolor: "primary.main", color: "white", py: { xs: 8, md: 12 } }}
      id="footer"
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mt: 1, opacity: 0.8 }}
          >
            We'd love to hear from you. Here's how you can reach us.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 4 }}
          justifyContent="center" // Changed to 'center' for better spacing with more items
          alignItems="flex-start"
          flexWrap="wrap" // Allow wrapping if there are too many items
        >
          {contactData.map((item) => (
            <Box
              key={item.id}
              component="a"
              href={item.href || ""}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  width: 60,
                  height: 60,
                  mb: 1,
                }}
              >
                {iconMap[item.icon]}
              </Avatar>
              <Typography variant="h6" component="div">
                {item.title}
              </Typography>
              {item.text.map((textLine) => (
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {textLine}
                </Typography>
              ))}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
