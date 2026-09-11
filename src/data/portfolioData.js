// Centralized portfolio data to make it extremely easy to update later
export const portfolioData = {
  personalInfo: {
    fullName: "Md Rejawanul Haque (Reja)",
    roles: [
      "Data Annotator & ML Researcher",
      "Sports Video Editor",
      "Creative Entrepreneur"
    ],
    tagline: "I Learn. I Build. I Solve Real-World Problems.",
    intro: "I am a Computer Science graduate, remote data annotator, and sports video editor based in Dhaka, Bangladesh. I run a video-editing agency working with international sports clients, while collaborating with machine learning teams to annotate and prepare computer vision datasets.",
    detailedBio: "I believe in learning concepts and immediately applying them to real-world tasks. Over the past 5+ years, I have worked remotely on 100+ data annotation projects—ranging from semantic segmentation for medical imaging to object tracking in kitchen videos. At the same time, I built my own freelancing career and team editing high-impact sports videos (NBA, NFL, UFC) on Upwork and Fiverr. I like finding areas where coding, automation, and video production meet to make work faster and better.",
    location: "Dhaka, Bangladesh",
    email: "rejhaqtonmoy@gmail.com",
    phone: "+880 1718 072667",
    socials: {
      github: "https://github.com/rejawanul",
      linkedin: "https://www.linkedin.com/in/rejawanul/",
      upwork: "https://www.upwork.com/freelancers/~01aa3ab3ae87338767",
      fiverr: "https://www.fiverr.com/md_rejawanul/",
    },
    cvFiles: {
      academic: "academic-cv.pdf", // Relative path for Vite / GitHub Pages compatibility
      creative: "video-editing-cv.pdf" // Relative path for Vite / GitHub Pages compatibility
    }
  },

  // Stats from CVs
  businessStats: [
    { label: "Completed Fiverr Projects", value: "100+", suffix: "" },
    { label: "Fiverr Reviews (4.9/5 Rating)", value: "148", suffix: "" },
    { label: "Completed Upwork Jobs", value: "42", suffix: "" },
    { label: "Hours Billed on Upwork", value: "46+", suffix: "" },
    { label: "Years in Data Annotation", value: "5+", suffix: " Years" }
  ],

  // Core Pillars of "What I Do"
  whatIDo: [
    {
      title: "Data Science & CV",
      description: "Preparing and organizing image/video data for computer vision models, with a focus on object detection and action recognition.",
      icon: "Database"
    },
    {
      title: "Dataset Engineering",
      description: "High-quality labeling using bounding boxes, polygons, semantic segmentation, and keypoints following strict guidelines.",
      icon: "Binary"
    },
    {
      title: "Software & Automation",
      description: "Writing scripts and tools in Python and JS to automate video processing, dataset formatting, and productivity workflows.",
      icon: "Cpu"
    },
    {
      title: "Sports Video Editing",
      description: "Editing dynamic sports videos (NBA, NFL, UFC, Football) with clean pacing, graphics, transitions, and high-retention storytelling.",
      icon: "Video"
    },
    {
      title: "Business & Management",
      description: "Handling client communication, deadlines, requirements, and managing a small editing team to deliver high-quality work.",
      icon: "TrendingUp"
    }
  ],

  // Structured Projects ("Problems I Solved")
  projects: [
    {
      id: "kitchen-human-tracker",
      title: "Restaurant Kitchen Human Tracking Dataset",
      category: "Computer Vision",
      problem: "ML models needed accurate coordinates to track human steps in busy kitchen videos, where occlusions (blocking) happen constantly.",
      idea: "Apply a step-by-step frame annotation method with continuous occlusion flags to keep track of individual workers.",
      solution: "Annotated and checked human movements and object handling on restaurant kitchen footage.",
      technologies: ["CVAT", "Object Detection", "Annotation QA", "Human Tracking"],
      result: "Created high-quality training datasets that improved tracking accuracy in dense kitchen environments.",
      github: "",
      demo: "",
      isRealCVWork: true
    },
    {
      id: "dental-image-annotator",
      title: "Healthcare AI Dental Pathology Segmenter",
      category: "Data Science / Medical AI",
      problem: "Dental health startups needed precise, tooth-by-tooth polygon borders on X-rays to train auto-diagnosis models.",
      idea: "Manually trace highly accurate polygon boundaries for individual teeth, decay spots, and roots based on clinical guides.",
      solution: "Labeled dental and orthodontic scans, applying clinical segmentation rules and QA checks to avoid labeling errors.",
      technologies: ["Labelbox", "Polygon Annotation", "Semantic Segmentation", "Medical Imaging"],
      result: "Supplied 1,000+ clean labeled images directly used to train diagnostic models, improving detection recall.",
      github: "",
      demo: "",
      isRealCVWork: true
    },
    {
      id: "hand-gesture-recognition",
      title: "Hand Movement Action Recognition Dataset",
      category: "Computer Vision / Deep Learning",
      problem: "VR gesture models lose track of finger keypoints during rapid hand movements.",
      idea: "Perform keypoint coordinate mapping on each frame to track micro-movements of fingers and joints over time.",
      solution: "Labled joint points and fine-grained gestures on large hand-motion video sequences.",
      technologies: ["CVAT", "Keypoint Tracking", "Action Recognition", "Temporal Filtering"],
      result: "Provided clean datasets that helped train gesture models for low-latency devices.",
      github: "",
      demo: "",
      isRealCVWork: true
    },
    {
      id: "video-edit-workflow-automator",
      title: "Sports Highlight Clip Sorter & Automator",
      category: "Software & Automation",
      problem: "Finding the best highlight frames manually in hours of sports footage takes a lot of time.",
      idea: "Write a script to detect high-intensity action scenes based on motion detection and sound spikes.",
      solution: "Created a Python utility that parses video frames, finds high-motion clips, and exports chopped files ready for editing.",
      technologies: ["Python", "OpenCV", "FFmpeg", "Audio Processing"],
      result: "Saved about 60% of video sorting time, helping deliver final videos much faster.",
      github: "https://github.com/rejhaqtonmoy/sports-highlight-automator",
      demo: "",
      isRealCVWork: false
    },
    {
      id: "sign-language-recognition",
      title: "Sign Language Recognition System",
      category: "Computer Vision / Deep Learning",
      problem: "Deaf and hard-of-hearing communities face significant communication barriers. Manual interpretation is slow and unavailable at scale.",
      idea: "Train a deep learning model on hand gesture datasets to recognize sign language in real time using a camera feed.",
      solution: "Built a TensorFlow-based sign language classifier as a university final year project, using image classification and gesture detection on labeled hand sign datasets.",
      technologies: ["Python", "TensorFlow", "Jupyter Notebook", "Computer Vision", "Image Classification"],
      result: "Achieved accurate real-time hand gesture recognition, demonstrating practical application of computer vision for accessibility.",
      github: "https://github.com/rejawanul/sign-language-recognition-project",
      demo: "",
      isRealCVWork: true
    },
    {
      id: "youtube-downloader-mac",
      title: "YouTube Video Downloader for macOS",
      category: "Software / macOS App",
      problem: "Existing YouTube downloaders on macOS are either web-based (slow, limited) or poorly designed third-party tools that feel out of place on Mac.",
      idea: "Build a native macOS app in Swift that integrates cleanly with the OS and allows users to download videos with a few clicks.",
      solution: "Developed a native Swift macOS application that lets users paste a YouTube link and download videos directly, with a clean macOS-native UI.",
      technologies: ["Swift", "macOS", "Native UI", "yt-dlp integration"],
      result: "A polished native macOS app that feels at home on the platform — no browser extension or command line required.",
      github: "https://github.com/rejawanul/YouTube-Video-Downloader-for-MAC",
      demo: "",
      isRealCVWork: false
    },
    {
      id: "money-management-ios",
      title: "Money Management App (iOS)",
      category: "Mobile Development / iOS",
      problem: "Most personal finance apps are bloated with features most users don't need, making simple daily expense tracking unnecessarily complex.",
      idea: "Design a minimal, fast iOS app focused purely on tracking income and expenses without the noise of full banking apps.",
      solution: "Built a native Swift iOS application for personal money management, allowing users to log income, track spending by category, and view simple financial summaries.",
      technologies: ["Swift", "iOS", "Xcode", "UIKit"],
      result: "A clean, minimal expense tracker app — built to be fast and to the point, with native iOS performance and design.",
      github: "https://github.com/rejawanul/MoneyManagementApp-IOS",
      demo: "",
      isRealCVWork: false
    },
    {
      id: "sell-tracker",
      title: "Sell Tracker — Small Business Sales Tool",
      category: "Software & Automation",
      problem: "Small organizations track sales manually in spreadsheets, leading to errors, wasted time, and no real-time view of performance.",
      idea: "Build a lightweight digital sales tracking app that any small team can pick up and use immediately without complex setup.",
      solution: "Developed a Sell Tracker application designed for small organizations to log sales, track items sold, and monitor business performance at a glance.",
      technologies: ["App Development", "Sales Tracking", "Business Tooling"],
      result: "A practical sales management tool that replaces messy spreadsheets and helps small teams stay on top of their numbers.",
      github: "https://github.com/rejawanul/Sell-Tracker",
      demo: "",
      isRealCVWork: false
    },
    {
      id: "personal-portfolio-cv",
      title: "Developer & Creative Portfolio Hub",
      category: "Web Development",
      problem: "Having two different paths (CS/ML and Video Editing) made the profile look split or hard to understand.",
      idea: "Build a single page showing the link between code and business, using a clean academic style.",
      solution: "Developed this responsive React site using CSS variables, custom SVGs, and dynamic GitHub integration.",
      technologies: ["React", "Vite", "Vanilla CSS", "Responsive Design"],
      result: "Unifies both professional identities in one clean layout that loads in less than 1.5 seconds.",
      github: "https://github.com/rejhaqtonmoy/portfolio-website",
      demo: "https://rejhaqtonmoy.github.io",
      isRealCVWork: true
    }
  ],

  // Currently Building Section
  currentlyBuilding: [
    {
      name: "Video Metadata Annotation Toolkit",
      description: "A script that turns ML coordinate outputs into Premiere Pro markers for quick editing.",
      status: "Building",
      tech: "Python, FFmpeg, XML parsing"
    },
    {
      name: "Self-Supervised Object Tracking Pipeline",
      description: "Researching how to track objects when they go behind other items in videos.",
      status: "Researching",
      tech: "PyTorch, YOLOv8, DeepOCSORT"
    }
  ],

  // Skills Breakdown
  skills: [
    {
      category: "Computer Vision & ML Research",
      items: [
        "Image & Video Annotation",
        "Object Detection",
        "Action Recognition",
        "Dataset QA & Validation",
        "Independent Research"
      ]
    },
    {
      category: "Data Annotation Techniques",
      items: [
        "Bounding Boxes",
        "Polygon Annotation",
        "Semantic Segmentation",
        "Keypoints Labeling",
        "Human/Object Tracking",
        "Dental X-Ray Annotation",
        "Frame-by-Frame Tracking"
      ]
    },
    {
      category: "Video Editing & Creative",
      items: [
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Adobe Photoshop",
        "Sports Highlights (NBA, UFC, NFL)",
        "YouTube Docu-style",
        "Reels & Short-form",
        "Pacing & Storytelling"
      ]
    },
    {
      category: "Tools & Workflow",
      items: [
        "CVAT",
        "Labelbox",
        "Git & GitHub",
        "VS Code",
        "Client Communication",
        "Agency Management",
        "Remote Collaboration"
      ]
    }
  ],

  // Experiences Timeline (Academic/ML vs Creative/Business)
  experience: {
    academicTech: [
      {
        role: "ML Researcher",
        organization: "Independent Research",
        period: "2024 - Present",
        details: [
          "Studying video frame processing, tracking algorithms, and dataset prep.",
          "Applying computer vision steps to clean up dataset issues and evaluate model outputs."
        ]
      },
      {
        role: "Data Annotator (Part-time)",
        organization: "Linewise (Remote)",
        period: "Aug. 2024 - Present",
        details: [
          "Tracking detailed hand and object movement sequences frame-by-frame.",
          "Verifying ground truth datasets under project deadlines."
        ]
      },
      {
        role: "Data Annotator (Part-time)",
        organization: "Quantigo AI (Remote)",
        period: "Feb. 2019 - June 2024",
        details: [
          "Worked on 100+ projects doing polygon, segment, and keypoints labeling.",
          "Labeled kitchen operational videos and dental images for machine learning."
        ]
      },
      {
        role: "Bachelor of Computer Science",
        organization: "National University, Bangladesh",
        period: "Graduated 2023",
        details: [
          "Studies focused on databases, software engineering, coding basics, and data analysis."
        ]
      }
    ],
    creativeBusiness: [
      {
        role: "Freelance Video Editor",
        organization: "Fiverr (Remote)",
        period: "Nov. 2022 - Present",
        details: [
          "Editing sports content (NBA, UFC, NFL) for international creators.",
          "Completed 100+ projects with a 4.9/5 overall rating across 148 reviews."
        ]
      },
      {
        role: "Freelance Video Editor & Agency Lead",
        organization: "Upwork (Remote)",
        period: "Apr. 2022 - Present",
        details: [
          "Maintaining a 100% Job Success Score across 42 completed projects and 46+ billed hours.",
          "Managing 11 ongoing projects and coordinating editing workflows."
        ]
      }
    ]
  }
};
