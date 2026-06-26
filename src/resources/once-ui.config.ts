############################################################
#  PRASAD CHAVAN — PORTFOLIO CODE (all files)
#  Each section header is the file path. Replace/create that
#  file in your repo with the content below the header.
############################################################

================================================================
FILE: src/resources/content.tsx   (REPLACE WHOLE FILE — your name/details live here)
================================================================
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
        company: "SLAM Tech",
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
        timeframe: "2023",
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
        description: <>B.E. in Mechanical Engineering · CGPA 7.80 / 10 · 2022 – Present.</>,
      },
      {
        name: "G. K. Sapre Junior College of Science, Devrukh",
        description: <>Higher Secondary (HSC) · 73.50% · 2022.</>,
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
        images: [
          {
            src: "/images/projects/industrial-boiler-system/cover-01.png",
            alt: "Industrial boiler system CAD model",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/clutch-assembly/cover-01.png",
            alt: "Exploded clutch assembly",
            width: 16,
            height: 9,
          },
        ],
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
        images: [
          {
            src: "/images/projects/freelancing-packaging-design/cover-01.png",
            alt: "Manufacturing drawing with exploded view and BOM",
            width: 16,
            height: 9,
          },
        ],
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

================================================================
FILE: src/resources/icons.ts   (REPLACE WHOLE FILE)
================================================================
import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiCubeDuotone,
  PiGearDuotone,
  PiWrenchDuotone,
  PiRulerDuotone,
  PiPrinterDuotone,
  PiCodeDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  cube: PiCubeDuotone,
  gear: PiGearDuotone,
  wrench: PiWrenchDuotone,
  ruler: PiRulerDuotone,
  printer: PiPrinterDuotone,
  code: PiCodeDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;

================================================================
FILE: src/resources/once-ui.config.ts   (REPLACE WHOLE FILE)
================================================================
import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home, person, social } from "./content";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL: string = "https://demo.magic-portfolio.com";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
  "/gallery": false,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes: ProtectedRoutesConfig = {};

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style: StyleConfig = {
  theme: "system", // dark | light | system
  neutral: "slate", // sand | gray | slate | mint | rose | dusk | custom
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "rounded", // rounded | playful | conservative | sharp
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle: DataStyleConfig = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data — pulls from content.tsx so there's one source of truth
const schema: SchemaConfig = {
  logo: "",
  type: "Person",
  name: person.name,
  description: home.description,
  email: person.email,
};

// social links — derived from the social array in content.tsx to avoid duplication
const sameAs: SameAsConfig = {
  threads: social.find((s) => s.name === "Threads")?.link ?? "",
  linkedin: social.find((s) => s.name === "LinkedIn")?.link ?? "",
  discord: social.find((s) => s.name === "Discord")?.link ?? "",
};

// social sharing configuration for blog posts
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};

================================================================
FILE: src/app/work/projects/industrial-boiler-system.mdx   (NEW FILE)
================================================================
---
title: "Industrial Boiler System"
publishedAt: "2026-03-01"
summary: "A complete 3D model of an industrial boiler plant — boiler unit, heat exchanger, ducting, chimney and support structures — designed for practical layout, efficient flow routing and safe maintenance access."
images:
  - "/images/projects/industrial-boiler-system/cover-01.png"
  - "/images/projects/industrial-boiler-system/cover-02.png"
  - "/images/projects/industrial-boiler-system/cover-03.png"
---

## Overview

A full 3D model of an industrial boiler system, capturing the boiler unit, heat
exchanger, ducting, chimney and the structural steel that ties them together.
The work focused on realistic equipment layout and system integration rather than
individual parts in isolation.

## Highlights

- Modelled the complete plant assembly with proper equipment placement and clearances
- Routed ducting and flow paths for efficient operation and serviceability
- Designed access platforms and stairs for safe maintenance
- Demonstrates practical industrial mechanical design and large-assembly skills

================================================================
FILE: src/app/work/projects/air-preheater.mdx   (NEW FILE)
================================================================
---
title: "Air Preheater"
publishedAt: "2026-02-20"
summary: "An industrial air preheater that recovers heat from flue gases to improve boiler efficiency, with inlet/outlet ducts, a heat-exchange chamber, hopper section and structural supports."
images:
  - "/images/projects/air-preheater/cover-01.png"
  - "/images/projects/air-preheater/cover-02.png"
---

## Overview

A model of an industrial air preheater designed to recover heat from flue gases
and raise overall boiler efficiency. The design prioritises a compact footprint
and smooth airflow routing.

## Highlights

- Inlet and outlet ducts, heat-exchange chamber and hopper section
- Compact layout with structural supports for stable mounting
- Emphasis on smooth airflow routing and ease of installation and maintenance

================================================================
FILE: src/app/work/projects/blowdown-tank.mdx   (NEW FILE)
================================================================
---
title: "Blowdown Tank"
publishedAt: "2026-02-10"
summary: "An industrial blowdown tank that safely collects and cools high-temperature boiler blowdown water before discharge — a cylindrical pressure vessel with nozzles, inspection opening and sturdy support legs."
images:
  - "/images/projects/blowdown-tank/cover-01.png"
