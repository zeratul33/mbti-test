export interface Question {
  id: number;
  text: string;
  optionA: { label: string; dimension: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P' };
  optionB: { label: string; dimension: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P' };
}

export const questions: Question[] = [
  {
    id: 1,
    text: "At a party, you tend to:",
    optionA: { label: "Introduce yourself to many new people", dimension: 'E' },
    optionB: { label: "Stick with the friends you already know", dimension: 'I' },
  },
  {
    id: 2,
    text: "After a long social event, you feel:",
    optionA: { label: "Energized and ready for more", dimension: 'E' },
    optionB: { label: "Drained and needing quiet time", dimension: 'I' },
  },
  {
    id: 3,
    text: "When solving a problem, you focus on:",
    optionA: { label: "The concrete facts and what is proven", dimension: 'S' },
    optionB: { label: "Patterns, possibilities, and future potential", dimension: 'N' },
  },
  {
    id: 4,
    text: "You prefer instructions that are:",
    optionA: { label: "Step-by-step and specific", dimension: 'S' },
    optionB: { label: "General, leaving room for interpretation", dimension: 'N' },
  },
  {
    id: 5,
    text: "When making a decision, you prioritize:",
    optionA: { label: "Logic, consistency, and objective analysis", dimension: 'T' },
    optionB: { label: "How people involved will feel", dimension: 'F' },
  },
  {
    id: 6,
    text: "Friends describe you as more:",
    optionA: { label: "Direct and straightforward", dimension: 'T' },
    optionB: { label: "Warm and empathetic", dimension: 'F' },
  },
  {
    id: 7,
    text: "Your workspace is typically:",
    optionA: { label: "Organized with a clear system", dimension: 'J' },
    optionB: { label: "Flexible, organized in your own way", dimension: 'P' },
  },
  {
    id: 8,
    text: "When starting a project, you prefer to:",
    optionA: { label: "Plan everything out before beginning", dimension: 'J' },
    optionB: { label: "Dive in and figure it out as you go", dimension: 'P' },
  },
  {
    id: 9,
    text: "Deadlines make you feel:",
    optionA: { label: "Focused — you work best with structure", dimension: 'J' },
    optionB: { label: "Stressed — you do your best work with freedom", dimension: 'P' },
  },
  {
    id: 10,
    text: "You trust more in:",
    optionA: { label: "Your direct experience and observations", dimension: 'S' },
    optionB: { label: "Your gut instincts and hunches", dimension: 'N' },
  },
];

export type MBTIType =
  | 'intj' | 'intp' | 'entj' | 'entp'
  | 'infj' | 'infp' | 'enfj' | 'enfp'
  | 'istj' | 'isfj' | 'estj' | 'esfj'
  | 'istp' | 'isfp' | 'estp' | 'esfp';

export function scoreAnswers(answers: Record<number, string>): MBTIType {
  const counts: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  for (const [idStr, choice] of Object.entries(answers)) {
    const id = Number(idStr);
    const q = questions.find((q) => q.id === id);
    if (!q) continue;
    const dim = choice === 'A' ? q.optionA.dimension : q.optionB.dimension;
    counts[dim]++;
  }

  const ei = counts['E'] >= counts['I'] ? 'e' : 'i';
  const sn = counts['S'] >= counts['N'] ? 's' : 'n';
  const tf = counts['T'] >= counts['F'] ? 't' : 'f';
  const jp = counts['J'] >= counts['P'] ? 'j' : 'p';

  return `${ei}${sn}${tf}${jp}` as MBTIType;
}
