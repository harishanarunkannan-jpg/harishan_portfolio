import { useEffect, useRef, useState } from "react";
import "./App.css";

/* TIGER DETAILING IMAGES */
import tigerHome from "./assets/projects/tiger_home.png";
import tigerAppointment from "./assets/projects/appointment.png";
import tigerBookings from "./assets/projects/bookings.png";
import tigerServices from "./assets/projects/services.png";
import tigerTeam from "./assets/projects/team.png";
import tigerMiddle from "./assets/projects/middle.png";

/* LIGHT POLLUTION PROJECT IMAGES */
import lightCircuit from "./assets/projects/circuit.JPG";
import lightDiagram from "./assets/projects/diagram.png";
import lightDimensions from "./assets/projects/dimensions.png";
import lightGroup from "./assets/projects/group.JPG";
import lightPresentation from "./assets/projects/presentation.JPG";
import lightProcess from "./assets/projects/process.png";
import lightSchematic from "./assets/projects/schematic.png";

/* TASKFLOW IMAGES */
import taskflowHome from "./assets/projects/home.png";
import taskflowMulti from "./assets/projects/multi.png";
import taskflowPriority from "./assets/projects/priority.png";
import taskflowShare from "./assets/projects/share.png";
import taskflowSign from "./assets/projects/sign.png";
import taskflowDrag from "./assets/projects/drag.png";

/* CAD FAN IMAGE */
import fanImage from "./assets/projects/fan.png";

/* LINKS */
const githubProfile =
  "https://github.com/harishanarunkannan-jpg";

const linkedinProfile =
  "https://www.linkedin.com/in/harishan-arunkannan-647190274/";

const emailAddress =
  "harishan.arunkannan@gmail.com";

const tigerRepo =
  "https://github.com/harishanarunkannan-jpg/tiger-detailing-booking-platform";

const taskflowRepo =
  "https://github.com/harishanarunkannan-jpg/taskflow";

const typingPhrases = [
  "FULL-STACK DEVELOPER",
  "SOFTWARE ENGINEERING STUDENT",
  "ENGINEERING BUILDER",
  "PROBLEM SOLVER",
];

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const taskflowGallery = [
  {
    id: "sign",
    label: "AUTHENTICATION",
    image: taskflowSign,
  },
  {
    id: "home",
    label: "PROJECT BOARD",
    image: taskflowHome,
  },
  {
    id: "priority",
    label: "PRIORITIES",
    image: taskflowPriority,
  },
  {
    id: "multi",
    label: "MY TASKS",
    image: taskflowMulti,
  },
  {
    id: "drag",
    label: "DRAG & DROP",
    image: taskflowDrag,
  },
  {
    id: "share",
    label: "TEAM INVITE",
    image: taskflowShare,
  },
];

const tigerGallery = [
  {
    id: "home",
    label: "HOME",
    image: tigerHome,
  },
  {
    id: "appointment",
    label: "BOOK",
    image: tigerAppointment,
  },
  {
    id: "bookings",
    label: "MANAGE",
    image: tigerBookings,
  },
  {
    id: "services",
    label: "SERVICES",
    image: tigerServices,
  },
  {
    id: "team",
    label: "TEAM",
    image: tigerTeam,
  },
  {
    id: "middle",
    label: "PAGE",
    image: tigerMiddle,
  },
];

const lightGallery = [
  {
    id: "circuit",
    label: "CIRCUIT",
    image: lightCircuit,
  },
  {
    id: "schematic",
    label: "SCHEMATIC",
    image: lightSchematic,
  },
  {
    id: "diagram",
    label: "DIAGRAM",
    image: lightDiagram,
  },
  {
    id: "process",
    label: "PROCESS",
    image: lightProcess,
  },
  {
    id: "dimensions",
    label: "DIMENSIONS",
    image: lightDimensions,
  },
  {
    id: "group",
    label: "TEAM",
    image: lightGroup,
  },
  {
    id: "presentation",
    label: "CLIENT PRESENTATION",
    image: lightPresentation,
  },
];

const fanGallery = [
  {
    id: "fan",
    label: "VENTILATION FAN",
    image: fanImage,
  },
];

