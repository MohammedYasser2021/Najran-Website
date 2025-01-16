import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Container, Grid, Link } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/nagran.png";
import testimonialImage from "../assets/image1.png";
import heroImage from "../assets/hospital.jpg";
import emailjs from '@emailjs/browser';

function Contact({ language }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const content = {
    AR: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك",
      description: "مستشفى تخصصي نجران هو مركز طبي رائد يقدم خدمات صحية متكاملة بأحدث التقنيات العالمية وفريق طبي متميز. نسعى دائماً لتقديم أفضل رعاية طبية لمرضانا في بيئة مريحة وآمنة.",
      name: "الاسم",
      phone: "رقم الجوال",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      submit: "إرسال",
      contactInfo: "معلومات التواصل",
      address: "نجران، المملكة العربية السعودية",
      websiteLabel: "الموقع الإلكتروني"
    },
    EN: {
      title: "Contact Us",
      subtitle: "We're Here to Help",
      description: "Najran Specialist Hospital is a leading medical center providing comprehensive healthcare services with the latest global technologies and distinguished medical team. We always strive to provide the best medical care for our patients in a comfortable and safe environment.",
      name: "Name",
      phone: "Phone Number",
      email: "Email",
      message: "Message",
      submit: "Send",
      contactInfo: "Contact Information",
      address: "Najran, Saudi Arabia",
      websiteLabel: "Website"
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email && message) {
      const templateParams = {
        email: email,
        from_name: name,
        message: `
          رسالة جديدة من نموذج التواصل
          ---------------------------
          الاسم: ${name}
          رقم الهاتف: ${phone}
          البريد الإلكتروني: ${email}
          الرسالة: ${message}
          التاريخ: ${new Date().toLocaleString('ar-SA')}
        `
      };

      emailjs.send(
        'service_mn9quw6',
        'template_9it1hcr',
        templateParams,
        'eGZ4YSe0tvpqV-HZ5'
      )
      .then(() => {
        alert(language === "AR" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(language === "AR" ? "حدث خطأ في إرسال الرسالة" : "Error sending message");
      });
    } else {
      alert(language === "AR" ? "يرجى إدخال جميع البيانات." : "Please fill in all fields.");
    }
  };

  return (
    <Box sx={{ py: 4, px: 4, direction: language === "AR" ? 'rtl' : 'ltr' }}>
      {/* Header */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
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

      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ 
            color: '#1a237e',
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}>
            {content[language].title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#666', mb: 3 }}>
            {content[language].subtitle}
          </Typography>
          <Typography sx={{ color: '#666', mb: 6, maxWidth: '800px', mx: 'auto' }}>
            {content[language].description}
          </Typography>
          <Box sx={{ 
            maxWidth: '800px',
            mx: 'auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <img src={heroImage} alt="Hospital" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Box>

        {/* Contact Form and Info */}
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label={content[language].name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label={content[language].phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label={content[language].email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label={content[language].message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 2,
                  background: 'linear-gradient(45deg, #1a237e, #0277bd)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease-in-out'
                  }
                }}
              >
                {content[language].submit}
              </Button>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 4,
              borderRadius: '20px',
              background: 'linear-gradient(45deg, #1a237e08, #0277bd08)',
              height: '100%'
            }}>
              <Typography variant="h5" sx={{ mb: 4, color: '#1a237e', fontWeight: 700 }}>
                {content[language].contactInfo}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <FaEnvelope />
                  <Box>
                    <Link href="mailto:muhammadaljamal@gmail.com" sx={{ display: 'block', color: '#666', textDecoration: 'none' }}>
                      muhammadaljamal@gmail.com
                    </Link>
                  </Box>
              
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <FaEnvelope />
                  <Box>
                  <Link href="mailto:moh.aljamal@najransh.sa" sx={{ display: 'block', color: '#666', textDecoration: 'none' }}>
                      moh.aljamal@najransh.sa
                    </Link>
                  </Box>
              
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <FaGlobe />
                  <Link href="http://www.najransh.sa" target="_blank" sx={{ color: '#666', textDecoration: 'none' }}>
                    www.najransh.sa
                  </Link>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <FaMapMarkerAlt />
                  <Typography sx={{ color: '#666' }}>
                    {content[language].address}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
