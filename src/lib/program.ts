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

/** Simplified day-of overview for the public homepage (full detail on /program). */
export const scheduleOverviewItems: ProgramItem[] = [
  {
    id: "opening",
    timeStart: "09:30",
    timeEnd: "11:00",
    title: "Opening Ceremony & Project Showcase",
    kind: "ceremony",
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
    kind: "keynote",
  },
  {
    id: "keynote2",
    timeStart: "12:00",
    timeEnd: "12:45",
    title: "Keynote Session 2",
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
    title: "Symposium 1",
    kind: "symposium",
    symposiumId: "s1",
  },
  {
    id: "symposium2",
    timeStart: "15:00",
    timeEnd: "16:00",
    title: "Symposium 2",
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
    title: "Symposium 3",
    kind: "symposium",
    symposiumId: "s3",
  },
  {
    id: "panel",
    timeStart: "17:20",
    timeEnd: "18:00",
    title: "Panel Discussion",
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

export const speakers: Speaker[] = [
  {
    id: "yun-kwok-wing",
    name: "Prof. Yun Kwok Wing",
    role: "Chairman and Professor, Department of Psychiatry, CUHK; Director, Li Chiu Kong Family Sleep Assessment Unit",
    photo: "/res/ProfYunKwokWING.jpg",
    biography:
      "Professor Yun Kwok Wing is currently the Chairman and Professor in the Department of Psychiatry of the Faculty of Medicine of the Chinese University of Hong Kong. He is also the Director of the Li Chiu Kong Family Sleep Assessment Unit of The Chinese University of Hong Kong. Professor Wing was awarded the distinguished national award for Sleep Medicine Scientific Technological Advance in China by the Chinese Medical Doctor Association in 2010 and distinguished contributions to the development of sleep medicine and sleep research by Chinese Sleep Research Society at 2016. He was also awarded the Teacher of the Year Awards, Faculty of Medicine, CUHK in 2012-13. He graduated from the Chinese University of Hong Kong. Professor Wing has diverse research interest in sleep and circadian medicine, psychiatric disorders, neuropsychiatry, and transcultural psychopharmacology. He has active contribution to the scientific communities, including his leadership role in the Hong Kong Society of Sleep Medicine (ex-President, HKSSM) and Asian Sleep Society of Sleep Medicine (ASSM, Vice-president). He was also involved in the World Association of Sleep Medicine (Scientific Committee, 2011, 2013 and 2015), World Sleep 2017, 2019 and 2022 (Scientific Committee) and program committee member in 2023. He has organised and chaired the Gordon Research conference on the \"Cognitive Dysfunction in Brain diseases\" in Hong Kong May 2019. He is currently serving at a few editorial boards including his role as Associate Editor in the journal 'Behavioral Sleep Medicine'. He and his research group has established the first local epidemiological data of various sleep disorders including sleep deprivation, insomnia, narcolepsy, and parasomnia. In particular, the group has studied interaction of sleep and circadian propensity with psychiatric disorders. The group has also completed a novel prevention study of insomnia among at-risk adolescents. In addition, the group has extensive work on REM Sleep behavioral disorder, a sleep disorder with high specificity in predicting future alpha-synucelinopathy neurodegeneration. Their recent familial RBD study suggested a strong familial aggregation and staging pathology of alphasynucleinopathy.",
  },
  {
    id: "charles-morin",
    name: "Prof. Charles Morin",
    role: "Keynote Speaker",
    biography: "Biography and abstract to be confirmed.",
  },
  {
    id: "jihui-zhang",
    name: "Prof. Jihui Zhang",
    role: "Professor and Associate Chief Physician, Affiliated Brain Hospital of Guangzhou Medical University",
    photo: "/res/jhzhang.jpg",
    presentationTitle:
      "Subtyping insomnia disorder using digital multi-modal approaches",
    biography:
      "Prof. Zhang Jihui is a Professor and Associate Chief Physician at the Affiliated Brain Hospital of Guangzhou Medical University, where he serves as the Vice President. His research area focuses on sleep disorders and circadian rhythms, as well as their pathogenesis. Prof. Zhang has published over 20 SCI papers in journals such as Nature Human Behaviour and Lancet Healthy Longevity, with more than 4,500 citations and an H-index of 45. He has led 11 research grants, including National Natural Science Foundation and Hong Kong government funds. He received the Young Scientist Award at the 6th World Congress of Sleep Medicine. He currently serves as Chair of the Youth Committee of the Chinese Sleep Research Society and Vice Chair of the Sleep Medicine Committee of the Cross-Straits Medicine Exchange Association.",
    abstract:
      "Insomnia disorder is highly prevalent and heterogeneous. The current classifications rely largely on subjective reports and single-domain assessments leading to the failure to capture its fully complex clinical characteristics. This talk will examine how digital multi-modal phenotyping, which integrates actigraphy, wearable EEG, ecological momentary assessment, cognitive testing, and comprehensive clinical profiling, will advance the subtyping of insomnia disorder and clarifies its clinical trajectories. We established the national Digital Multi-Modal Subtyping of Insomnia cohort (DiMOSI), which is a large-scale, multi-center, prospective study designed to collect longitudinal, real-world multi-modal data across diverse settings. Drawing on the DiMOSI cohort study, empirical data showing how integrating sleep, circadian rhythms, and mood/cognition enables the identification of reproducible insomnia subtypes, including those characterized by hyperarousal, sleep-misperception, or reward sensitivity deficits, will be presented. These subtypes of insomnia disorder differ markedly in their prognosis, and treatment response. In addition, this talk will further discuss how multi-modal digital subtyping can move beyond heterogeneity to enable truly personalized treatment in the sleep medicine practice.",
  },
  {
    id: "joey-chan",
    name: "Dr. Joey Wing-yan Chan",
    role: "Associate Professor (Clinical), Department of Psychiatry, CUHK",
    photo: "/res/joeyc.jpg",
    presentationTitle:
      "Living Against the Clock: Circadian Misalignment and Its Consequences",
    biography:
      "Dr. Joey Wing-yan Chan is an Associate Professor (Clinical) in the Department of Psychiatry at The Chinese University of Hong Kong. She received her MBChB from CUHK in 2006 and obtained the qualification of specialist in psychiatry in 2013. Her research focuses on sleep and circadian rhythms and their roles in neuropsychiatric disorders. Dr. Chan has publications in the field of insomnia, circadian disturbances and their links with affective disorders and neurodegeneration, and has made notable contributions to circadian-focused interventions. She serves as principal investigator for multiple randomized controlled trials of non-pharmacological chronotherapeutic treatments. In recognition of her clinical and academic achievements, she received the Distinguished Young Fellow Award from the Hong Kong Academy of Medicine in 2022. Dr. Chan is President of the Hong Kong Society of Sleep Medicine and serves on international and regional sleep and chronobiology committees.",
    abstract:
      "Modern society runs on an early schedule, yet a substantial proportion of individuals have an intrinsic preference for later sleep and activity times. This misalignment between biological and social clocks disproportionately affects those with an evening chronotype. This talk will examine how eveningness contributes to insomnia symptoms, irregular sleep-wake patterns, as well as its associations with mental well-being, depression, and self harm risks. Circadian-focused interventions—morning bright light therapy, timed sleep scheduling, and behavioral phase-advancing strategies—will be discussed as scalable approaches to reduce misalignment and improve both sleep and mental health outcomes. Drawing on findings from our work in sleep and circadian rhythm research, including pupillometric measurements, I will discuss mechanisms linking circadian delay to mood vulnerability, such as reduced morning light exposure and altered light sensitivity.",
  },
  {
    id: "bei-huang",
    name: "Dr. Bei Joanne Huang",
    role: "Assistant Professor, Department of Psychiatry, CUHK",
    photo: "/res/dr.beihuang.jpg",
    presentationTitle:
      "Gut Feelings and Brain Health: Tracking the Microbiome in REM sleep behavior disorder",
    biography:
      "Dr. Bei Huang is an Assistant Professor in the Department of Psychiatry at The Chinese University of Hong Kong (CUHK). She earned a medical degree with honours from Soochow University and completed postgraduate neurology training at Naval Medical University, as well as a Ph.D. in medical sciences (2021) from CUHK. Her research focuses on the epidemiology, pathophysiology, and diagnosis of neurodegenerative and sleep disorders, with a primary interest in the gut-brain axis in REM sleep behavior disorder (RBD) and Parkinson's disease. Specifically, she explores gut microbiota, metabolomics, and inflammatory pathways to develop novel gut-based diagnostics and early interventions. Dr. Huang's work is supported by multiple competitive grants (HMRF, RGC-GRF, RGC-CRF) and has resulted in over 20 publications in top-tier journals, including Nature Communications and Annals of Neurology.",
    abstract:
      "The \"gut-brain axis\" is emerging as a crucial player in neurodegeneration, including Parkinson's disease (PD), with gut dysbiosis and inflammation potentially triggering the spread of harmful proteins to the brain. However, pinpointing the specific microbes responsible for this process is incredibly difficult, as our gut microbiomes are heavily influenced by everyday factors like diet, lifestyle, and age. To overcome this hurdle, researchers are turning to a specific early-warning condition: a sleep disorder known as isolated REM sleep behavior disorder (iRBD). Because the vast majority of iRBD patients eventually develop PD or related neurodegenerative diseases, this group provides a unique \"window\" to study how these diseases begin long before major neurological symptoms appear. This talk will explore the gut-brain connection by focusing on this critical prodromal stage. We will present our foundational work from a large-scale Hong Kong cohort, utilizing deep metagenomic sequencing to characterize the progressive ecological shifts of the gut microbiome during this early window of neurodegeneration. We will explore how these microbial shifts correlate with lifestyle factors, especially dietary habits, and discuss how the microbiota-gut-brain axis relates to clinical heterogeneity, such as the co-occurrence of RBD and depression. Ultimately, we will highlight the need for future research to prioritize mechanistic inquiries, validate targeted gut-based interventions (e.g., probiotics, dietary strategies), and develop robust, gut-derived biomarkers for early risk stratification and disease prevention.",
  },
  {
    id: "shirley-li",
    name: "Prof. Shirley X. Li",
    role: "Associate Professor, Department of Psychology, The University of Hong Kong",
    photo: "/res/ShirleyLi.jpg",
    presentationTitle:
      "Cognitive behavioural therapy for insomnia in the context of comorbid mental health conditions in youth",
    biography:
      "Dr. Li is an associate professor from Department of Psychology, The University of Hong Kong. She obtained her PhD in Medical Sciences (Psychiatry) from The Chinese University of Hong Kong and received her Doctorate in Clinical Psychology (DClinPsy) from University College London. She is a clinical psychologist by training. Her clinical and research interests centre on sleep and sleep disorders, particularly sleep disturbance and mental health, and psychological and behavioural treatments of sleep problems in the context of psychiatric and medical illnesses in children and adults. She received the Elio Lugaresi WASM Award for Sleep Medicine from the World Association of Sleep Medicine in 2009. She was awarded the Young Investigator Award in the World Congress on Sleep Medicine in 2013 and 2015 respectively. She also received 2017 Outstanding Early Investigator Award (Honorable Mention) from Sleep Research Society.",
    abstract:
      "Youth represents a distinct transitional period marked by various biological and psychosocial changes, which may increase vulnerability to both sleep disturbances and mental health problems. Insomnia is among the most common sleep complaints in this age group and often co-occur with other mental health conditions, including anxiety and depression. Despite strong evidence supporting cognitive behavioural therapy for insomnia (CBT-I) as the first-line treatment for chronic insomnia in adults, there are currently no specific clinical guidelines for the management of insomnia in youth. This talk will present emerging evidence on the evidence of CBT-I in youth. It will discuss findings from randomised controlled trials testing different modalities of CBT-I and the implementation of CBT-I in the context of comorbid mental health conditions in youth.",
  },
  {
    id: "danny-yu",
    name: "Dr. Danny Yu",
    role: "Assistant Professor, School of Chinese Medicine, Hong Kong Baptist University",
    photo: "/res/" + encodeURIComponent("profile pic_dannyu.jpeg"),
    presentationTitle:
      "Cognitive Behavioral Therapy for Insomnia and Tai Chi for Elderly",
    biography:
      "Dr. Danny Yu is an Assistant Professor at the School of Chinese Medicine, Hong Kong Baptist University. He earned his PhD from the Li Ka Shing Faculty of Medicine, The University of Hong Kong, in 2022, followed by postdoctoral fellowship training at the Department of Psychiatry, The Chinese University of Hong Kong, in 2024. Dr. Yu's research program is dedicated to the development of integrative interventions for sleep and mental disorders, bridging Traditional Chinese Medicine (TCM), exercise science, and psychotherapy. As a specialist in evidence-based methodology, he possesses extensive expertise in conducting rigorous randomized controlled trials, epidemiological studies, and high-level evidence syntheses (systematic reviews and meta-analyses). His scholarly contributions have been featured in premier medical journals, including The BMJ, The Lancet Child & Adolescent Health, and the British Journal of Sports Medicine. In 2025, Dr. Yu was awarded the Top 10 Traditional Chinese Medicine Academic Advancements in China. Beyond research, Dr. Yu is committed to knowledge transfer and community engagement, spearheading initiatives including the Jockey Club TCM-driven Mental Wellness Project to promote sleep and mental wellbeing in the community.",
    abstract:
      "Previous clinical evidence has established Tai Chi, a mind-body exercise, as a non-inferior alternative to Cognitive Behavioral Therapy for Insomnia (CBT-I) in specific populations, such as breast cancer survivors. However, because insomnia patients with an oncology history exhibit distinct clinical characteristics, the long-term potential of Tai Chi for the broader middle-aged and older population required further validation. This randomized non-inferiority trial, recently published in the BMJ, addressed this gap by recruiting 200 Chinese adults (aged ≥ 50) with chronic insomnia in Hong Kong. Participants were randomized (1:1) to receive 24 sessions of either Tai Chi or CBT-I over three months. Our findings revealed that while Tai Chi was statistically inferior to CBT-I immediately post-intervention at month 3, it successfully achieved non-inferiority at the 12-month follow-up (month 15). This study confirms that while CBT-I remains as the gold standard for treating chronic insomnia, Tai Chi could be used as an alternative approach for the long-term management of chronic insomnia in middle aged and older adults, particularly when access to CBT-I is limited.",
  },
  {
    id: "sijing-chen",
    name: "Dr. Sijing Chen",
    role: "Research Assistant Professor, Department of Psychiatry, CUHK",
    photo: "/res/dr.sijing.jpg",
    presentationTitle: "Using digital CBT-I as a preventive measure for depression",
    biography:
      "Dr. Sijing Chen is a Research Assistant Professor in the Department of Psychiatry at the Chinese University of Hong Kong. Her research focuses on sleep and mental health, with an emphasis on exploring the associations of sleep disturbances with psychiatric disorders, neurodegenerative diseases, and physical disorders and evaluating the implementation of sleep interventions to prevent and provide early intervention for mental health problems. Her research has revealed the significant impact of modifiable sleep-related risk factors, such as insomnia, on the development of mental and physical illnesses across diverse populations. She was also a principal researcher in Asia's first clinical trial demonstrating the effectiveness of digital insomnia intervention in preventing depression among youth, offering a novel and scalable treatment for youth with insomnia and depression. Dr. Chen has published over 30 peer-reviewed articles in high-impact international journals across the fields of sleep medicine, psychiatry, and neuroscience, with more than 1,500 citations.",
    abstract:
      "Depression is one of the most prevalent mental disorders, affecting 1.2 billion youth worldwide. Limited medical resources and low help-seeking rates place a significant burden on doctors, patients and their families, highlighting the need to translate modifiable risk factors into effective preventive strategies. In this talk, I will first discuss the close relationship between sleep disorders and depression, emphasizing evidence supporting sleep intervention as a promising preventive measure. I will also present recent advancements in digital therapeutics, enabling scalable and effective digital sleep interventions to prevent depression. In the second part of my talk, I will share findings from a clinical trial by our research team, which applied a digital sleep intervention to prevent depression in at-risk youth. The results underscore the importance of prevention and early intervention in ameliorating the burden of youth depression and demonstrate the potential of evidence-based digital mental health therapeutics to address significant clinical demand.",
  },
  {
    id: "tim-li",
    name: "Dr. Tim Li",
    role: "Assistant Professor, Department of Psychiatry, CUHK",
    photo: "/res/TimLi.jpg",
    presentationTitle:
      "Exploring AI Chatbot-Based Interventions to Alleviate Insomnia",
    biography:
      "Dr. Tim Li is an Assistant Professor in the Department of Psychiatry at CUHK. He earned a B.Eng. and M.Sc. in computer science (2010, 2011) and a Ph.D. in social science (2015) from the University of Hong Kong, as well as an M.A. in language studies (2021) from City University of Hong Kong. His research focuses on digital mental health, artificial intelligence, and natural language processing, with work published in international journals. Before joining CUHK, Dr. Li was an AI engineer in R&D companies, developing AI systems for mental health care. He leads several interdisciplinary projects and has received the INFORMS ISS Design Science Award (2020) and research grants to advance AI applications in sleep and mental health.",
    abstract:
      "Insomnia is a common condition with significant health and societal impacts. Although cognitive-behavioral therapy for insomnia (CBT-I) is effective, access is often limited by therapist shortages, high costs, and other barriers. Many current digital interventions lack interactivity, which reduces their effectiveness. AI chatbots are well positioned to address these challenges by offering accessible, interactive, and personalized support. Through conversational therapy, real-time feedback, and guided self-help activities, chatbots have demonstrated the ability to boost user engagement and satisfaction. This talk will explore how AI chatbot-based interventions can bridge gaps in both traditional and digital care, and their potential to transform insomnia treatment for the wider public.",
  },
  {
    id: "leo-fan",
    name: "Dr. Leo Fan",
    role: "Vice-Chancellor Assistant Professor, Department of Psychiatry, CUHK",
    photo: "/res/leofan.jpg",
    presentationTitle: "The potential and challenges of robots in sleep health",
    biography:
      "Dr. Fan Lizhou Leo is a Vice-Chancellor Assistant Professor in the Department of Psychiatry at The Chinese University of Hong Kong (CUHK). He was a postdoctoral research fellow at Harvard-MGB's AI in Medicine Program. He received a PhD in Information from University of Michigan, School of Information (UMSI) and a BS in Statistics from University of California, Los Angeles (UCLA). Dr. Fan's research centers on medical artificial intelligence with a particular focus on neurodegenerative and psychiatric disorders. His work bridges multimodal AI, large language model reasoning, and clinical applications. He has developed deep learning frameworks and AI systems for early detection of diseases such as Parkinson's disease, Alzheimer's disease, and autism spectrum disorder, and has led projects developing the AIPatient system—an AI-powered patient simulation platform that supports clinical training and diagnostic decision-making, including psychiatry-focused and persona-based modules. His work has been published in leading medical and AI venues, including Molecular Psychiatry, npj Digital Medicine, and top AI conferences such as ACL, AAAI, and EMNLP.",
    abstract:
      "Robots are emerging as a promising interface for future digital sleep interventions, with the potential to combine embodied interaction, multimodal sensing, and adaptive support in both clinical and home settings. In sleep health, robotic systems may help promote healthier routines, support symptom monitoring, encourage adherence to behavioral interventions, and provide more engaging forms of patient interaction. When integrated with wearable devices, mobile health tools, and AI-based analytic systems, robots may also help translate everyday behavioral and physiological signals into more personalized sleep support. At the same time, their use in sleep health raises important challenges. These include clinical validation, user trust and safety, privacy protection, long-term acceptability, cultural adaptation, and integration into real-world care pathways. This presentation will discuss the opportunities and limitations of robotic approaches in digital sleep intervention, and consider how future systems can be designed to be clinically meaningful, responsible, and human-centered.",
  },
  {
    id: "rachel-chan",
    name: "Dr. Rachel Chan",
    role: "Assistant Professor, Department of Psychiatry, CUHK",
    photo: "/res/rachel.jpg",
    presentationTitle:
      "Implementation science for digital CBT-I in real-world setting",
    biography:
      "Dr. Rachel Chan is currently an Assistant Professor in the Department of Psychiatry at the Faculty of Medicine, The Chinese University of Hong Kong. Dr. Chan's primary research interests focus on sleep and psychopathology, psychotherapy for sleep and mood problems and digital mental health. Her work has significantly contributed to the field through her involvement in various epidemiological studies and interventional trials aimed at improving sleep and mental health outcomes. Her research findings have been presented at numerous international conferences and published in esteemed peer-reviewed journals. She has also been recognized with several young investigator awards at international sleep conferences in 2018, 2021, and 2025 highlighting her contributions to the field. Dr. Chan is actively engaged in community service. She currently leads a large-scale insomnia project in Hong Kong, which aims to provide support to Hong Kong residents. This project reflects her commitment to addressing sleep health issues within the community and demonstrates her dedication to making a meaningful impact on public health.",
    abstract:
      "Most of the existing evidence on digital Cognitive Behavioral Therapy for Insomnia (CBT-I) comes from robust randomized controlled trials, while its implementation in real-world settings remains limited. It is widely recognized that a major challenge of digital interventions in general—and digital CBT-I in particular—is low user adherence and completion rates. This talk will focus on the implementation of digital CBT-I in real-world settings. Specifically, we will discuss its real-world effectiveness using a stepped wedge cluster randomized trial design, key challenges (including adherence and dropout), lessons learned from ongoing implementation efforts, and future directions for scaling and sustaining digital CBT-I in routine clinical and community practice.",
  },
];
