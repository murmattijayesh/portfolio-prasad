import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Prasad",
  lastName: "Chavan",
  name: `Prasad Chavan`,
  role: "Mechanical Design Engineer",
  avatar: "/images/avatar.jpg",
  email: "prasad2004.ac@gmail.com",
  location: "Asia/Kolkata", // IANA time zone identifier
  languages: ["English", "Hindi", "Marathi"], // optional: leave empty to hide
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional notes on mechanical design and engineering projects</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/prasad-chavan-696a913b8/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Resume",
    icon: "document",
    link: "/prasad-chavan-resume.pdf",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Mechanical Design Engineer`,
  description: `Portfolio of ${person.name}, a mechanical design engineer specialising in CAD modelling, R&D and production-ready engineering`,
  headline: <>From concept to manufacturing-ready design</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Acoustic Vehicle Alerting System</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/acoustic-vehicle-alerting-system",
  },
  subline: (
    <>
      I'm Prasad, a final-year mechanical engineer and{" "}
      <Text as="span" size="xl" weight="strong">R&amp;D Design Intern at Aeron Systems</Text>.
      I turn ideas into detailed 3D models, manufacturing drawings and
      production-ready assemblies using SolidWorks and ANSYS.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a ${person.role} based in Pune, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: `mailto:${person.email}`,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Prasad is a Pune-based mechanical design engineer in the final year of his
        B.E. in Mechanical Engineering at PVG's College of Engineering &amp;
        Technology. He specialises in CAD modelling, assembly design and detailed
        manufacturing documentation, with hands-on R&amp;D experience across
        industrial plant equipment, automotive systems and product design. His
        current focus is an Acoustic Vehicle Alerting System (AVAS) for pedestrian
        safety — the subject of his final-year thesis and a review paper submitted
        to the Traffic Injury Prevention Journal (Q1).
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Aeron Systems",
        timeframe: "Feb 2026 – Jul 2026",
        role: "R&D Design Intern",
        achievements: [
          <>
            Created SolidWorks assemblies, detailed part drawings and step-by-step
            assembly instruction drawings, with BOMs, MICD and engineering
            documentation prepared to internal standards.
          </>,
          <>
            Applied GD&amp;T across detailed part drawings and managed multiple
            assembly configurations for production readiness.
          </>,
          <>
            Developed VBA macros in SolidWorks to automate repetitive tasks such as
            figure-label renumbering across multi-sheet drawings.
          </>,
          <>
            Designed a prototype robot for automated cleaning of pyranometer and
            albedometer lenses used in weather-monitoring systems.
          </>,
        ],
        images: [],
      },
      {
        company: "SGM Tech",
        timeframe: "Jan 2025 – Feb 2025",
        role: "Mechanical Design Intern",
        achievements: [
          <>
            Participated in the full design and development of a boiler
            manufacturing plant, from layout planning through to system integration.
          </>,
          <>
            Handled mechanical design and detailing of boiler components, piping
            layouts and auxiliary systems using CAD tools.
          </>,
          <>
            Worked on plant layout, material-flow planning and equipment placement
            to optimise manufacturing efficiency and safety.
          </>,
        ],
        images: [],
      },
      {
        company: "Team Conquistador — PVG's COET",
        timeframe: "Feb 2023",
        role: "Vehicle Dynamics Engineer",
        achievements: [
          <>
            Designed the ATV suspension system for Baja SAE, with modelling in
            SolidWorks and analysis in ANSYS.
          </>,
          <>
            Achieved 1st Runner-Up in Suspension &amp; Traction at the ATVC
            competition.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Pune Vidyarthi Griha's College of Engineering & Technology, Pune",
        description: <>B.E. in Mechanical Engineering · CGPA 7.80 / 10 · Nov 2022 – Present.</>,
      },
      {
        name: "G. K. Sapre Junior College of Science, Devrukh",
        description: <>Higher Secondary (HSC), Maharashtra State Board · 72.50% · 2022.</>,
      },
      {
        name: "New English School, Devrukh, Ratnagiri",
        description: <>Secondary (SSC), Maharashtra State Board · 89.00% · 2020.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "SolidWorks",
        description: (
          <>
            3D modelling, large assemblies, detailed drawings and configuration
            management. Comfortable preparing production-ready documentation with
            BOMs and assembly instructions.
          </>
        ),
        tags: [
          { name: "3D Modelling", icon: "cube" },
          { name: "Assemblies", icon: "wrench" },
        ],
        images: [],
      },
      {
        title: "ANSYS",
        description: (
          <>Structural, thermal and basic CFD analysis to validate and optimise designs.</>
        ),
        tags: [{ name: "Simulation", icon: "gear" }],
        images: [],
      },
      {
        title: "GD&T & Engineering Drawing",
        description: (
          <>
            2D manufacturing drawings, tolerancing and standards-compliant technical
            documentation.
          </>
        ),
        tags: [{ name: "Drafting", icon: "ruler" }],
        images: [],
      },
      {
        title: "Additive Manufacturing & Automation",
        description: (
          <>3D-printing design and prototyping, plus VBA macro automation inside SolidWorks.</>
        ),
        tags: [
          { name: "3D Printing", icon: "printer" },
          { name: "VBA Macros", icon: "code" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on mechanical design...",
  description: `Read what ${person.name} has been working on`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Mechanical design and CAD projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A collection of renders by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
