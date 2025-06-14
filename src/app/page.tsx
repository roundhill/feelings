"use client"
import { useState } from "react";
import styles from "./page.module.css";

// The circle component is a gradient that changes based on the mood
const VibeCircle = ({ colors }: { colors: string[] }) => {
  return (
    <div
      className={styles.vibeCircle}
      style={{ backgroundImage: `linear-gradient(-45deg, ${colors.join(", ")})` }}>
    </div>
  );
};

// Our mood colors, each is a pair of colors that match the mood
const moodColors: Record<string, string[]> = {
  happy: ["#FFD700", "#FF1493"],
  sad: ["#8B4513", "#DEB887"],
  angry: ["#E9967A", "#DC143C"],
  anxious: ["#9370DB", "#FFA500"],
  excited: ["#00FFFF", "#FF00FF"]
};

const defaultColors = ["#87CEEB", "#1E90FF"];

type MoodPickerProps = {
  moodPicked: (mood: keyof typeof moodColors) => void;
};

const MoodPicker = ({ moodPicked }: MoodPickerProps) => {
  return (
    <div className={styles.moodPicker}>
      <button onClick={() => moodPicked("happy")} title="Happy">😀</button>
      <button onClick={() => moodPicked("sad")} title="Sad">🙁</button>
      <button onClick={() => moodPicked("angry")} title="Angry">😤</button>
      <button onClick={() => moodPicked("anxious")} title="Anxious">🥺</button>
      <button onClick={() => moodPicked("excited")} title="Excited">🥳</button>
    </div>
  );
};

export default function Feelings() {
  const [colors, setColors] = useState<string[]>(defaultColors);

  // Updates the colors state to the selected mood
  const addMood = (mood: keyof typeof moodColors) => {
    setColors(moodColors[mood]);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <VibeCircle 
          colors={colors}
        />

        <p>Hi, how&rsquo;re you feeling today? See how your mood affects the vibe sphere:</p>
        <MoodPicker moodPicked={addMood} />
      </main>
      <footer>
        <p>A little demo by <a
          href="https://roundhill.blog"
          target="_blank"
          style={{ backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})` }}>Dan Roundhill</a>
        </p>
      </footer>
    </div>
  );
}
