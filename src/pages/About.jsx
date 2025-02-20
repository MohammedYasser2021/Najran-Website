import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
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
import Post4 from "../assets/post_4.jpg";
import Post5 from "../assets/post_5.jpg";
import Post6 from "../assets/post_6.jpg";
import Post7 from "../assets/post_7.jpg";
import Post8 from "../assets/post_8.jpg";
import axios from "axios";

function LandingPage({language}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(true);
  const navigate = useNavigate();

  const content = {
    AR: {
      title: "مراكزنا الطبية المتخصصة للرعاية الطبية المتكاملة",
      subtitle: "  نقدم خدمات طبية متخصصة بأحدث التقنيات العالمية مع نخبة من الاطباء الاستشاريين تغنيك عن السفر خارج منطقة نجران",
      bookNow: "احجز موعدك الآن",
      services: "خدماتنا المتميزة",
      contactForm: "قدم بياناتك للتواصل",
      name: "الاسم",
      phone: "رقم الجوال",
      submit: "إرسال الطلب",
      posts: [
        {
          title: "مركز جراحات العظام والمفاصل",
          image: Post1,
          description: "نخبة من افضل الجراحين الاستشاريين بمنطقة نجران لجراحات العظام والعمود الفقري ومفاصل الركبة والحوض والكتف وجراحات اليد الميكروسكوبية"
        },
        {
          title: "مركز جراحات المسالك البولية وجراحات الذكورة والعقم للرجال",
          image: Post2,
          description: "مركز متخصص في علاج امراض المسالك البولية وعلاج تضخم البروستاتا بالتبخير (جهاز الريزيوم) كما نتميز بوجود خبير زراعة الدعامات لعلاج الضعف الجنسي للرجال د. محمد حبوس استشاري جراحات الضعف الجنسي وعقم الرجال"
        },
        {
          title: "مركز جراحات السمنة",
          image: Post3,
          description: "المركز الوحيد المعتمد لجراحات السمنة في نجران"
        },
        {
          title: "مركز طب وجراحة العيون",
          image: Post4,
          description: "افضل اجهزة علاج مشاكل النظر وجراحات العيون بأنواعها"
        },
        {
          title: " مركز الطب الباطني",
          image: Post5,
          description: "  يلتزم مركز الطب الباطني بتوفير أعلى مستوى من جودة الرعاية الصحية والتي تتراوح من الرعاية الأولية إلى الرعاية المتخصصة والدقيقة للبالغين وكبار السن ذوي الأمراض الحادة والأمراض المزمنة"
        },
        {
          title: "  مركز صحة المرأة",
          image: Post6,
          description: "يضم مركز صحة المرأة في مستشفى تخصصي نجران العديد من الاستشاريات الجراحات والأخصائيات في مجال أمراض وجراحات النساء والولادة وتخصصاتها الدقيقة حيث يتوفر لهم العديد من احدث أجهزة التشخيص والعلاج وغرف العمليات المتطورة وكذلك وحدة خاصة بطواريء النساء والولادة ويحتوي القسم على العديد من الوحدات المخصصة لصحة المرأة"
        },
        {
          title: "    مركز الاشعة التداخلية",
          image: Post7,
          description: "  أصبحت الاشعة التداخلية تخصص مستقل تم فصله عن تخصص علم الاشعة بعدما كان اختصاص فرعي به وهي مجموعة من التقنيات التي تستخدم الصورة الاشعاعية (التصوير بالأشعة السينية أو التصوير بالموجات فوق الصوتية) في تشخيص وعلاج الكثير من الأمراض والحالات الحرجة. وحدة الأشعة التداخلية للأوعية الدموية والدوالي "
        },
        {
          title: " مركز الطب النفسي والادمان   ",
          image: Post8,
          description: "يتميز المركز بأنه الوحيد الذي يوفر العلاج للاضطرابات النفسية وفي نفس الوقت تقديم الاستشارات الحياتية والزوجية ومشاكل الطفولة والمراهقة وكذلك كبار السن. بالإضافة إلى علاج مشاكل الإدمان لمن تتوفر لديه الرغبة الحقيقية للتخلص من هذه الآفة. ويتكون المركز من الوحدات التالية:-	١.  وحدة علاج الإدمان.-	٢. وحدة العلاج السلوكي المعرفي "
        }
      ]
    },
    EN: {
      title: "Specialized Centers for Integrated Medical Care",
      subtitle: "We provide specialized medical services with the latest international technologies with a selection of consultant doctors to avoid traveling outside the Najran region.",
      bookNow: "Book Now",
      services: "Our Distinguished Services",
      contactForm: "Contact Information",
      name: "Name",
      phone: "Phone Number",
      submit: "Send Request",
      posts: [
        {
          title: "Orthopedic Surgeries Center",
          image: Post1,
          description: "A team of the best consultant surgeons in the Najran region for orthopedic surgeries, spine surgeries, knee, hip, and shoulder joint surgeries, as well as microsurgical hand surgeries."
        },
        {
          title: "Male Fertility Surgeries Center",
          image: Post2,
          description: "A specialized center for treating urological diseases and prostate enlargement through vaporization (Rezum device). We also stand out for having an expert in penile implant surgeries for treating male erectile dysfunction. Dr. Mohammed Habous, Consultant in Erectile Dysfunction and Male Infertility Surgeries."
        },
        {
          title: "Obesity Surgeries Center",
          image: Post3,
          description: "The only accredited center for obesity surgeries in Najran"
        },
        {
          title: "Ophthalmology and Eye Surgery Center",
          image: Post4,
          description: "The best devices for treating vision problems and all types of eye surgeries."
        },
        {
          title: "Internal Medicine Center",
          image: Post5,
          description: "The Internal Medicine Center is committed to providing the highest quality of healthcare ranging from primary care to specialized and accurate care for adults and the elderly with acute and chronic diseases."
        },
        {
          title: "Women's Health Center",
          image: Post6,
          description: "The Women's Health Center at Najran Specialized Hospital includes many consultants surgeons and specialists in the field of diseases and surgeries of obstetrics and gynecology and their subspecialties, where they have many of the latest diagnostic and treatment devices and advanced operating rooms, as well as a special unit for obstetrics and gynecology emergencies, and the department contains many units dedicated to women's health"
        },
        {
          title: "Interventional Radiology Center",
          image: Post7,
          description: "Interventional radiology has become an independent specialty that has been separated from the specialty of radiology after it was a sub-specialization, which is a set of techniques that use the radiographic image (X-ray imaging or ultrasound) in the diagnosis and treatment of many diseases and critical conditions.. Interventional Radiology Unit for Blood Vessels and Varicose Veins "
        },
        {
          title: "Psychiatry and Addiction Center",
          image: Post8,
          description: "The center is distinguished as the only one that provides treatment for psychological disorders while also offering life, marital, and childhood/adolescent counseling, as well as addressing issues related to the elderly. Additionally, it treats addiction problems for those who have a genuine desire to overcome this affliction. The center consists of the following units: 1. Addiction Treatment Unit. 2. Cognitive Behavioral Therapy Unit."
        }
      ]
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
          mb: { xs: 8, md: 0 },
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
              onClick={() => navigate('/booking')}
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
            fontSize: { xs: '1.7rem', sm: '2.5rem', md: '3rem' }
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
                      fontSize: { xs: '1.25rem', md: '1.25rem' }
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
