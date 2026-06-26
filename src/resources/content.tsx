import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Prasad",
  lastName: "Chavan",
  name: `Prasad Chavan`,
  role: "Mechanical Design Engineer",
  avatar: "/images/avatar.jpg",
  email: "prasad2004.sci@gmail.com",
  location: "Asia/Kolkata", // IANA time zone identifier
  languages: ["English", "Hindi", "Marathi"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional notes on mechanical design and engineering projects</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/murmattijayesh/portfolio-prasad",
    essential: true,
  },
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
        <strong className="ml-4">Industrial Boiler System</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/industrial-boiler-system",
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
    display: false, // set true after adding your photo at /public/images/avatar.jpg
  },
  calendar: {
    display: true,
    link: "mailto:prasad2004.sci@gmail.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Prasad is a Pune-based mechanical design engineer in the final year of his
        B.E. in Mechanical Engineering. He specialises in CAD modelling, assembly
        design and detailed manufacturing documentation, with hands-on R&amp;D
        experience across industrial plant equipment, automotive systems and
        product design. His current focus is an Acoustic Vehicle Alerting System
        (AVAS) for pedestrian safety, the subject of his final-year thesis and a
        submitted review paper.
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
            assembly instruction drawings, with BOMs and engineering documentation
            prepared to internal standards.
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
            Designed a prototype mount for automated cleaning of pyranometer and
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