const projects = [
  {
    id: "01",
    category: "FULL-STACK SOFTWARE",
    title: "TaskFlow",

    description:
      "A full-stack project management application built to organize projects, manage tasks, and support team collaboration through a Kanban-style workflow.",

    secondary:
      "Built with React, Node.js, Express, and MySQL, TaskFlow includes secure authentication, project workspaces, task assignment, drag-and-drop task management, comments, activity history, search, filtering, and sorting.",

    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "bcrypt",
      "REST API",
      "dnd-kit",
      "Git",
    ],
  },

  {
    id: "02",
    category: "FULL-STACK",
    title: "Tiger Detailing Booking Platform",

    description:
      "A full-stack appointment management platform built for Tiger Detailing Auto Services. Customers can book, view, edit, reschedule, and cancel detailing appointments directly from home.",

    secondary:
      "The platform connects a React interface to an Express API and MySQL database, creating a complete persistent booking workflow.",

    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "Git",
    ],
  },

  {
    id: "03",
    category: "EMBEDDED SYSTEMS",
    title: "Light Pollution Measuring Device",

    description:
      "A group engineering project focused on designing and building a device capable of measuring nighttime light pollution and recording ambient-light data for analysis.",

    secondary:
      "The system combined Arduino hardware, sensors, C++ logic, circuit design, and data logging to create a functional engineering prototype.",

    contribution:
      "I aided in developing the circuit, electrical schematic, and system diagram used to explain how the device operated. I also worked with the team throughout the design and presentation process.",

    presentation:
      "Our team presented the completed product to a potential client who was interested in the device. We explained its functionality, engineering decisions, design process, and possible real-world applications.",

    stack: [
      "C++",
      "Arduino",
      "Circuit Design",
      "Schematics",
      "Sensors",
      "SD Card",
      "Embedded Systems",
      "Engineering Design",
    ],
  },

  {
    id: "04",
    category: "CAD / DESIGN",
    title: "Engineering 1050 Ventilation Fan",

    image: fanImage,

    description:
      "A functional ventilation-fan assembly designed and modelled using engineering CAD workflows.",

    secondary:
      "Modelled the blades, hub, housing, and structural supports while applying dimensional constraints, extrusions, and iterative design refinement.",

    stack: [
      "CAD",
      "Onshape",
      "3D Modelling",
      "Engineering Design",
    ],
  },
];

const skillCategories = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "INTERFACE SYSTEMS",
    description:
      "Building responsive, interactive interfaces with modern web technologies.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
  },

  {
    number: "02",
    title: "Backend",
    subtitle: "SERVER SYSTEMS",
    description:
      "Developing application logic, APIs, and persistent database-driven systems.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MySQL",
      "CRUD",
    ],
  },

  {
    number: "03",
    title: "Programming",
    subtitle: "CORE DEVELOPMENT",
    description:
      "Using multiple programming languages to solve software and engineering problems.",
    skills: [
      "Java",
      "C++",
      "Python",
      "JavaScript",
      "OOP",
    ],
  },

  {
    number: "04",
    title: "Engineering",
    subtitle: "DESIGN + HARDWARE",
    description:
      "Working across CAD, embedded systems, electronics, and physical prototyping.",
    skills: [
      "Onshape",
      "Arduino",
      "CAD",
      "Sensors",
      "Embedded Systems",
    ],
  },

  {
    number: "05",
    title: "Developer Tools",
    subtitle: "BUILD WORKFLOW",
    description:
      "Managing development workflows, source control, debugging, and project organization.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "MySQL Workbench",
      "Vite",
    ],
  },
];

const experiences = [
  {
    id: "01",
    date: "APR 2026 — JUL 2026",
    role: "Founder & Owner",
    organization: "Tiger Detailing Auto Services",
    type: "LEADERSHIP",

    description:
      "Founded and co-ran a four-person community detailing initiative focused on providing free interior and exterior vehicle cleaning for elderly residents who were physically unable to clean their own vehicles.",

    impact:
      "Coordinated service delivery, customer communication, team responsibilities, and contributed directly to servicing more than a dozen vehicles.",

    tags: [
      "Leadership",
      "Community",
      "Operations",
      "Customer Service",
    ],
  },

  {
    id: "02",
    date: "OCT 2025 — PRESENT",
    role: "Website Creator / Full-Stack Developer",
    organization: "Independent",
    type: "SOFTWARE",

    description:
      "Design and develop web experiences for organizations and small businesses using responsive frontend technologies and backend application logic.",

    impact:
      "Manage source code through Git and GitHub while translating requirements into usable digital products and deployable website structures.",

    tags: [
      "Full-Stack",
      "React",
      "JavaScript",
      "GitHub",
    ],
  },

  {
    id: "03",
    date: "2022 — 2025",
    role: "Competitive Member",
    organization: "Ontario DECA",
    type: "ACHIEVEMENT",

    description:
      "Three-time Provincial Championship qualifier and two-time Region of Peel champion competing in business case analysis and oral presentations.",

    impact:
      "Developed experience analyzing unfamiliar business situations under time pressure and communicating recommendations through competitive presentations.",

    tags: [
      "Public Speaking",
      "Business",
      "Leadership",
      "Decision Making",
    ],
  },

  {
    id: "04",
    date: "MAR 2026",
    role: "Case Competition Participant",
    organization: "1299E / 1220 Ivey Case Competition",
    type: "COMPETITION",

    description:
      "Worked with a multidisciplinary team to analyze financial and market information and develop a feasible business recommendation under time constraints.",

    impact:
      "Presented and defended recommendations using evidence-based reasoning, structured problem solving, and concise technical communication.",

    tags: [
      "Strategy",
      "Analysis",
      "Presentation",
      "Teamwork",
    ],
  },
];

