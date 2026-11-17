// Centralized portfolio data to make it extremely easy to update later
export const portfolioData = {
  personalInfo: {
    fullName: "Md Rejawanul Haque (Reja)",
    roles: [
      "Data Annotator & ML Researcher",
      "Sports Video Editor"
    ],
    tagline: "I Learn, Build & Solve Real-World Problems.",
    intro: "Data Science master's student who prepares computer vision datasets for ML teams and runs a sports video editing agency.",
    detailedBio: [
      "I'm a Computer Science graduate from National University, Bangladesh, now pursuing a Master's in Data Science at Daffodil International University. My focus is computer vision and machine learning: I work with Python, TensorFlow, PyTorch, YOLOv8 and OpenCV, and I learn best by applying each new concept to a real task. My goal is to build ML systems that solve real-world problems.",
      "Professionally, I have spent 5+ years as a remote data annotator (Quantigo AI, now Linewise), delivering 100+ computer vision projects, from medical image segmentation to object tracking in kitchen videos. Alongside that, I run Reja's Studio, a sports video editing agency working with international clients on Fiverr and Upwork (NBA, NFL, UFC), where I handle clients, deadlines and a small team of editors."
    ],
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
    { label: "Fiverr Reviews (4.9/5 Rating)", value: "156", suffix: "" },
    { label: "Completed Upwork Jobs", value: "53", suffix: "" },
    { label: "Total Hours on Upwork", value: "94", suffix: "" },
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
      id: "rejas-studio",
      title: "Reja's Studio — Video Editing Agency Website",
      category: "Web Development / Next.js",
      problem: "My video editing agency needed one place where international clients can see my work, understand the process, check pricing, and get in touch.",
      idea: "Build a fast, modern agency website that walks a client from portfolio to pricing to booking.",
      solution: "Built the Reja's Studio website with Next.js, React, TypeScript and Tailwind CSS, with sections for portfolio, editing workflow, experience, pricing, a booking calendar and contact.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      result: "A professional home for the agency that presents the work and turns visitors into client inquiries.",
      github: "https://github.com/rejawanul/RejasStudio",
      demo: "https://www.rejastudio.com",
      isRealCVWork: false
    },
    {
      id: "drive-transfer",
      title: "Drive Transfer — Google Drive Transfer App",
      category: "Web App / PWA",
      problem: "Moving large video files into Google Drive from a phone is slow and awkward without a simple, dedicated tool.",
      idea: "Make an installable web app that signs in with Google and sends files straight into a chosen Drive folder.",
      solution: "Built a mobile-first Progressive Web App (installable, with share-target support) that uses Google sign-in and the Google Drive API, uploads in chunks with progress, and lets you pick or create the destination folder. The interface is in Bengali.",
      technologies: ["JavaScript", "PWA", "Google Drive API", "OAuth"],
      result: "A lightweight tool for moving editing files into Drive straight from the phone.",
      github: "https://github.com/rejawanul/drive-transfer",
      demo: "",
      isRealCVWork: false
    },
    {
      id: "business-management-system",
      title: "Business Management System (Roshalo)",
      category: "Software / macOS App",
      problem: "Small businesses need to track stock and inventory, but most tools are complicated or not made for macOS.",
      idea: "Build simple inventory management software for Mac, made for the day-to-day needs of a small business.",
      solution: "Inventory management software for macOS (Roshalo) for keeping track of products and stock.",
      technologies: ["macOS", "Inventory Management", "Business Tooling"],
      result: "A focused inventory tool for small business operations on Mac.",
      github: "https://github.com/rejawanul/Business-Management-System",
      demo: "",
      isRealCVWork: false
    },
    {
      id: "sample-projects",
      title: "Sample Projects Collection",
      category: "Python / Practice Projects",
      problem: "Practising programming works best by building many small, complete tools instead of only reading tutorials.",
      idea: "Build a set of small utilities, each solving one everyday problem.",
      solution: "A collection of mini projects including an age calculator, a desktop voice assistant, a mobile app lock, background removal, text-to-speech, a tour budget planner, a budget calculator, a YouTube downloader, a file renamer and tic-tac-toe.",
      technologies: ["Python", "Automation", "Utilities"],
      result: "A hands-on library of small tools that shows the learn-by-building habit.",
      github: "https://github.com/rejawanul/Sample-Projects",
      demo: "",
      isRealCVWork: false
    },

  ],

  // Currently Building Section
  currentlyBuilding: [
    {
      name: "Making Plugin for Video Editing Automation",
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
      category: "Programming Languages",
      items: [
        "Python",
        "JavaScript (React, Vite)",
        "HTML / CSS",
        "Swift",
        "SQL"
      ]
    },
    {
      category: "ML Models & Frameworks",
      items: [
        "TensorFlow",
        "PyTorch",
        "YOLOv8",
        "DeepOCSORT",
        "OpenCV",
        "Computer Vision"
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        "Git & GitHub",
        "VS Code / Jupyter",
        "CVAT",
        "Labelbox",
        "FFmpeg",
        "yt-dlp"
      ]
    },

    {
      category: "Video Editing & Creative",
      items: [
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Adobe Photoshop",
        "Sports Highlights",
        "Pacing & Storytelling"
      ]
    }
  ],

  // Education
  education: [
    {
      role: "Master of Science in Data Science",
      organization: "Daffodil International University",
      period: "2024 - Present",
      details: [
        "Currently pursuing a master's degree in Data Science."
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
      }
    ],
    creativeBusiness: [
      {
        role: "Freelance Video Editor",
        organization: "Fiverr (Remote)",
        period: "Nov. 2022 - Present",
        details: [
          "Delivering high-speed cinematic sports edits for NBA, NFL, UFC, and Soccer creators worldwide.",
          "Completed 100+ orders with a 4.9/5 overall rating across 156 reviews.",
          "Standardized 1-hour client feedback cycles."
        ],
        tags: ["100+ Orders", "156 Reviews", "4.9 Rating"]
      },
      {
        role: "Freelance Video Editor & Agency Lead",
        organization: "Upwork (Remote) · Top Rated",
        period: "Apr. 2022 - Present",
        details: [
          "Maintaining a 100% Job Success Score across 53 completed jobs and 94 total hours.",
          "Managing long-term sports agency production pipelines, with 11 ongoing projects and retainer contracts with global sports channels.",
          "Coordinating editing workflows across a small team of editors."
        ],
        tags: ["53 Jobs", "94 Hours", "100% Job Success"]
      }
    ]
  }
};
