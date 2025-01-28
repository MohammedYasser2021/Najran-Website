import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import logo from "../assets/nagran.png";
import heroImage from "../assets/hospital.jpg";
import testimonialImage from "../assets/image1.png";
import axios from "axios";

function BookingPage({language}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(true);

  const content = {
    AR: {
      title: "احجز موعدك الآن",
      subtitle: "نقدم خدمات طبية متخصصة بأحدث التقنيات العالمية",
      name: "الاسم",
      phone: "رقم الجوال",
      submit: "إرسال الطلب"
    },
    EN: {
      title: "Book Your Appointment Now",
      subtitle: "We offer specialized medical services with the latest technologies",
      name: "Name",
      phone: "Phone Number",
      submit: "Send Request"
    }
  };

  const currentContent = content[language];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {

      const data = {
        Name: name,
        Phone: phone,
        Date: new Date().toLocaleString('en-US')
      }

      const sheetResponse =  axios.post(
        "https://sheetdb.io/api/v1/r8fxi8hlllcta",
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      // EmailJS integration
      const templateParams = {
        from_name: name,
        message: `
          Name: ${name}
          Phone: ${phone}
          Request Date: ${new Date().toLocaleString('en-US')}
        `
      };
  
      emailjs.send(
        'service_ohi49va',
        'template_unnyzap',
        templateParams,
        'OW5cLPqmyZR4ZC-Cb'
      )
      .then(() => {
        setAlertSuccess(true);
        setAlertMessage(language === "AR" ? "تم إرسال بياناتك بنجاح!" : "Your information has been sent successfully!");
        setOpenAlert(true);
        setName("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setAlertSuccess(false);
        setAlertMessage(language === "AR" ? "حدث خطأ في إرسال البيانات" : "Error submitting data");
        setOpenAlert(true);
      });
    } else {
      setAlertSuccess(false);
      setAlertMessage(language === "AR" ? "يرجى إدخال جميع البيانات." : "Please enter all information.");
      setOpenAlert(true);
    }
  };
  
  
  

  return (
    <Box sx={{ 
      minHeight: '100vh',
      direction: language === "AR" ? 'rtl' : 'ltr'
    }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Header Section */}
        <Box sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'space-between' },
          alignItems: 'center',
          mb: 6,
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
            <img src={logo} alt="Logo" style={{ maxWidth: "200px", height: "auto" }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
            <img src={testimonialImage} alt="testimonialImage" style={{ maxWidth: "200px", height: "auto" }} />
          </Box>
        </Box>

        {/* Main Content */}
        <Box sx={{
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          mb: { xs: 8, md: 0 }
        }}>
          {/* Form Section */}
          <Box sx={{
            flex: 1,
            width: '100%',
            maxWidth: '600px',
            mx: 'auto',
            p: 4,
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            background: 'white'
          }}>
            <Typography variant="h1" 
              sx={{
                fontWeight: 800,
                mb: 3,
                background: 'linear-gradient(45deg, #1a237e, #0277bd)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textAlign: 'center'
              }}>
              {currentContent.title}
            </Typography>
            <Typography variant="h5" 
              sx={{ 
                color: '#666', 
                mb: 4,
                textAlign: 'center',
                fontSize: { xs: '1.1rem', sm: '1.25rem' }
              }}>
              {currentContent.subtitle}
            </Typography>

            <Box component="form" onSubmit={handleFormSubmit}>
              <TextField
                label={currentContent.name}
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                dir={language === "AR" ? "rtl" : "ltr"}
              />
              <TextField
                label={currentContent.phone}
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                dir={language === "AR" ? "rtl" : "ltr"}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 2,
                  borderRadius: '10px',
                  background: 'linear-gradient(45deg, #1a237e, #0277bd)',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                  }
                }}
              >
                {currentContent.submit}
                <FaPhoneAlt style={{ marginRight: language === "AR" ? '8px' : '0', marginLeft: language === "AR" ? '0' : '8px' }} />
              </Button>
            </Box>
          </Box>

          {/* Image Section */}
          <Box sx={{
            flex: 1,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -20,
              right: -20,
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              background: 'linear-gradient(45deg, #1a237e22, #0277bd22)',
              zIndex: 0
            }
          }}>
            <img
              src={heroImage}
              alt="Hospital"
              style={{
                width: '100%',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                position: 'relative',
                zIndex: 1
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Alert Dialog */}
      <Dialog
        open={openAlert}
        onClose={() => setOpenAlert(false)}
        PaperProps={{
          sx: {
            borderRadius: '20px',
            background: 'white',
            minWidth: '300px',
            maxWidth: '90%',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            border: `2px solid ${alertSuccess ? '#4CAF50' : '#f44336'}`
          }
        }}
      >
        <DialogTitle sx={{ 
          color: alertSuccess ? '#4CAF50' : '#f44336', 
          textAlign: 'center',
          pt: 3,
          pb: 2,
          fontSize: '1.5rem',
          fontWeight: 600
        }}>
          {alertSuccess ? 
            (language === "AR" ? "تم بنجاح!" : "Success!") : 
            (language === "AR" ? "تنبيه!" : "Alert!")}
          <IconButton
            onClick={() => setOpenAlert(false)}
            sx={{
              position: 'absolute',
              right: language === "AR" ? 'auto' : 8,
              left: language === "AR" ? 8 : 'auto',
              top: 8,
              color: alertSuccess ? '#4CAF50' : '#f44336'
            }}
          >
            <FaTimes />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ 
          color: '#666',
          textAlign: 'center',
          pb: 3
        }}>
          <Typography sx={{ fontSize: '1.1rem' }}>
            {alertMessage}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default BookingPage;
