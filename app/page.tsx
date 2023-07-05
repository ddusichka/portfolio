import Image from "next/image";

const descriptions = [
  "crocheter 🧶",
  "cat lover 🐈‍⬛",
  "tennis novice 🎾",
  "writer 🖊️",
  "trader joe's enthusiast 🛒",
  "bookworm 📚",
];
const random = descriptions[Math.floor(Math.random() * descriptions.length)];

export default function Home() {
  return (
    <div className="flex justify-around mt-8">
      <div className="mt-16 text-2xl">
        <h1 className="text-3xl font-bold mb-6">{"Hi, I'm Dessy!"}</h1>
        <h3>student, developer, and </h3>
        <h3>{random}</h3>
      </div>
      <Image src="/dessy.jpeg" alt="logo" width={300} height={300} />
    </div>
  );
}
