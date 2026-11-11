// Canonical topic identities. Keep voice, sequencing, and chat-specific teaching
// choices out of this file so each topic room can develop its own character.
const topicRegistry = [
  {
    id: "media-literacy",
    name: "Media Literacy",
    scale: "smaller",
    purpose: "Notice how media systems select, frame, amplify, and monetize representations of reality.",
    logo: "images/channels/media-literacy.svg",
    icon: "scan-eye"
  },
  {
    id: "home-maintenance-repair",
    name: "Home Maintenance & Repair",
    scale: "smaller",
    purpose: "Recognize household systems, common failure modes, safe boundaries, and the logic behind repairs.",
    logo: "images/channels/home-maintenance-repair.svg",
    icon: "house"
  },
  {
    id: "auto-maintenance-repair",
    name: "Auto Maintenance & Repair",
    scale: "smaller",
    purpose: "Understand a vehicle as interacting mechanical, electrical, thermal, and control systems.",
    logo: "images/channels/auto-maintenance-repair.svg",
    icon: "car-front"
  },
  {
    id: "computer-maintenance",
    name: "Computer Maintenance",
    scale: "smaller",
    purpose: "Diagnose hardware and software problems through evidence, isolation, recovery, and prevention.",
    logo: "images/channels/computer-maintenance.svg",
    icon: "monitor-cog"
  },
  {
    id: "recent-economic-trends",
    name: "Recent Economic Trends",
    scale: "smaller",
    purpose: "Interpret current economic change through incentives, institutions, measurements, and uncertainty.",
    logo: "images/channels/recent-economic-trends.svg",
    icon: "chart-no-axes-combined"
  },
  {
    id: "recent-laboratory-innovations",
    name: "Recent Laboratory Innovations",
    scale: "smaller",
    purpose: "Reconstruct the principles, experimental dialogue, and accumulated work behind new scientific capabilities.",
    logo: "images/channels/recent-laboratory-innovations.svg",
    icon: "microscope"
  },
  {
    id: "hardware-components-functions",
    name: "Hardware Components and Functions",
    scale: "smaller",
    purpose: "Follow information and energy through the physical components that make computation possible.",
    logo: "images/channels/hardware-components-functions.svg",
    icon: "cpu"
  },
  {
    id: "prosocial-development",
    name: "Prosocial Development",
    scale: "smaller",
    purpose: "Develop socially healthy perception, communication, reciprocity, boundaries, and repair without treating personality as a defect.",
    logo: "images/channels/prosocial-development.svg",
    icon: "heart-handshake"
  },
  {
    id: "modern-career-networking",
    name: "Modern Career Networking",
    scale: "smaller",
    purpose: "Build durable professional relationships through contribution, curiosity, repeated contact, and visible work.",
    logo: "images/channels/modern-career-networking.svg",
    icon: "network"
  },
  {
    id: "calculus-ii",
    name: "Calculus II",
    scale: "larger",
    purpose: "Extend change and accumulation into techniques, sequences, series, approximation, and richer models.",
    logo: "images/channels/calculus-ii.svg",
    icon: "sigma"
  },
  {
    id: "physics-i",
    name: "Physics I",
    scale: "larger",
    purpose: "Build quantitative models of motion, force, energy, momentum, rotation, and oscillation.",
    logo: "images/channels/physics-i.svg",
    icon: "orbit"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    scale: "larger",
    purpose: "Understand security through cryptology, networks, administration, forensics, analysis, and authorized testing.",
    logo: "images/channels/cybersecurity.svg",
    icon: "shield-check"
  },
  {
    id: "linux-command-line",
    name: "Linux Command Line",
    scale: "larger",
    purpose: "Use the shell as a composable language for inspecting, transforming, and administering systems.",
    logo: "images/channels/linux-command-line.svg",
    icon: "terminal"
  },
  {
    id: "foundation-discrete-mathematics",
    name: "Foundation for Discrete Mathematics",
    scale: "larger",
    purpose: "Develop the language of logic, proof, sets, relations, counting, graphs, and recurrence before a formal course begins.",
    logo: "images/channels/foundation-discrete-mathematics.svg",
    icon: "binary"
  },
  {
    id: "basic-software-engineering",
    name: "Basic Software Engineering",
    scale: "larger",
    purpose: "Understand how algorithms, data structures, architecture, documentation, data, and testing produce dependable software.",
    logo: "images/channels/basic-software-engineering.svg",
    icon: "blocks"
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    scale: "larger",
    purpose: "Build AWS and GitHub fluency by connecting infrastructure, identity, networking, automation, observability, and cost.",
    logo: "images/channels/cloud-computing.svg",
    icon: "cloud-cog"
  },
  {
    id: "ai-literacy",
    name: "AI Literacy",
    scale: "larger",
    purpose: "Reason about AI capabilities, limitations, ethics, trends, and professional use without mystification or reflexive hype.",
    logo: "images/channels/ai-literacy.svg",
    icon: "brain-circuit"
  }
];
