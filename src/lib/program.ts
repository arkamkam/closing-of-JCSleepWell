export const EVENT = {
  themeEn:
    "Jockey Club Sleep Well Project Finale cum International Conference 2026",
  themeZh: "賽馬會樂眠無憂計劃成果分享暨國際研討會2026",
  venue: "The Chinese University of Hong Kong (CUHK)",
  venueZh: "香港中文大學",
  date: "September 14, 2026",
  dateZh: "2026年9月14日",
  timeRange: "9:30 AM – 6:00 PM",
};

export type ProgramItem = {
  id: string;
  timeStart: string;
  timeEnd: string;
  title: string;
  speaker?: string;
  kind: "ceremony" | "keynote" | "symposium" | "break" | "panel" | "other";
  symposiumId?: string;
  talkTitle?: string;
};

export type SymposiumBlock = {
  id: string;
  title: string;
  timeStart: string;
  timeEnd: string;
  talks: { title: string; speaker: string; speakerId?: string }[];
};

export const programItems: ProgramItem[] = [
  {
    id: "welcome",
    timeStart: "09:30",
    timeEnd: "09:40",
    title: "Welcoming Speech",
    speaker: "Dean",
    kind: "ceremony",
  },
  {
    id: "officiating",
    timeStart: "09:40",
    timeEnd: "10:00",
    title: "Officiating Speech",
    speaker: "Rep from JC and Gov",
    kind: "ceremony",
  },
  {
    id: "photo",
    timeStart: "10:00",
    timeEnd: "10:05",
    title: "Group Photo",
    kind: "ceremony",
  },
  {
    id: "outcome",
    timeStart: "10:05",
    timeEnd: "10:25",
    title: "JC Sleep Well Project Outcome Presentation",
    speaker: "Prof. Wing",
    kind: "other",
  },
  {
    id: "agency",
    timeStart: "10:25",
    timeEnd: "11:00",
    title: "Agency sharing on JC sleep well project",
    speaker: "Rep from NGOs",
    kind: "other",
  },
  {
    id: "tea1",
    timeStart: "11:00",
    timeEnd: "11:15",
    title: "Tea Break",
    kind: "break",
  },
  {
    id: "keynote1",
    timeStart: "11:15",
    timeEnd: "12:00",
    title: "Keynote Session 1",
    speaker: "Prof. Charles Morin",
    kind: "keynote",
  },
  {
    id: "keynote2",
    timeStart: "12:00",
    timeEnd: "12:45",
    title: "Keynote Session 2",
    speaker: "Prof. Lu Lin (To be confirmed)",
    kind: "keynote",
  },
  {
    id: "lunch",
    timeStart: "12:45",
    timeEnd: "14:00",
    title: "Lunch",
    kind: "break",
  },
  {
    id: "symposium1",
    timeStart: "14:00",
    timeEnd: "15:00",
    title:
      "Symposium 1: Sleep problems across lifespans: risk factors, consequence and intervention",
    kind: "symposium",
    symposiumId: "s1",
  },
  {
    id: "symposium2",
    timeStart: "15:00",
    timeEnd: "16:00",
    title:
      "Symposium 2: Sleep well, feel well: targeting sleep problems to improve mental health",
    kind: "symposium",
    symposiumId: "s2",
  },
  {
    id: "tea2",
    timeStart: "16:00",
    timeEnd: "16:20",
    title: "Tea Break",
    kind: "break",
  },
  {
    id: "symposium3",
    timeStart: "16:20",
    timeEnd: "17:20",
    title:
      "Symposium 3: Digital sleep intervention: Challenges and future directions",
    kind: "symposium",
    symposiumId: "s3",
  },
  {
    id: "panel",
    timeStart: "17:20",
    timeEnd: "18:00",
    title: "Panel discussion",
    speaker: "To be confirmed",
    kind: "panel",
  },
];

export const symposiumBlocks: SymposiumBlock[] = [
  {
    id: "s1",
    title:
      "Sleep problems across lifespans: risk factors, consequence and intervention",
    timeStart: "14:00",
    timeEnd: "15:00",
    talks: [
      {
        title:
          "Subtyping insomnia disorder using digital multi-modal approaches",
        speaker: "Dr. Jihui Zhang",
      },
      {
        title:
          "Living Against the Clock: Circadian Misalignment and Its Consequences",
        speaker: "Dr. Joey Chan",
        speakerId: "joey-chan",
      },
      {
        title:
          "REM sleep behavior disorder: a window for preventing neurodegeneration",
        speaker: "Dr. Bei Huang",
        speakerId: "bei-huang",
      },
    ],
  },
  {
    id: "s2",
    title:
      "Sleep well, feel well: targeting sleep problems to improve mental health",
    timeStart: "15:00",
    timeEnd: "16:00",
    talks: [
      {
        title:
          "Cognitive Behavioural Therapy for Insomnia in the Context of Comorbid Mental Health Conditions in Youths",
        speaker: "Dr. Shirley Li",
      },
      {
        title:
          "Cognitive Behavioral Therapy for Insomnia and Tai Chi for Elderly",
        speaker: "Dr. Danny Yu",
        speakerId: "danny-yu",
      },
      {
        title: "Using digital CBT-I as a preventive measure for depression",
        speaker: "Dr. Sijing Chen",
        speakerId: "sijing-chen",
      },
    ],
  },
  {
    id: "s3",
    title: "Digital sleep intervention: challenges and future directions",
    timeStart: "16:20",
    timeEnd: "17:20",
    talks: [
      {
        title:
          "Exploring AI Chatbot-Based Interventions to Alleviate Insomnia",
        speaker: "Dr. Tim Li",
      },
      {
        title: "The potential and challenges of robots in sleep health",
        speaker: "Dr. Leo Fan",
      },
      {
        title:
          "Implementation science for digital CBT-I in real-world setting",
        speaker: "Dr. Rachel Chan",
      },
    ],
  },
];

