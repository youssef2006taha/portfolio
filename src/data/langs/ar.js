// certificates
import ainShams from "../../assets/certificates/Ain Shams University.png"
import canadianCollege from "../../assets/certificates/The Canadian College In Cairo.png"
import frontendDiploma from "../../assets/certificates/Front.png"
import frontGDG from "../../assets/certificates/frontGDG.png"
import backendDiploma from "../../assets/certificates/Back.png"
import fullStackDiploma from "../../assets/certificates/Full Stack.png"
import practicalTrainingCert from "../../assets/certificates/frontTraining.png"

// projects
import masonLeblancImg from "../../assets/projects/Mason Leblanc.png"
import kasperImg from "../../assets/projects/Kasper.png"
import restaurantImg from "../../assets/projects/restaurant.png"
import leonImg from "../../assets/projects/leon.png"
import nexoraImg from "../../assets/projects/nexora.jpg"
import nexoraVid from "../../assets/projects/nexora vid.mp4"

export const ar = {
  header: {
    logo: "يوسف طه",
    navLinks: [
      { name: "الرئيسية", href: "#hero" },
      { name: "عني", href: "#about" },
      { name: "المهارات", href: "#skills" },
      { name: "المشاريع", href: "#projects" },
      { name: "رحلتي", href: "#journey" },
      { name: "التعليم", href: "#education" },
      { name: "تواصل معي", href: "#contact" },
    ],
    langBtn: "English",
  },

  hero: {
    isAvailable: true,
    availableText: "متاح للعمل الحر والوظائف",
    notAvailableText: "غير متاح حالياً",
    greeting: "أهلاً بك، أنا",
    name: "يوسف طه",
    title: "مطور ويب متكامل | MERN Stack Developer",
    description: "أصمم وأطور تطبيقات ويب حديثة وسريعة باستخدام React.js و Node.js، مع التركيز على الأداء العالي، واجهات المستخدم التفاعلية، والكود النظيف.",
    contactBtnText: "تواصل معي",
    downloadCV: "تحميل السيرة الذاتية",
    githubBtnText: "GitHub",
    linkedinBtnText: "LinkedIn",
  },

  about: {
    title: "عن الشخصية",
    subtitle: "نبذة عني",
    bio: "مطور ويب متكامل (Full-Stack Developer) متخصص في MERN Stack. أركز على تحويل الأفكار والتصاميم إلى تطبيقات رقمية حقيقية وسريعة، مع تطبيق أفضل الممارسات لكتابة Clean Code سهل الصيانة وتجربة مستخدم تفاعلية متكاملة.",
    highlights: [
      {
        icon: "HiOutlineRocketLaunch",
        title: "تطوير متكامل (MERN)",
        desc: "بناء تطبيقات ويب قوية ومتقنة من الواجهة الأمامية وحتى قواعد البيانات بـ Redux و Express.",
      },
      {
        icon: "HiOutlineCpuChip",
        title: "أداء وكود نظيف",
        desc: "الاهتمام بكتابة كود منسق (Clean Code) وتطبيق أعلى معايير السرعة والأمان والـ Validation.",
      },
      {
        icon: "HiOutlineSparkles",
        title: "واجهات تفاعلية وأنيميشن",
        desc: "تصميم واجهات مستخدم مريحة ومتوافقة تماماً مع كافة الشاشات مدعومة بأنيميشن سبيس بـ GSAP.",
      },
    ],
    statsLabels: {
      yearsExperience: "سنوات خبرة وتدريب",
      projectsCompleted: "مشروع متكامل",
      technologiesUsed: "تقنية وأداة",
    },
  },

  skills: {
    title: "المهارات والتقنيات",
    subtitle: "الأدوات والتقنيات التي أتقنها",
    categories: [
      {
        name: "الواجهات الأمامية",
        items: [
          "HTML5",
          "CSS3",
          "JavaScript (ES6+)",
          "React.js",
          "Redux Toolkit",
          "Bootstrap 5",
          "Tailwind CSS",
          "GSAP",
        ],
      },
      {
        name: "الخلفية وقواعد البيانات",
        items: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "RESTful APIs",
          "Authentication (JWT)",
        ],
      },
      {
        name: "الأدوات والمكتبات",
        items: [
          "VS Code",
          "Git & GitHub",
          "Postman",
          "Vite",
          "Vercel",
          "npm",
          "Bcryptjs",
        ],
      },
    ],
  },

  projects: {
    title: "المشاريع المميزة",
    subtitle: "عُرض لبعض أحدث مشاريع وتطبيقات تطوير الويب التي قمت بتنفيذها",
    items: [
      {
        id: 1,
        filter: "web-apps",
        image: masonLeblancImg,
        link: "https://mason-leblanc.vercel.app",
        github: "#",
        title: "Mason Leblanc - معرض أعمال تصوير فوتوغرافي",
        subDescription: "React.js, Redux Toolkit, Tailwind CSS, ثيمات ديناميكية, مخصص ألوان, تنقل متعدد الصفحات",
        role: "مطور واجهات أمامية (Front-End Developer)",
        date: "سبتمبر 2026",
        description: "تطبيق ويب متعدد الصفحات لعرض أعمال التصوير الفوتوغرافي، يحتوي على أداة تخصيص تفاعلية للتحكم في الوضع الداكن/الفتح، ألوان الموقع، وتغيير الخطوط ديناميكيًا. تم استخدام Redux Toolkit لإدارة الحالة العامة للفرونت إند وReact Router للتنقل السلس بين الصفحات.",
        tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "React Router"],
      },
      {
        id: 2,
        filter: "web-apps",
        image: nexoraImg,
        video: nexoraVid,
        link: "",
        github: "https://github.com/youssef2006taha/Nexora-Ecommerce",
        title: "Nexora - منصة تجارة إلكترونية لوحة تحكم",
        subDescription: "React.js, Redux Toolkit, Tailwind CSS, REST APIs, قائد فريق, مصادقة وتحقق Regex",
        role: "قائد الفريق ومطور واجهات المستخدم (Team Lead & UI Developer)",
        date: "يوليو 2026 - أغسطس 2026",
        description: "قدت فريقًا مكونًا من 13 عضوًا لتطوير منصة تجارة إلكترونية متكاملة[cite: 8]. قمت ببناء مكونات واجهة المستخدم المتجاوبة ونماذج التسجيل والمصادقة مع التحقق من البيانات باستخدام Regex، بالإضافة إلى تنظيم وإدارة المهام عبر Git/GitHub.",
        tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
      },
      {
        id: 3,
        filter: "landing",
        image: kasperImg,
        link: "https://youssef2006taha.github.io/kasper",
        github: "#",
        title: "Kasper - قالب موقع لوكالة إبداعية",
        subDescription: "HTML5, CSS3, JavaScript ES6+, Flexbox & Grid, تصفية حسب الفئات, تصميم متجاوب",
        role: "مطور واجهات أمامية (Front-End Developer)",
        date: "ديسمبر 2025 - يناير 2026",
        description: "تصميم وبناء قالب متكامل متعدد الأقسام ومتجاوب مع كافة الشاشات من الصفر باستعمال HTML5 وCSS3 (Flexbox & Grid) وJavaScript ES6+ لإضافة التفاعلية مثل تصفية مشاريع المعرض والتنقل التفاعلي.",
        tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
      },
      {
        id: 4,
        filter: "landing",
        image: leonImg,
        link: "https://youssef2006taha.github.io/Leon",
        github: "#",
        title: "Leon - صفحة هبوط لوكالة خدمات",
        subDescription: "HTML5, CSS3 Pure, Media Queries, هيكلة كود نظيفة, تجاوب كامل",
        role: "مطور واجهات أمامية (Front-End Developer)",
        date: "نوفمبر 2025 - ديسمبر 2025",
        description: "تطوير قالب ويب متجاوب بتصميم بسيط وأنيق يركز على هيكلية HTML نظيفة وتنسيقات CSS مخصصة باستخدام Media Queries وتخطيطات متناسقة بدقة.",
        tags: ["HTML5", "CSS3", "Responsive Design"],
      },
      {
        id: 5,
        filter: "landing",
        image: restaurantImg,
        link: "https://youssef2006taha.github.io/project-3",
        github: "#",
        title: "موقع متجاوب للمطاعم والوجبات",
        subDescription: "Bootstrap 5, HTML5, CSS3, ثيم داكن مخصص, نظام الشبكات (Grid), متوافق مع كافة المتصفحات",
        role: "مطور واجهات أمامية (Front-End Developer)",
        date: "سبتمبر 2025 - أكتوبر 2025",
        description: "تصميم وتطوير صفحة هبوط حديثة لمطعم تتميز بثيم داكن مخصص وتصميم متجاوب يعتمد على نظام الشبكات (Grid System) في Bootstrap 5.",
        tags: ["Bootstrap 5", "HTML5", "CSS3"],
      },
    ],
  },

  journey: {
    title: "رحلتي ومساري التعلّمي",
    subtitle: "محطات سعت من خلالها لتطوير مهاراتي البرمجية والشخصية",
    items: [
      {
        id: "depi",
        period: "أغسطس 2026 - الحالي",
        title: "مبادرة رواد مصر الرقمية (DEPI) - الدفعة الخامسة",
        subtitle: "تدريب تطوير الويب (AST Company) - بنها",
        description: "تدريب مكثف يركز على بناء تطبيقات الويب المتكاملة، تطبيق أفضل الممارسات في كتابة الكود، العمل الجماعي، والتعامل مع مشاريع حقيقية.",
        type: "training",
        badge: "تدريب حالي",
        certificates: null
      },
      {
        id: "sef-practical-training",
        period: "مايو 2026 - أغسطس 2026",
        title: "التدريب التطبيقي لـ Frontend (React.js)",
        subtitle: "أكاديمية SEF Academy",
        description: "إتمام تدريب مكثف بواقع 120 ساعة تدريبية وبدرجة 99.0%، تركز على التطبيق العملي لبناء واجهات مشاريع واقعية باستخدام React.js، التعامل مع APIs، وإدارة الحالات المتقدمة.",
        type: "training",
        badge: "تدريب تطبيقي",
        certificates: [
          {
            id: "sef-cert-training",
            title: "شهادة التدريب التطبيقي Frontend (React.js) - بدرجة 99.0%",
            image: practicalTrainingCert, 
            studentId: "284222001308",
            link: "#"
          }
        ]
      },
      {
        id: "sef-fullstack",
        period: "يونيو 2025 - مايو 2026",
        title: "دبلومة تطوير الويب المتكامل (MERN Stack)",
        subtitle: "أكاديمية SEF Academy",
        description: "إتمام برنامج مكثف بواقع 180 ساعة تدريبية وبمتوسط درجات 97.89%، شمل بناء تطبيقات MERN Stack متكاملة، إدارة الحالات عبر Redux Toolkit، وتطوير واجهات برمجة التطبيقات (RESTful APIs) وقواعد البيانات.",
        type: "diploma",
        badge: "دبلومة معتمدة",
        certificates: [
          {
            id: "sef-cert-fullstack",
            title: "شهادة دبلومة Full Stack (MERN Stack) - بدرجة 97.89%",
            image: fullStackDiploma,
            studentId: "284222000554",
            link: "#"
          },
          {
            id: "sef-cert-backend",
            title: "شهادة دبلومة Back-End (Node JS) - بدرجة 97.64%",
            image: backendDiploma,
            studentId: "284222000554",
            link: "#"
          },
          {
            id: "sef-cert-frontend",
            title: "شهادة دبلومة Front-End (React JS) - بدرجة 98.13%",
            image: frontendDiploma,
            studentId: "284222000554",
            link: "#"
          }
        ]
      },
      {
        id: "gdg-bootcamp",
        period: "يناير 2026",
        title: "معسكر تطوير الواجهات الأمامية (Front-End Bootcamp)",
        subtitle: "Google Developer Groups (GDG On Campus) - جامعة بنها",
        description: "معسكر مكثف بواقع 36 ساعة تدريبية ركز على أساسيات تطوير الويب الحديث، المشاركة في ورش العمل الفنية، وتطبيق أفضل الممارسات لبناء الواجهات.",
        type: "bootcamp",
        badge: "معسكر مكثف",
        certificates: [
          {
            id: "gdg-cert-1",
            title: "شهادة إتمام معسكر Front-End (36 ساعة) - جامعة بنها & GDG",
            image: frontGDG,
            studentId: "",
            link: "#"
          }
        ]
      },
      {
        id: "english-course",
        period: "فبراير 2025 - سبتمبر 2025",
        title: "برنامج اللغة الإنجليزية العامة (12 مستواً)",
        subtitle: "جامعة عين شمس والكلية الكندية بالقاهرة (CIC)",
        description: "إتمام برنامج مكثف بواقع 160 ساعة تدريبية معتمدة لتعزيز مهارات التواصل باللغة الإنجليزية، وتطوير المفردات التقنية والمهنية بتقدير ممتاز.",
        type: "language",
        badge: "تطوير ذاتي",
        certificates: [
          {
            id: "eng-cert-canadian",
            title: "شهادة الكلية الكندية بالقاهرة (CIC) - 12 مستواً (تقدير ممتاز)",
            image: canadianCollege,
            link: "#"
          },
          {
            id: "eng-cert-ain-shams",
            title: "شهادة جامعة عين شمس & Glory Academy - 12 مستواً",
            image: ainShams,
            studentId: "30605301300631",
            link: "#"
          }
        ]
      }
    ]
  },

  education: {
    title: "التعليم والتدريب",
    subtitle: "المسيرة الأكاديمية والتدريب العلمي",
    degrees: [
      {
        title: "بكالوريوس علوم الحاسب (Computer Science)",
        institution: "كلية الحاسبات والذكاء الاصطناعي، جامعة بنها",
        date: "سبتمبر 2024 - متوقع يونيو 2028",
        location: "بنها، القليوبية",
        description: "طالب بحاسبات وذكاء اصطناعي، متخصص في تطوير الويب المتكامل (Full-Stack).",
      },
    ],
    courses: [
      {
        name: "مبادرة رواد مصر الرقمية (DEPI) - الدورة 5",
        provider: "شركة AST",
        date: "أغسطس 2026 - الحالي",
        location: "بنها، القليوبية",
      },
      {
        name: "تدريب تطوير الواجهات الأمامية (React.js)",
        provider: "SEF Academy",
        date: "يوليو 2026 - أغسطس 2026",
        location: "القاهرة",
      },
      {
        name: "تطوير الخلفية (Node.js & MongoDB)",
        provider: "SEF Academy",
        date: "فبراير 2026 - مايو 2026",
        location: "القاهرة",
      },
      {
        name: "معسكر أساسيات الواجهات الأمامية",
        provider: "GDG Benha (مجموعات مطوري جوجل)",
        date: "فبراير 2026",
        location: "بنها، القليوبية",
      },
      {
        name: "تطوير الواجهات الأمامية (React & Bootstrap 5)",
        provider: "SEF Academy",
        date: "مايو 2025 - ديسمبر 2025",
        location: "القاهرة",
      },
    ],
    languages: [
      { name: "العربية", level: "اللغة الأم" },
      { name: "الإنجليزية", level: "متوسط (Intermediate)" },
    ],
  },

  contact: {
    title: "تواصل معي",
    subtitle: "يسعدني العمل معك على مشاريع جديدة",
    email: "youssef.taha.6278@gmail.com",
    phone: "+201118086832",
    location: "الشرقية، مصر",
    form: {
      namePlaceholder: "الاسم بالكامل",
      emailPlaceholder: "البريد الإلكتروني",
      phonePlaceholder: "الهاتف",
      messagePlaceholder: "رسالتك...",
      submitBtn: "إرسال الرسالة",
    },
  },

  footer: {
    rights: "جميع الحقوق محفوظة © يوسف طه ",
    backToTop: "للأعلى",
  },
};