---

## Overview

A model of an industrial blowdown tank designed to safely collect and cool
high-temperature boiler blowdown water before discharge.

## Highlights

- Cylindrical pressure vessel with inlet/outlet nozzles and an inspection opening
- Sturdy support legs sized for stability under thermal load
- Focus on safe pressure handling, thermal durability and ease of maintenance

================================================================
FILE: src/app/work/projects/clutch-assembly.mdx   (NEW FILE)
================================================================
---
title: "Clutch Assembly"
publishedAt: "2025-09-15"
summary: "A mechanical clutch assembly showing the pressure plate, friction plates, springs, hub and outer drum — illustrating torque transmission and the spring-loaded engagement mechanism."
images:
  - "/images/projects/clutch-assembly/cover-01.png"
---

## Overview

An exploded model of a mechanical clutch assembly that clearly communicates how
the parts interact and how torque is transmitted through the system.

## Highlights

- Pressure plate, friction plates, springs, hub and outer drum
- Clear view of the torque-transmission path and spring-loaded engagement
- Demonstrates understanding of power-transmission systems, assembly sequencing
  and mechanical detailing for automotive applications

================================================================
FILE: src/app/work/projects/aerofoil-design.mdx   (NEW FILE)
================================================================
---
title: "Aerofoil Design"
publishedAt: "2025-08-10"
summary: "A 3D aerofoil built with spline-based surface modelling for a smooth, aerodynamically efficient profile, with careful attention to camber, thickness distribution and edge geometry."
images:
  - "/images/projects/aerofoil-design/cover-01.png"
  - "/images/projects/aerofoil-design/cover-02.png"
  - "/images/projects/aerofoil-design/cover-03.png"
---

## Overview

A 3D aerofoil model developed using spline-based surface modelling to achieve a
smooth, aerodynamically efficient profile.

## Highlights

- Accurate camber and thickness distribution
- Carefully defined leading- and trailing-edge geometry
- Demonstrates basic aerodynamic principles and advanced CAD surface-modelling technique

================================================================
FILE: src/app/work/projects/cleaning-robot.mdx   (NEW FILE)
================================================================
---
title: "Cleaning Robot"
publishedAt: "2025-06-20"
summary: "A compact cleaning robot for automated surface cleaning, with a low-profile body, drive mechanism and a modular internal layout for motors, cleaning components and electronics."
images:
  - "/images/projects/cleaning-robot/cover-01.png"
  - "/images/projects/cleaning-robot/cover-02.png"
---

## Overview

A compact cleaning robot designed for automated surface cleaning, with packaging
and assembly considered from the start.

## Highlights

- Low-profile body with an integrated drive mechanism
- Modular internal layout for motors, cleaning components and electronics
- Focus on compact packaging, ease of assembly and functional integration
- Demonstrates basic robotics design and mechanical system planning

================================================================
FILE: src/app/work/projects/extendable-trolley.mdx   (NEW FILE)
================================================================
---
title: "Extendable Trolley"
publishedAt: "2025-05-15"
summary: "An extendable trolley for flexible material handling, with a mechanism that adjusts width/length to suit different load sizes via a robust frame, sliding linkages and wheel assemblies."
images:
  - "/images/projects/extendable-trolley/cover-01.png"
  - "/images/projects/extendable-trolley/cover-02.png"
---

## Overview

An extendable trolley designed for flexible material handling, where the frame
adjusts to accommodate different load sizes.

## Highlights

- Adjustable width/length mechanism for varied loads
- Robust frame, sliding linkages and wheel assemblies
- Focus on structural stability, smooth extension and ease of operation
- Demonstrates practical mechanism design and assembly planning

================================================================
FILE: src/app/work/projects/freelancing-packaging-design.mdx   (NEW FILE)
================================================================
---
title: "Freelancing — Packaging Design"
publishedAt: "2025-03-10"
summary: "Client freelancing work: detailed 2D manufacturing drawings and 3D assembly models for a packaging solution, including an exploded view, BOM, part numbering and isometric views per standard drawing practice."
images:
  - "/images/projects/freelancing-packaging-design/cover-01.png"
---

## Overview

Freelance work producing detailed 2D manufacturing drawings and 3D assembly
models for a client packaging solution, delivered to standard engineering
drawing practice.

## Highlights

- Exploded assembly view with full bill of materials (BOM) and part numbering
- Isometric views and production-ready drawing sheets
- Demonstrates client-based freelancing, technical documentation and
  production-ready drawing preparation

================================================================
DELETE THESE OLD TEMPLATE FILES:
================================================================
  src/app/work/projects/simple-portfolio-builder.mdx
  src/app/work/projects/building-once-ui-a-customizable-design-system.mdx
  src/app/work/projects/automate-design-handovers-with-a-figma-to-code-pipeline.mdx
  every .mdx inside src/app/blog/posts/
  the folder public/images/projects/project-01/
