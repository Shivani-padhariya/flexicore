require("dotenv").config();
const mongoose = require("mongoose");
const Team = require("./models/Team");

const teamData = [
  {
    name: "JENIL ROJIWADIA",
    designation: "Founder & CEO",
    photo: { url: "/founder.png" },
    bio: "When I began Flexicore, India was importing the majority of its premium surfaces. I knew we had the craftsmanship, the science, and the ambition to build something world-class at home.\n\nToday, Flexicore ships to more than forty-five countries. What hasn't changed is the principle behind every slab we make: no compromise on quality, no compromise on safety, and no compromise on respect for the planet.\n\nI invite you to explore our collections and see why designers, architects, and fabricators around the world choose Flexicore for their most ambitious projects.",
    linkedinUrl: "https://linkedin.com",
    displayOrder: 1,
    isFounder: true
  },
  {
    name: "Amit Verma",
    designation: "Chief Design Officer",
    photo: { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=520&q=80" },
    linkedinUrl: "https://linkedin.com",
    displayOrder: 2,
    isFounder: false
  },
  {
    name: "Sara Khan",
    designation: "Head of R&D",
    photo: { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=520&q=80" },
    linkedinUrl: "https://linkedin.com",
    displayOrder: 3,
    isFounder: false
  },
  {
    name: "Marco Rossi",
    designation: "Operations Director",
    photo: { url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=520&q=80" },
    linkedinUrl: "https://linkedin.com",
    displayOrder: 4,
    isFounder: false
  },
  {
    name: "Lin Wei",
    designation: "Global Sales Lead",
    photo: { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=520&q=80" },
    linkedinUrl: "https://linkedin.com",
    displayOrder: 5,
    isFounder: false
  },
  {
    name: "Diego Alvarez",
    designation: "Regional Manager LATAM",
    photo: { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=520&q=80" },
    linkedinUrl: "https://linkedin.com",
    displayOrder: 6,
    isFounder: false
  },
  {
    name: "Priya Menon",
    designation: "Sustainability Lead",
    photo: { url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=520&q=80" },
    linkedinUrl: "https://linkedin.com",
    displayOrder: 7,
    isFounder: false
  },
  {
    name: "Hiroshi Tanaka",
    designation: "Head of Innovation",
    photo: { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=520&q=80" },
    linkedinUrl: "https://linkedin.com",
    displayOrder: 8,
    isFounder: false
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");
    await Team.deleteMany({});
    await Team.insertMany(teamData);
    console.log("✅ Team data seeded successfully with LinkedIn URLs!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err.message);
    process.exit(1);
  }
}

seed();
