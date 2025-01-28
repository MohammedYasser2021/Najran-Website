import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, IconButton } from '@mui/material';
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import Post7 from "../assets/post_7.jpg";
import logo from "../assets/nagran.png";
import testimonialImage from "../assets/image1.png";
import emailjs from '@emailjs/browser';
import axios from "axios";

function InterventionalRadiology({ language }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(true);


  const content = {
    AR: {
      title: "مركز الأشعة التداخلية",
      description: `أصبحت الأشعة التداخلية تخصصاً مستقلاً تم فصله عن تخصص علم الأشعة بعدما كان اختصاصاً فرعياً به. وهي مجموعة من التقنيات التي تستخدم الصورة الإشعاعية (التصوير بالأشعة السينية أو التصوير بالموجات فوق الصوتية) في تشخيص وعلاج الكثير من الأمراض والحالات الحرجة.
  
      الوحدات المتوفرة:
      • وحدة الأشعة التداخلية للأوعية الدموية والدوالي
      • وحدة الأشعة التداخلية للعظام والمفاصل والعمود الفقري
  
      فريقنا الطبي:
      • استشاريون متخصصون في الأشعة التداخلية
      • أخصائيون معتمدون في الأشعة
      • طاقم تمريض مؤهل
  
      التقنيات المستخدمة:
      • أحدث أجهزة فحص وتشخيص الأمراض باستخدام الأشعة
      • معدات جراحية متطورة
      • تقنيات الأشعة التداخلية الحديثة`,
      services: [
        "علاج الدوالي باستخدام الأشعة التداخلية",
        "علاج انسداد الأوعية الدموية",
        "إزالة الأورام باستخدام الأشعة",
        "علاج كسور العظام بواسطة الأشعة التداخلية",
        "علاج اضطرابات العمود الفقري باستخدام الأشعة التداخلية"
      ],
      servicesTitle: "خدماتنا المتخصصة:",
      bookNow: "احجز موعدك الآن",
      contactForm: "قدم بياناتك للتواصل",
      name: "الاسم",
      phone: "رقم الجوال",
      submit: "إرسال الطلب"
    },
    EN: {
      title: "Interventional Radiology Center",
      description: `Interventional radiology has become an independent specialty that was separated from the specialty of radiology after being a sub-specialization. It is a set of techniques that use radiographic images (X-ray imaging or ultrasound) to diagnose and treat many diseases and critical conditions.
  
      Available Units:
      • Interventional Radiology Unit for Blood Vessels and Varicose Veins
      • Interventional Radiology Unit for Bones, Joints, and Spine
  
      Our Medical Team:
      • Interventional Radiology Consultants
      • Certified Radiologists
      • Qualified Nursing Staff
  
      Technologies Used:
      • Latest Diagnostic and Radiological Imaging Devices
      • Advanced Surgical Equipment
      • Modern Interventional Radiology Techniques`,
      services: [
        "Varicose Vein Treatment with Interventional Radiology",
        "Blood Vessel Blockage Treatment",
        "Tumor Removal with Radiology",
        "Bone Fracture Treatment Using Interventional Radiology",
        "Spinal Disorders Treatment with Interventional Radiology"
      ],
      servicesTitle: "Our Specialized Services:",
      bookNow: "Book Now",
      contactForm: "Contact Information",
      name: "Name",
      phone: "Phone Number",
      submit: "Send Request"
    }
  };
  

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
        setOpenDialog(false);
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
    <Box sx={{ py: 4, px: 4 }}>
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

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <img
            src={Post7}
            alt="Interventional Radiology"
            style={{
              width: '100%',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}
          />
          
          <Typography variant="h5" sx={{
            color: '#1a237e',
            fontWeight: 700,
            mb: 2,
            mt: 4,
            textAlign: language === "AR" ? "right" : "left"
          }}>
            {content[language].servicesTitle}
          </Typography>
          
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 2,
            mb: 4
          }}>
            {content[language].services.map((service, index) => (
              <Box key={index} sx={{
                p: 2,
                borderRadius: '10px',
                background: 'linear-gradient(45deg, #1a237e08, #0277bd08)',
                border: '1px solid #1a237e22',
                transition: 'all 0.3s ease',
                textAlign: language === "AR" ? "right" : "left",
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  background: 'linear-gradient(45deg, #1a237e15, #0277bd15)',
                }
              }}>
                <Typography sx={{ color: '#666' }}>
                  • {service}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, textAlign: language === "AR" ? "right" : "left" }}>
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              color: '#1a237e',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2rem' }
            }}
          >
            {content[language].title}
          </Typography>

          <Typography
            sx={{
              mb: 4,
              whiteSpace: 'pre-line',
              color: '#666',
              lineHeight: 1.8
            }}
          >
            {content[language].description}
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpenDialog(true)}
            sx={{
              borderRadius: '30px',
              px: 4,
              py: 2,
              background: 'linear-gradient(45deg, #1a237e, #0277bd)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }
            }}
          >
            {content[language].bookNow}
          </Button>
        </Box>
      </Box>

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
          {content[language].contactForm}
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
              label={content[language].name}
              variant="outlined"
              fullWidth
              sx={{ mb: 3 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              dir={language === "AR" ? "rtl" : "ltr"}
            />
            <TextField
              label={content[language].phone}
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
                fontSize: { xs: '1rem', md: '1.1rem' },
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}
            >
              {content[language].submit}
              <FaPhoneAlt style={{ marginRight: language === "AR" ? '8px' : '0', marginLeft: language === "AR" ? '0' : '8px' }} />
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

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

export default InterventionalRadiology;
