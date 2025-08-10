/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hassan Obaia",
  title: "Hi all, I'm Hassan",
  subTitle: emoji(
    "Aspiring Machine Learning Engineer and Data Scientist with hands-on experience in developing end-to-end AI solutions through real-world projects, industry internships, and mentoring roles. Skilled in supervised and unsupervised learning, deep learning, andstatistical analysis. Proven ability to build and evaluate models using Python, scikit-learn, PyTorch, and cloud tools. Seeking achallenging opportunity to contribute to impactful AI projects, combining technical excellence with a strong foundation indata-centric problem solving."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hassan-obaya",
  linkedin: "https://www.linkedin.com/in/hassan-obaya/",
  gmail: "hassanobaya@gmail.com",
  facebook: "https://www.facebook.com/HassanObaya00",
  kaggle: "https://www.kaggle.com/hassanobaya",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE DATA SCIENTIST & AI PRACTITIONER WHO LOVES TURNING DATA INTO IMPACTFUL SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build and deploy end-to-end Machine Learning & Deep Learning models for real-world problems"
    ),
    emoji(
      "⚡ Design and implement NLP pipelines including BERT, Transformers, and Retrieval-Augmented Generation"
    ),
    emoji(
      "⚡ Perform advanced statistical analysis, hypothesis testing, and data visualization for insights"
    ),
    emoji(
      "⚡ Deploy AI applications with Flask, Streamlit, and Docker for production-ready solutions"
    ),
    emoji(
      "⚡ Work with diverse data sources: CSV, SQL/NoSQL databases, REST APIs"
    ),
    emoji(
      "⚡ Optimize models via hyperparameter tuning (GridSearchCV, RandomizedSearchCV) and cross-validation"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "scikit-learn", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "TensorFlow", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "Hugging Face", fontAwesomeClassname: "fas fa-smile"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Flask", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "Streamlit", fontAwesomeClassname: "fas fa-stream"},
    {skillName: "Pandas", fontAwesomeClassname: "fas fa-table"},
    {skillName: "Matplotlib", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kafr El-Sheikh University, Egypt",
      logo: require("./assets/images/KFS.png"),
      subHeader: "Bachelor of Science in Artificial Intelligence",
      duration: "September 2021 – July 2025",
      desc: "Focused on Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision.",
      descBullets: [
        "Completed coursework in supervised & unsupervised learning, deep learning, and AI applications",
        "Built multiple academic and extracurricular AI projects, including NLP and computer vision models"
      ]
    },
    {
      schoolName: "WorldQuant University (Applied Data Science Lab)",
      logo: require("./assets/images/WQU.jpg"),
      subHeader: "Project-Based Data Science Credential",
      duration: "October 2024 – January 2025",
      desc: "Completed 8 real-world projects covering data extraction, cleaning, analysis, modeling, and deployment.",
      descBullets: [
        "Worked with diverse data sources including CSV, SQL, NoSQL, and REST APIs",
        "Applied ML models such as Random Forest, K-Means, ARMA, and GARCH for real-world use cases"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Natural Language Processing",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "80%"
    },
    {
      Stack: "Statistical Analysis & Modeling",
      progressPercentage: "75%"
    },
    {
      Stack: "Model Deployment & MLOps",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};
// Work experience section

const workExperiences = {
  display: true, // Show workExperiences Section
  experience: [
    {
      role: "Applied NLP Engineer - Intern",
      company: "Elevvo Pathways",
      companylogo: require("./assets/images/elevvoo.png"), // keep original photo
      date: "July 2025 – Present",
      desc: "Developed and fine-tuned NLP pipelines for sentiment analysis, fake news detection, and topic modeling using transformer models.",
      descBullets: [
        "Built semantic resume-screening tools to match candidate profiles with job descriptions",
        "Applied Hugging Face Transformers, spaCy, and scikit-learn for model training and evaluation"
      ]
    },
    {
      role: "Machine Learning Engineer - Intern",
      company: "Cellula Technologies",
      companylogo: require("./assets/images/Cellula.png"), // keep original photo
      date: "February 2025 – March 2025",
      desc: "Developed, trained, and deployed machine learning models for predictive analytics in production environments.",
      descBullets: [
        "Enhanced predictive performance through feature engineering and model tuning",
        "Collaborated with teams to integrate models into production pipelines"
      ]
    },
    {
      role: "Machine Learning Scientist Intern",
      company: "NeuronetiX",
      companylogo: require("./assets/images/Neurontix.png"), // keep original photo
      date: "August 2024 – October 2024",
      desc: "Applied supervised and unsupervised learning techniques for classification, regression, and clustering on real-world datasets.",
      descBullets: [
        "Implemented models such as Random Forest, Ridge Regression, and K-Means",
        "Performed dimensionality reduction with PCA and prepared datasets through cleaning and feature engineering"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "End-to-End AI & Machine Learning Solutions I've Built",
  projects: [
    {
      image: require("./assets/images/ML.png"), // keep image
      projectName: "End-to-End ML Deployment – Hotel Booking Cancellation",
      projectDesc:
        "Developed and deployed a complete ML pipeline using Flask, Docker, and Random Forest to predict hotel booking cancellations with 89% accuracy.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/hassan-obaya/End-to-End-ML-Deployment-Hotel-Booking-Cancellation-Prediction"
        }
      ]
    },
    {
      image: require("./assets/images/LLMS.jpg"), // keep image
      projectName: "LLM-Based QA System with PDF and TXT Support",
      projectDesc:
        "Built a Retrieval-Augmented Generation (RAG) pipeline with FAISS and Streamlit to enable semantic search and contextual question answering from large document corpora.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/hassan-obaya/LLM-Based-QA-System-with-PDF-and-TXT-File-Support"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and achievements in AI, Machine Learning, NLP, and Data Science.",

  achievementsCards: [
    {
      title: "Machine Learning Scientist",
      subtitle:
        "Earned from DataCamp – covered supervised/unsupervised learning, model evaluation, and deployment.",
      image: require("./assets/images/Machine learning certification.png"), // keep original image
      imageAlt: "Machine Learning Scientist Certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/cefa8f01e775bd5b5638ee70331c617f3a30d767" // replace with real link if available
        }
      ]
    },
    {
      title: "Natural Language Processing in Python",
      subtitle:
        "DataCamp certification – applied text preprocessing, transformers, and sentiment analysis.",
      image: require("./assets/images/NLP certification.png"), // keep original image
      imageAlt: "NLP Certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/14a320c90bfca649bdf9bf4ff03ec00f226b9ed0?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink" // replace with real link if available
        }
      ]
    },
    {
      title: "Data Scientist in Python",
      subtitle:
        "DataCamp professional certification – data analysis, visualization, and statistical modeling.",
      image: require("./assets/images/Data scientist certification.png"), // keep original image
      imageAlt: "Data Scientist Certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/4e4b93051fa5b5e6620cf017dffbc17ac707ffc5" // replace with real link if available
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+393204079413",
  email_address: "hassanobaya@gmail.com",

  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
