import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { FaPhoneAlt, FaArrowLeft, FaTimes } from "react-icons/fa";
import logo from "../assets/nagran.png";
import heroImage from "../assets/hospital.jpg";
import testimonialImage from "../assets/image1.png";
import Post1 from "../assets/post_1.jpg";
import Post2 from "../assets/post_2.jpg";
import Post3 from "../assets/post_3.jpg";

function LandingPage({language}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState("");
const [alertSuccess, setAlertSuccess] = useState(true);

  const content = {
    AR: {
      title: "مركز متخصص للرعاية الطبية المتكاملة",
      subtitle: "نقدم أفضل الخدمات الطبية بأحدث التقنيات العالمية مع نخبة من الأطباء المتخصصين",
      bookNow: "احجز موعدك الآن",
      services: "خدماتنا المتميزة",
      contactForm: "قدم بياناتك للتواصل",
      name: "الاسم",
      phone: "رقم الجوال",
      email: "البريد الإلكتروني",
      submit: "إرسال الطلب",
      posts: [
        {
          title: "جراحة العظام والمفاصل",
          image: Post1,
          description: "نقدم أحدث التقنيات في جراحات العظام والمفاصل مع فريق متخصص من الأطباء."
        },
        {
          title: "جراحات الذكورة والعقم",
          image: Post2,
          description: "مركز متخصص في علاج مشاكل الذكورة والعقم بأحدث الطرق العلاجية."
        },
        {
          title: "جراحات السمنة",
          image: Post3,
          description: "نقدم حلولاً متكاملة لعلاج السمنة من خلال أحدث تقنيات الجراحة."
        }
      ]
    },
    EN: {
      title: "Specialized Center for Integrated Medical Care",
      subtitle: "Providing the best medical services with latest technologies and elite specialists",
      bookNow: "Book Now",
      services: "Our Distinguished Services",
      contactForm: "Contact Information",
      name: "Name",
      phone: "Phone Number",
      email: "Email Address",
      submit: "Send Request",
      posts: [
        {
          title: "Orthopedic Surgery",
          image: Post1,
          description: "We offer the latest techniques in orthopedic surgery with specialized medical team."
        },
        {
          title: "Male Fertility Treatment",
          image: Post2,
          description: "Specialized center in treating male fertility issues with latest therapeutic methods."
        },
        {
          title: "Obesity Surgery",
          image: Post3,
          description: "We provide integrated solutions for obesity treatment through latest surgical techniques."
        }
      ]
    }
  };

  const currentContent = content[language];



  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email) {
      const templateParams = {
        email: email,
        from_name: name,
        message: `
          طلب حجز جديد من المركز الطبي
          ---------------------------
          اسم المريض: ${name}
          رقم الهاتف: ${phone}
          البريد الإلكتروني: ${email}
          تاريخ الطلب: ${new Date().toLocaleString('ar-SA')}
          ---------------------------
          New Booking Request from Medical Center
          Patient Name: ${name}
          Phone Number: ${phone}
          Email: ${email}
          Request Date: ${new Date().toLocaleString('en-US')}
        `
      };
  
      emailjs.send(
        'service_mn9quw6',
        'template_9it1hcr',
        templateParams,
        'eGZ4YSe0tvpqV-HZ5'
      )
      .then(() => {
        setAlertSuccess(true);
        setAlertMessage(language === "AR" ? "تم إرسال بياناتك بنجاح!" : "Your information has been sent successfully!");
        setOpenAlert(true);
        setOpenDialog(false);
        setName("");
        setPhone("");
        setEmail("");
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
      background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)',
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
  gap: 2,
  '@media (max-width: 530px)': {
    justifyContent: 'center'
  }
}}>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
    <img src={logo} alt="Logo" style={{ maxWidth: "200px", height: "auto" }} />
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
    <img src={testimonialImage} alt="testimonialImage" style={{ maxWidth: "200px", height: "auto" }} />
  </Box>
</Box>

        {/* Hero Section */}
        <Box sx={{
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          mb: { xs: 8, md: 12 },
          minHeight: { xs: 'auto', md: '70vh' }
        }}>
          <Box sx={{
            flex: 1.5,
            textAlign: language === "AR" ? "right" : "left",
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
                lineHeight: 1.2
              }}>
              {currentContent.title}
            </Typography>
            <Typography variant="h5" 
              sx={{ 
                color: '#666', 
                mb: 4, 
                lineHeight: 1.8,
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
              }}>
              {currentContent.subtitle}
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenDialog(true)}
              sx={{
                borderRadius: '30px',
                px: 4,
                py: 2,
                background: 'linear-gradient(45deg, #1a237e, #0277bd)',
                transition: 'all 0.3s ease',
                fontSize: { xs: '1rem', md: '1.2rem' },
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}
            >
              {currentContent.bookNow}
              {language === "AR" ? <FaArrowLeft style={{ marginRight: '8px' }} /> : null}
            </Button>
          </Box>

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

        {/* Services Section */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: { xs: 6, md: 8 },
            fontWeight: 700,
            color: '#1a237e',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          {currentContent.services}
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {currentContent.posts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={() => setOpenDialog(true)}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: '#1a237e',
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666',
                      lineHeight: 1.8,
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    {post.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Dialog */}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          PaperProps={{
            sx: {
              borderRadius: '20px',
              background: 'linear-gradient(to bottom right, #fff, #f8f9fa)',
              maxWidth: '500px',
              width: '100%',
              direction: language === "AR" ? 'rtl' : 'ltr'
            }
          }}
        >
          <DialogTitle sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: { xs: '1.5rem', md: '1.8rem' },
            pt: 4
          }}>
            {currentContent.contactForm}
            <IconButton
              onClick={() => setOpenDialog(false)}
              sx={{
                position: 'absolute',
                right: language === "AR" ? 'auto' : 8,
                left: language === "AR" ? 8 : 'auto',
                top: 8
              }}
            >
              <FaTimes />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box
              component="form"
              onSubmit={handleFormSubmit}
              sx={{ p: 3 }}
            >
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
                sx={{ mb: 4 }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                dir={language === "AR" ? "rtl" : "ltr"}
              />
              <TextField
  label={currentContent.email}
  variant="outlined"
  fullWidth
  sx={{ mb: 3 }}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  dir={language === "AR" ? "rtl" : "ltr"}
  type="email"
/>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 2,
                  borderRadius: '10px',
                  background: 'linear-gradient(45deg, #1a237e, #0277bd)',
                  fontSize: { xs: '1rem', md: '1rem' },
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
          </DialogContent>
        </Dialog>
      </Container>
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

export default LandingPage;