function App() {
  const appRef = useRef(null);
  const visualRef = useRef(null);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const [activeExperience, setActiveExperience] =
    useState(0);

  const [activeSection, setActiveSection] =
    useState("about");

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [activeTaskflowImage, setActiveTaskflowImage] =
    useState(0);

  const [activeTigerImage, setActiveTigerImage] =
    useState(0);

  const [activeLightImage, setActiveLightImage] =
    useState(0);

  /* FULL-SCREEN GALLERY */
  const [lightboxGallery, setLightboxGallery] =
    useState([]);

  const [lightboxIndex, setLightboxIndex] =
    useState(0);

  const [lightboxTitle, setLightboxTitle] =
    useState("");

  useEffect(() => {
    const currentPhrase =
      typingPhrases[phraseIndex];

    if (isWaiting) {
      const pauseTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 1200);

      return () =>
        clearTimeout(pauseTimer);
    }

    const delay =
      isDeleting ? 38 : 75;

    const timer =
      setTimeout(() => {
        if (!isDeleting) {
          const nextText =
            currentPhrase.slice(
              0,
              typedText.length + 1
            );

          setTypedText(nextText);

          if (
            nextText === currentPhrase
          ) {
            setIsWaiting(true);
          }
        } else {
          const nextText =
            currentPhrase.slice(
              0,
              typedText.length - 1
            );

          setTypedText(nextText);

          if (nextText === "") {
            setIsDeleting(false);

            setPhraseIndex(
              (previous) =>
                (previous + 1) %
                typingPhrases.length
            );
          }
        }
      }, delay);

    return () =>
      clearTimeout(timer);
  }, [
    typedText,
    isDeleting,
    isWaiting,
    phraseIndex,
  ]);

  useEffect(() => {
    const sections =
      navItems
        .map((item) =>
          document.getElementById(
            item.id
          )
        )
        .filter(Boolean);

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (
            visibleEntries.length > 0
          ) {
            setActiveSection(
              visibleEntries[0]
                .target.id
            );
          }
        },
        {
          rootMargin:
            "-28% 0px -55% 0px",

          threshold: [
            0,
            0.1,
            0.25,
            0.5,
            0.75,
          ],
        }
      );

    sections.forEach(
      (section) => {
        observer.observe(section);
      }
    );

    return () =>
      observer.disconnect();
  }, []);

  useEffect(() => {
    const revealElements =
      document.querySelectorAll(
        ".reveal"
      );

    const observer =
      new IntersectionObserver(
        (entries, revealObserver) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  "is-visible"
                );

                revealObserver.unobserve(
                  entry.target
                );
              }
            }
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -70px 0px",
        }
      );

    revealElements.forEach(
      (element) => {
        observer.observe(
          element
        );
      }
    );

    return () =>
      observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add(
        "menu-open"
      );
    } else {
      document.body.classList.remove(
        "menu-open"
      );
    }

    return () => {
      document.body.classList.remove(
        "menu-open"
      );
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function handleResize() {
      if (
        window.innerWidth > 900
      ) {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  function openGallery(
    gallery,
    index,
    title
  ) {
    setLightboxGallery(gallery);
    setLightboxIndex(index);
    setLightboxTitle(title);
  }

  function closeGallery() {
    setLightboxGallery([]);
    setLightboxIndex(0);
    setLightboxTitle("");
  }

  function showPreviousImage() {
    if (
      lightboxGallery.length === 0
    ) {
      return;
    }

    setLightboxIndex(
      (previous) =>
        (
          previous -
          1 +
          lightboxGallery.length
        ) %
        lightboxGallery.length
    );
  }

  function showNextImage() {
    if (
      lightboxGallery.length === 0
    ) {
      return;
    }

    setLightboxIndex(
      (previous) =>
        (previous + 1) %
        lightboxGallery.length
    );
  }

  useEffect(() => {
    function handleGalleryKeyboard(
      event
    ) {
      if (
        lightboxGallery.length === 0
      ) {
        return;
      }

      if (
        event.key === "Escape"
      ) {
        closeGallery();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        event.preventDefault();

        setLightboxIndex(
          (previous) =>
            (
              previous -
              1 +
              lightboxGallery.length
            ) %
            lightboxGallery.length
        );
      }

      if (
        event.key === "ArrowRight"
      ) {
        event.preventDefault();

        setLightboxIndex(
          (previous) =>
            (previous + 1) %
            lightboxGallery.length
        );
      }
    }

    window.addEventListener(
      "keydown",
      handleGalleryKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleGalleryKeyboard
      );
    };
  }, [lightboxGallery]);

  useEffect(() => {
    if (
      lightboxGallery.length > 0
    ) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [lightboxGallery]);

  function handleMouseMove(event) {
    if (!appRef.current) return;

    appRef.current.style.setProperty(
      "--mouse-x",
      `${event.clientX}px`
    );

    appRef.current.style.setProperty(
      "--mouse-y",
      `${event.clientY}px`
    );
  }

  function handleVisualMove(event) {
    if (!visualRef.current) return;

    const rect =
      visualRef.current.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left;

    const y =
      event.clientY -
      rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateY =
      ((x - centerX) /
        centerX) *
      5;

    const rotateX =
      ((centerY - y) /
        centerY) *
      5;

    visualRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.012)
    `;
  }

  function resetVisual() {
    if (!visualRef.current) return;

    visualRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  }

  function handleCardMove(event) {
    const card =
      event.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left;

    const y =
      event.clientY -
      rect.top;

    card.style.setProperty(
      "--card-x",
      `${x}px`
    );

    card.style.setProperty(
      "--card-y",
      `${y}px`
    );
  }

  function resetCard(event) {
    const card =
      event.currentTarget;

    card.style.removeProperty(
      "--card-x"
    );

    card.style.removeProperty(
      "--card-y"
    );
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  const selectedExperience =
    experiences[
      activeExperience
    ];

  const selectedTaskflowImage =
    taskflowGallery[
      activeTaskflowImage
    ];

  const selectedTigerImage =
    tigerGallery[
      activeTigerImage
    ];

  const selectedLightImage =
    lightGallery[
      activeLightImage
    ];

  const currentLightboxImage =
    lightboxGallery[
      lightboxIndex
    ];

  return (
    <div
      className="app"
      ref={appRef}
      onMouseMove={
        handleMouseMove
      }
    >
      <div className="cursor-light"></div>

      {/* FULL-SCREEN IMAGE VIEWER */}
      {currentLightboxImage && (
        <div
          onClick={
            closeGallery
          }
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background:
              "rgba(0, 0, 0, 0.96)",
            backdropFilter:
              "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding:
              "28px 80px 60px",
          }}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeGallery();
            }}
            aria-label="Close image viewer"
            style={{
              position: "fixed",
              top: "22px",
              right: "25px",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              border:
                "1px solid rgba(255,255,255,0.2)",
              background:
                "rgba(15,18,25,0.92)",
              color: "#ffffff",
              fontSize: "29px",
              lineHeight: 1,
              cursor: "pointer",
              zIndex: 100002,
            }}
          >
            ×
          </button>

          {/* PREVIOUS */}
          {lightboxGallery.length >
            1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Previous image"
              style={{
                position:
                  "fixed",
                left: "22px",
                top: "50%",
                transform:
                  "translateY(-50%)",
                width: "58px",
                height: "70px",
                borderRadius:
                  "14px",
                border:
                  "1px solid rgba(255,255,255,0.2)",
                background:
                  "rgba(15,18,25,0.88)",
                color: "#ffffff",
                fontSize: "42px",
                cursor: "pointer",
                zIndex: 100002,
              }}
            >
              ‹
            </button>
          )}

          {/* NEXT */}
          {lightboxGallery.length >
            1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Next image"
              style={{
                position:
                  "fixed",
                right: "22px",
                top: "50%",
                transform:
                  "translateY(-50%)",
                width: "58px",
                height: "70px",
                borderRadius:
                  "14px",
                border:
                  "1px solid rgba(255,255,255,0.2)",
                background:
                  "rgba(15,18,25,0.88)",
                color: "#ffffff",
                fontSize: "42px",
                cursor: "pointer",
                zIndex: 100002,
              }}
            >
              ›
            </button>
          )}

          <div
            onClick={(event) =>
              event.stopPropagation()
            }
            style={{
              maxWidth: "94vw",
              maxHeight: "94vh",
              display: "flex",
              flexDirection:
                "column",
              alignItems:
                "center",
              justifyContent:
                "center",
              gap: "14px",
            }}
          >
            <img
              src={
                currentLightboxImage.image
              }
              alt={
                currentLightboxImage.label
              }
              style={{
                display: "block",
                maxWidth: "91vw",
                maxHeight: "82vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius:
                  "12px",
                border:
                  "1px solid rgba(255,255,255,0.15)",
                boxShadow:
                  "0 30px 100px rgba(0,0,0,0.8)",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems:
                  "center",
                gap: "16px",
                color:
                  "rgba(255,255,255,0.75)",
                fontSize: "12px",
                letterSpacing:
                  "0.12em",
                textTransform:
                  "uppercase",
              }}
            >
              <span>
                {lightboxTitle}
              </span>

              <span>
                //
              </span>

              <span>
                {
                  currentLightboxImage.label
                }
              </span>

              {lightboxGallery.length >
                1 && (
                <>
                  <span>
                    //
                  </span>

                  <span>
                    {lightboxIndex +
                      1}
                    /
                    {
                      lightboxGallery.length
                    }
                  </span>
                </>
              )}
            </div>

            {lightboxGallery.length >
              1 && (
              <span
                style={{
                  color:
                    "rgba(255,255,255,0.42)",
                  fontSize:
                    "11px",
                  letterSpacing:
                    "0.08em",
                  textTransform:
                    "uppercase",
                }}
              >
                ← Previous
                &nbsp;&nbsp; |
                &nbsp;&nbsp; Next →
              </span>
            )}
          </div>
        </div>
      )}

      <header className="navbar-shell">
        <div className="navbar">
          <a
            href="#top"
            className="logo"
            onClick={
              closeMobileMenu
            }
          >
            <span className="logo-mark">
              HA
            </span>

            <span className="logo-name">
              HARISHAN
            </span>
          </a>

          <nav className="nav-links desktop-nav">
            {navItems.map(
              (item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={
                    activeSection ===
                    item.id
                      ? "active"
                      : ""
                  }
                >
                  <span className="nav-index">
                    0{index + 1}
                  </span>

                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="navbar-actions">
            <div className="nav-socials">
              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                IN
              </a>
            </div>

            <button
              type="button"
              className={`menu-button ${
                mobileMenuOpen
                  ? "open"
                  : ""
              }`}
              onClick={() =>
                setMobileMenuOpen(
                  (previous) =>
                    !previous
                )
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div
          className={`mobile-menu ${
            mobileMenuOpen
              ? "open"
              : ""
          }`}
        >
          <div className="mobile-menu-inner">
            <div className="mobile-menu-status">
              <span></span>
              NAVIGATION SYSTEM
            </div>

            <nav className="mobile-nav-links">
              {navItems.map(
                (item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={
                      activeSection ===
                      item.id
                        ? "active"
                        : ""
                    }
                    onClick={
                      closeMobileMenu
                    }
                  >
                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {item.label}
                    </strong>

                    <i>→</i>
                  </a>
                )
              )}
            </nav>

            <div className="mobile-menu-footer">
              <span>
                SYSTEM ONLINE
              </span>

              <span>
                HARISHAN //
                PORTFOLIO
              </span>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-left">
            <div className="status-line">
              <span className="status-dot"></span>

              SYSTEM ONLINE

              <span className="path">
                ~/harishan_arunkannan
              </span>
            </div>

            <h1>
              Harishan{" "}
              <span>
                Arunkannan
              </span>
            </h1>

            <div className="typing-row">
              <span className="typing-prefix">
                &gt;
              </span>

              <span className="typing-text">
                {typedText}
              </span>

              <span className="typing-cursor"></span>
            </div>

            <p className="hero-description">
              I build practical software
              and engineering projects
              that combine creativity,
              problem solving, and
              real-world impact.
            </p>

            <div className="tech-grid">
              {[
                "React",
                "Node.js",
                "Express",
                "MySQL",
                "Java",
                "C++",
                "Git",
                "Arduino",
              ].map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="hero-buttons">
              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green"
              >
                GitHub →
              </a>

              <a
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-blue"
              >
                LinkedIn →
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Resume →
              </a>
            </div>
          </div>

          <div
            className="hero-visual"
            ref={visualRef}
            onMouseMove={
              handleVisualMove
            }
            onMouseLeave={
              resetVisual
            }
          >
            <div className="visual-scan"></div>

            <div className="core">
              <div className="core-lines"></div>

              <div className="core-inner">
                <span>HA</span>

                <small>
                  ENGINEERING SYSTEM
                </small>
              </div>

              <div className="hud-panel panel-one">
                <span>
                  PROJECT
                </span>

                <strong>
                  BUILD_01
                </strong>
              </div>

              <div className="hud-panel panel-two">
                <span>
                  STATUS
                </span>

                <strong>
                  READY
                </strong>
              </div>

              <div className="orbit orbit-one">
                <div className="orbit-node"></div>
              </div>

              <div className="orbit orbit-two">
                <div className="orbit-node second-node"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="system-strip">
          <span>DESIGN</span>
          <i>/</i>
          <span>BUILD</span>
          <i>/</i>
          <span>TEST</span>
          <i>/</i>
          <span>LEARN</span>
          <i>/</i>
          <span>IMPROVE</span>
          <i>/</i>
          <span>REPEAT</span>
        </div>

        <section
          className="about"
          id="about"
        >
          <div className="section-heading reveal">
            <div className="section-label">
              02 / ABOUT
            </div>

            <h2>
              Who <span>I Am</span>
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-copy reveal">
              <p>
                I&apos;m Harishan, a Software Engineering
                student interested in building practical
                software, engineering systems, and digital
                products. I enjoy working across both
                software and hardware, learning new
                technologies, and turning ideas into
                functional projects.
              </p>
            </div>

            <div className="stats-grid">
              {[
                ["01", "4+", "Projects Built"],
                ["02", "Full-Stack", "+ Engineering"],
                ["03", "Hands-On", "Builder"],
                ["04", "Always", "Learning"],
              ].map(
                ([number, title, label], index) => (
                  <div
                    className="stat-card interactive-card reveal"
                    key={number}
                    style={{
                      "--reveal-delay":
                        `${index * 80}ms`,
                    }}
                    onMouseMove={
                      handleCardMove
                    }
                    onMouseLeave={
                      resetCard
                    }
                  >
                    <span className="stat-number">
                      {number}
                    </span>

                    <strong>
                      {title}
                    </strong>

                    <span>
                      {label}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section
          className="experience"
          id="experience"
        >
          <div className="experience-header reveal">
            <div>
              <div className="section-label">
                03 / EXPERIENCE
              </div>

              <h2>
                Experience &amp;{" "}
                <span>
                  Leadership
                </span>
              </h2>
            </div>

            <p>
              Experience across software development,
              engineering, business, leadership, teamwork,
              and customer-facing environments.
            </p>
          </div>

          <div className="experience-layout">
            <div className="experience-timeline">
              <div className="timeline-line"></div>

              {experiences.map(
                (experience, index) => (
                  <button
                    type="button"
                    className={`timeline-item reveal ${
                      activeExperience ===
                      index
                        ? "active"
                        : ""
                    }`}
                    key={
                      experience.id
                    }
                    onClick={() =>
                      setActiveExperience(
                        index
                      )
                    }
                  >
                    <div className="timeline-node">
                      <span></span>
                    </div>

                    <div className="timeline-item-content">
                      <div className="timeline-meta">
                        <span className="timeline-id">
                          {
                            experience.id
                          }
                        </span>

                        <span className="timeline-date">
                          {
                            experience.date
                          }
                        </span>
                      </div>

                      <h3>
                        {
                          experience.role
                        }
                      </h3>

                      <p>
                        {
                          experience.organization
                        }
                      </p>
                    </div>

                    <span className="timeline-arrow">
                      →
                    </span>
                  </button>
                )
              )}
            </div>

            <div
              className="experience-detail interactive-card reveal"
              onMouseMove={
                handleCardMove
              }
              onMouseLeave={
                resetCard
              }
            >
              <div className="experience-detail-top">
                <div>
                  <span className="detail-label">
                    SELECTED RECORD
                  </span>

                  <span className="detail-number">
                    {
                      selectedExperience.id
                    }
                  </span>
                </div>

                <span className="detail-type">
                  {
                    selectedExperience.type
                  }
                </span>
              </div>

              <div className="experience-status-line">
                <span></span>
              </div>

              <p className="detail-date">
                {
                  selectedExperience.date
                }
              </p>

              <h3>
                {
                  selectedExperience.role
                }
              </h3>

              <h4>
                {
                  selectedExperience.organization
                }
              </h4>

              <p className="detail-description">
                {
                  selectedExperience.description
                }
              </p>

              <div className="impact-box">
                <span>
                  IMPACT //
                </span>

                <p>
                  {
                    selectedExperience.impact
                  }
                </p>
              </div>

              <div className="experience-tags">
                {selectedExperience.tags.map(
                  (tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          className="skills"
          id="skills"
        >
          <div className="skills-header reveal">
            <div>
              <div className="section-label">
                04 / SKILLS
              </div>

              <h2>
                Technical{" "}
                <span>
                  Systems
                </span>
              </h2>
            </div>

            <p>
              Technologies and engineering tools I use to
              move from an idea through design,
              development, testing, and implementation.
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map(
              (category, index) => (
                <article
                  className="skill-card interactive-card reveal"
                  key={
                    category.number
                  }
                  style={{
                    "--reveal-delay":
                      `${index * 70}ms`,
                  }}
                  onMouseMove={
                    handleCardMove
                  }
                  onMouseLeave={
                    resetCard
                  }
                >
                  <div className="skill-card-header">
                    <span className="skill-number">
                      {
                        category.number
                      }
                    </span>

                    <span className="skill-status">
                      ACTIVE
                    </span>
                  </div>

                  <div className="skill-accent-line"></div>

                  <p className="skill-subtitle">
                    {
                      category.subtitle
                    }
                  </p>

                  <h3>
                    {
                      category.title
                    }
                  </h3>

                  <p className="skill-description">
                    {
                      category.description
                    }
                  </p>

                  <div className="skill-list">
                    {category.skills.map(
                      (skill) => (
                        <span
                          key={skill}
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>

                  <div className="skill-corner"></div>
                </article>
              )
            )}
          </div>
        </section>

        <section
          className="projects"
          id="projects"
        >
          <div className="projects-header reveal">
            <div>
              <div className="section-label">
                05 / PROJECTS
              </div>

              <h2>
                Selected{" "}
                <span>
                  Engineering Builds
                </span>
              </h2>
            </div>

            <p>
              Software, embedded-system, and engineering
              design projects focused on solving real
              problems through hands-on development.
            </p>
          </div>

          {/* TASKFLOW */}
          <div
            className="featured-project interactive-card reveal"
            onMouseMove={
              handleCardMove
            }
            onMouseLeave={
              resetCard
            }
          >
            <div className="featured-project-media">
              <div className="featured-image-wrapper">
                <img
                  key={
                    selectedTaskflowImage.id
                  }
                  src={
                    selectedTaskflowImage.image
                  }
                  alt={`TaskFlow ${selectedTaskflowImage.label}`}
                  className="featured-project-image"
                  onClick={() =>
                    openGallery(
                      taskflowGallery,
                      activeTaskflowImage,
                      "TaskFlow"
                    )
                  }
                  style={{
                    cursor:
                      "zoom-in",
                  }}
                />

                <div className="image-status">
                  <span></span>

                  {
                    selectedTaskflowImage.label
                  }
                </div>
              </div>

              <div className="project-gallery taskflow-gallery">
                {taskflowGallery.map(
                  (item, index) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`gallery-thumbnail ${
                        activeTaskflowImage ===
                        index
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveTaskflowImage(
                          index
                        );

                        openGallery(
                          taskflowGallery,
                          index,
                          "TaskFlow"
                        );
                      }}
                    >
                      <img
                        src={
                          item.image
                        }
                        alt={
                          item.label
                        }
                        style={{
                          cursor:
                            "zoom-in",
                        }}
                      />

                      <span>
                        {
                          item.label
                        }
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="featured-info">
              <div className="project-topline">
                <span className="project-number">
                  {
                    projects[0].id
                  }
                </span>

                <span className="project-category">
                  {
                    projects[0]
                      .category
                  }
                </span>
              </div>

              <h3>
                {
                  projects[0].title
                }
              </h3>

              <p className="project-description">
                {
                  projects[0]
                    .description
                }
              </p>

              <p className="project-secondary">
                {
                  projects[0]
                    .secondary
                }
              </p>

              <div className="project-stack">
                {projects[0].stack.map(
                  (tech) => (
                    <span
                      key={tech}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="project-actions">
                <a
                  href={taskflowRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary-project-link"
                >
                  View Repository →
                </a>

                <a
                  href={taskflowRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* TIGER DETAILING */}
          <div
            className="featured-project interactive-card reveal"
            onMouseMove={
              handleCardMove
            }
            onMouseLeave={
              resetCard
            }
          >
            <div className="featured-project-media">
              <div className="featured-image-wrapper">
                <img
                  key={
                    selectedTigerImage.id
                  }
                  src={
                    selectedTigerImage.image
                  }
                  alt={`Tiger Detailing ${selectedTigerImage.label}`}
                  className="featured-project-image"
                  onClick={() =>
                    openGallery(
                      tigerGallery,
                      activeTigerImage,
                      "Tiger Detailing"
                    )
                  }
                  style={{
                    cursor:
                      "zoom-in",
                  }}
                />

                <div className="image-status">
                  <span></span>

                  {
                    selectedTigerImage.label
                  }
                </div>
              </div>

              <div className="project-gallery tiger-gallery">
                {tigerGallery.map(
                  (item, index) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`gallery-thumbnail ${
                        activeTigerImage ===
                        index
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveTigerImage(
                          index
                        );

                        openGallery(
                          tigerGallery,
                          index,
                          "Tiger Detailing"
                        );
                      }}
                    >
                      <img
                        src={
                          item.image
                        }
                        alt={
                          item.label
                        }
                        style={{
                          cursor:
                            "zoom-in",
                        }}
                      />

                      <span>
                        {
                          item.label
                        }
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="featured-info">
              <div className="project-topline">
                <span className="project-number">
                  {
                    projects[1].id
                  }
                </span>

                <span className="project-category">
                  {
                    projects[1]
                      .category
                  }
                </span>
              </div>

              <h3>
                {
                  projects[1].title
                }
              </h3>

              <p className="project-description">
                {
                  projects[1]
                    .description
                }
              </p>

              <p className="project-secondary">
                {
                  projects[1]
                    .secondary
                }
              </p>

              <div className="project-stack">
                {projects[1].stack.map(
                  (tech) => (
                    <span
                      key={tech}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="project-actions">
                <a
                  href={tigerRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary-project-link"
                >
                  View Repository →
                </a>

                <a
                  href={tigerRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* LIGHT POLLUTION */}
          <div
            className="featured-project light-project interactive-card reveal"
            onMouseMove={
              handleCardMove
            }
            onMouseLeave={
              resetCard
            }
          >
            <div className="featured-project-media">
              <div className="featured-image-wrapper light-image-wrapper">
                <img
                  key={
                    selectedLightImage.id
                  }
                  src={
                    selectedLightImage.image
                  }
                  alt={`Light Pollution Project ${selectedLightImage.label}`}
                  className="featured-project-image light-project-image"
                  onClick={() =>
                    openGallery(
                      lightGallery,
                      activeLightImage,
                      "Light Pollution"
                    )
                  }
                  style={{
                    cursor:
                      "zoom-in",
                  }}
                />

                <div className="image-status">
                  <span></span>

                  {
                    selectedLightImage.label
                  }
                </div>
              </div>

              <div className="project-gallery light-gallery">
                {lightGallery.map(
                  (item, index) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`gallery-thumbnail ${
                        activeLightImage ===
                        index
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveLightImage(
                          index
                        );

                        openGallery(
                          lightGallery,
                          index,
                          "Light Pollution"
                        );
                      }}
                    >
                      <img
                        src={
                          item.image
                        }
                        alt={
                          item.label
                        }
                        style={{
                          cursor:
                            "zoom-in",
                        }}
                      />

                      <span>
                        {
                          item.label
                        }
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="featured-info">
              <div className="project-topline">
                <span className="project-number">
                  {
                    projects[2].id
                  }
                </span>

                <span className="project-category">
                  {
                    projects[2]
                      .category
                  }
                </span>
              </div>

              <h3>
                {
                  projects[2].title
                }
              </h3>

              <p className="project-description">
                {
                  projects[2]
                    .description
                }
              </p>

              <p className="project-secondary">
                {
                  projects[2]
                    .secondary
                }
              </p>

              <div className="project-contribution">
                <span>
                  MY CONTRIBUTION //
                </span>

                <p>
                  {
                    projects[2]
                      .contribution
                  }
                </p>
              </div>

              <div className="client-presentation-box">
                <div className="client-presentation-top">
                  <span className="client-dot"></span>

                  CLIENT PRESENTATION
                </div>

                <p>
                  {
                    projects[2]
                      .presentation
                  }
                </p>
              </div>

              <div className="project-stack">
                {projects[2].stack.map(
                  (tech) => (
                    <span
                      key={tech}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* CAD FAN */}
          <div className="project-grid single-project-grid">
            <article
              className="project-card interactive-card reveal"
              onMouseMove={
                handleCardMove
              }
              onMouseLeave={
                resetCard
              }
            >
              <div className="project-card-top">
                <span className="project-number">
                  {
                    projects[3].id
                  }
                </span>

                <span className="project-category">
                  {
                    projects[3]
                      .category
                  }
                </span>
              </div>

              <div className="project-card-visual real-project-visual">
                <img
                  src={
                    projects[3].image
                  }
                  alt="Engineering 1050 Ventilation Fan CAD model"
                  className="project-real-image"
                  onClick={() =>
                    openGallery(
                      fanGallery,
                      0,
                      "Engineering 1050 Ventilation Fan"
                    )
                  }
                  style={{
                    cursor:
                      "zoom-in",
                  }}
                />

                <div className="project-image-overlay">
                  <span>
                    CAD MODEL
                  </span>
                </div>
              </div>

              <h3>
                {
                  projects[3].title
                }
              </h3>

              <p className="project-description">
                {
                  projects[3]
                    .description
                }
              </p>

              <p className="project-secondary">
                {
                  projects[3]
                    .secondary
                }
              </p>

              <div className="project-stack">
                {projects[3].stack.map(
                  (tech) => (
                    <span
                      key={tech}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </article>
          </div>
        </section>

        <section
          className="contact"
          id="contact"
        >
          <div className="contact-header reveal">
            <div>
              <div className="section-label">
                06 / CONTACT
              </div>

              <h2>
                Let&apos;s Build{" "}
                <span>
                  Something
                </span>
              </h2>
            </div>

            <p>
              Interested in collaborating, talking
              software, discussing an engineering project,
              or just connecting? My inbox and profiles are
              open.
            </p>
          </div>

          <div className="contact-layout">
            <div
              className="contact-main interactive-card reveal"
              onMouseMove={
                handleCardMove
              }
              onMouseLeave={
                resetCard
              }
            >
              <div className="contact-status">
                AVAILABLE FOR NEW OPPORTUNITIES
              </div>

              <h3>
                Have an idea?
                <br />
                Let&apos;s talk.
              </h3>

              <p>
                I&apos;m always interested in learning about
                new projects, software ideas, engineering
                challenges, and opportunities to build
                useful things.
              </p>

              <div className="contact-actions">
                <a
                  href={`mailto:${emailAddress}`}
                  className="contact-button contact-button-primary"
                >
                  SEND EMAIL →
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  VIEW RESUME →
                </a>
              </div>
            </div>

            <div className="contact-terminal reveal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>
                  contact_terminal
                </span>
              </div>

              <div className="terminal-content">
                <div className="terminal-row">
                  <span className="terminal-key">
                    EMAIL
                  </span>

                  <span className="terminal-value">
                    {emailAddress}
                  </span>
                </div>

                <div className="terminal-row">
                  <span className="terminal-key">
                    GITHUB
                  </span>

                  <a
                    href={githubProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-value"
                  >
                    harishanarunkannan-jpg
                  </a>
                </div>

                <div className="terminal-row">
                  <span className="terminal-key">
                    LINKEDIN
                  </span>

                  <a
                    href={linkedinProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-value"
                  >
                    harishan-arunkannan
                  </a>
                </div>

                <div className="terminal-divider"></div>

                <div className="terminal-command">
                  <span className="terminal-prompt">
                    &gt;
                  </span>

                  <span>
                    status: ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="social-grid">
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div>
                <span>01</span>
                <small>DEVELOPMENT</small>
              </div>

              <strong>GitHub</strong>

              <span className="social-arrow">
                ↗
              </span>
            </a>

            <a
              href={linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div>
                <span>02</span>
                <small>PROFESSIONAL</small>
              </div>

              <strong>LinkedIn</strong>

              <span className="social-arrow">
                ↗
              </span>
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="social-card"
            >
              <div>
                <span>03</span>
                <small>DIRECT</small>
              </div>

              <strong>Email</strong>

              <span className="social-arrow">
                ↗
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <div className="footer-logo">
            HA
          </div>

          <div>
            <strong>
              Harishan Arunkannan
            </strong>

            <span>
              Software Engineering
              Portfolio
            </span>
          </div>
        </div>

        <div className="footer-center">
          <span className="footer-status-dot"></span>

          SYSTEM ONLINE
        </div>

        <div className="footer-right">
          <span>
            BUILT WITH REACT
          </span>

          <span>
            © 2026
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;