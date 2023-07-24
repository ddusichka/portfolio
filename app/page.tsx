import Image from "next/image";

const descriptions = [
  "crocheter 🧶",
  "cat mom 🐈‍⬛",
  "tennis novice 🎾",
  "writer 🖊️",
  "trader joe's enthusiast 🛒",
  "bookworm 📚",
  "puzzler 🧩",
];
const random = descriptions[Math.floor(Math.random() * descriptions.length)];

export default function Home() {
  return (
    <div>
      <div className="flex justify-around mt-8">
        <div className="mt-16 text-2xl">
          <h1 className="text-6xl mb-6">{"Hi, I'm Dessy!"}</h1>
          <h3 className="text-3xl">student, developer, and </h3>
          <h3 className="text-3xl">{random}</h3>
        </div>
        <Image src="/dessy.jpeg" alt="logo" width={300} height={300} />
      </div>
    </div>
  );
}