export type Speaker = {
  id: string;
  name: string;
  role: string;
  photo?: string;
  biography: string;
  presentationTitle?: string;
  abstract?: string;
};

/** Display order (論資排輩): row 1 Joey | Joanne; row 2 Danny | Sijing */
export const speakers: Speaker[] = [
  {
    id: "joey-chan",
    name: "Dr. Joey Wing-yan Chan",
    role: "Associate Professor (Clinical), Department of Psychiatry, CUHK",
    photo: "/res/joeyc.jpg",
    presentationTitle:
      "Living Against the Clock: Circadian Misalignment and Its Consequences",
    biography:
      "Dr. Joey Wing-yan Chan is an Associate Professor (Clinical) in the Department of Psychiatry at The Chinese University of Hong Kong. Her research focuses on sleep and circadian rhythms and their roles in neuropsychiatric disorders, with notable contributions to circadian-focused interventions and non-pharmacological chronotherapeutic treatments.",
  },
  {
    id: "bei-huang",
    name: "Dr. Bei Huang",
    role: "Assistant Professor, Department of Psychiatry, CUHK",
    photo: "/res/dr.beihuang.jpg",
    presentationTitle:
      "REM sleep behavior disorder: a window for preventing neurodegeneration",
    biography:
      "Dr. Bei Huang is an Assistant Professor in the Department of Psychiatry at The Chinese University of Hong Kong. Her research focuses on the epidemiology, pathophysiology, and diagnosis of neurodegenerative and sleep disorders, with primary interest in the gut-brain axis in REM sleep behavior disorder and Parkinson's disease.",
    abstract:
      "The gut-brain axis is emerging as a crucial player in neurodegeneration. This talk explores isolated REM sleep behavior disorder (iRBD) as an early-warning window, presenting metagenomic findings from a Hong Kong cohort and discussing gut-based diagnostics and interventions.",
  },
  {
    id: "danny-yu",
    name: "Dr. Danny Yu",
    role: "Assistant Professor, School of Chinese Medicine, Hong Kong Baptist University",
    photo: "/res/" + encodeURIComponent("profile pic_dannyu.jpeg"),
    presentationTitle:
      "Cognitive Behavioral Therapy for Insomnia and Tai Chi for Elderly",
    biography:
      "Dr. Danny Yu is an Assistant Professor at the School of Chinese Medicine, Hong Kong Baptist University. He earned his PhD from the Li Ka Shing Faculty of Medicine, The University of Hong Kong, in 2022, followed by postdoctoral fellowship training at the Department of Psychiatry, The Chinese University of Hong Kong, in 2024. His research program develops integrative interventions for sleep and mental disorders, bridging Traditional Chinese Medicine, exercise science, and psychotherapy.",
    abstract:
      "Previous evidence has established Tai Chi as a non-inferior alternative to CBT-I in specific populations. This randomized non-inferiority trial in 200 Chinese adults aged 50+ with chronic insomnia showed Tai Chi achieved non-inferiority to CBT-I at 12-month follow-up, supporting Tai Chi as a long-term alternative when CBT-I access is limited.",
  },
  {
    id: "sijing-chen",
    name: "Dr. Sijing Chen",
    role: "Research Assistant Professor, Department of Psychiatry, CUHK",
    photo: "/res/dr.sijing.jpg",
    presentationTitle: "Using digital CBT-I as a preventive measure for depression",
    biography:
      "Dr. Sijing Chen is a Research Assistant Professor in the Department of Psychiatry at the Chinese University of Hong Kong. Her research focuses on sleep and mental health, exploring associations of sleep disturbances with psychiatric, neurodegenerative, and physical disorders, and evaluating sleep interventions for prevention and early intervention.",
    abstract:
      "Depression affects over 1.2 billion youth worldwide. This talk discusses the relationship between sleep disorders and depression, digital therapeutics for scalable prevention, and findings from Asia's first clinical trial demonstrating digital insomnia intervention for preventing depression among at-risk youth.",
  },
];
