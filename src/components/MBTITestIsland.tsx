'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { questions, scoreAnswers } from '../data/questions';

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

export default function MBTITestIsland() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [direction, setDirection] = useState(1);

  const question = questions[index];
  const progress = (index / questions.length) * 100;

  function handleAnswer(choice: 'A' | 'B') {
    const newAnswers = { ...answers, [question.id]: choice };
    setAnswers(newAnswers);
    if (index < questions.length - 1) {
      setDirection(1);
      setIndex(index + 1);
    } else {
      const type = scoreAnswers(newAnswers);
      window.location.href = `/result/${type}`;
    }
  }

  function handleBack() {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  }

  return (
    <div className="max-w-xl mx-auto font-sans">
      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full mb-8" style={{ background: 'rgba(31,26,20,0.12)' }}>
        <motion.div
          className="h-1.5 rounded-full"
          style={{ background: '#C2855E' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      <p className="mono-cap mb-6">Question {index + 1} of {questions.length}</p>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={question.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <h2 className="font-sans font-extrabold text-2xl text-ink mb-8 leading-snug"
              style={{ letterSpacing: '-0.04em' }}>{question.text}</h2>

          <div className="flex flex-col gap-3">
            {[
              { choice: 'A' as const, label: question.optionA.label },
              { choice: 'B' as const, label: question.optionB.label },
            ].map(({ choice, label }) => (
              <button
                key={choice}
                onClick={() => handleAnswer(choice)}
                className="w-full text-left px-5 py-4 text-ink text-sm font-medium rounded-full transition-all hover:-translate-y-px hover:bg-ink hover:text-paper"
                style={{ border: '1px solid rgba(31,26,20,0.28)', letterSpacing: '-0.01em' }}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {index > 0 && (
        <button
          onClick={handleBack}
          className="mt-6 text-xs text-ink-mute hover:text-ink transition-colors font-sans"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
