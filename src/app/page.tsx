"use client"
import { useState } from "react";
import styles from "./page.module.css";

const VibeCircle = ({ colors }: { colors: string[] }) => {
  return (
    <div className={styles.vibeCircle}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={styles.colorLayer}
          style={{
            background: color,
            animationDelay: `${index * -2}s`
          }}
        />
      ))}
    </div>
  );
};

const moodColors = {
  happy: "#fdf497",
  sad: "#fd5949",
  angry: "#d6249f",
  anxious: "#285AEB",
  excited: "#4f5bd5"
} as const;

type MoodPickerProps = {
  moodPicked: (mood: keyof typeof moodColors) => void;
};

const MoodPicker = ({ moodPicked }: MoodPickerProps) => {
  return (
    <div className={styles.moodPicker}>
      <button onClick={() => moodPicked("happy")}>😀</button>
      <button onClick={() => moodPicked("sad")}>🙁</button>
      <button onClick={() => moodPicked("angry")}>😤</button>
      <button onClick={() => moodPicked("anxious")}>🥺</button>
      <button onClick={() => moodPicked("excited")}>🥳</button>
    </div>
  );
};

export default function Home() {
  const [colors, setColors] = useState<string[]>([
    moodColors.happy,
    moodColors.excited,
  ]);

  const addMood = (mood: keyof typeof moodColors) => {
    setColors([...colors, moodColors[mood]]);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <VibeCircle 
          colors={colors}
        />

        <p>Hi, how are you feeling today? See how your mood effects the vibe sphere.</p>
        <MoodPicker moodPicked={addMood} />
      </main>
    </div>
  );
}
