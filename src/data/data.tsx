export interface workData {
  title: string;
  category: string;
  year: number;
  accentColor: string;
  gridCol?: string;
  externalLink?: string;
  cover?: {
    imgSrc: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
    containerClassname?: string;
  }[];
  roleDescription: string;
  collaborators?: string[];
  description: string[];
  referenceImages?: {
    imgSrc: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
    containerClassname?: string;
  }[];
  finalImages?: {
    imgSrc: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
    containerClassname?: string;
  }[];
  shootImages?: {
    imgSrc: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
    containerClassname?: string;
  }[];
  upcomingImages?: {
    imgSrc: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
    containerClassname: string;
  }[];
}

export const workData: workData[] = [
  {
    title: "In the Night I Dream",
    category: "Direction",
    year: 2025,
    accentColor: "accent-in-the-night",
    gridCol: "5/11",
    cover: [
      {
        imgSrc: "/images/in_the_night_i_dream/In_the_night_i_dream_1.webp",
        imgAlt: "Cover Image of In the Night I Dream",
        imgWidth: 6000,
        imgHeight: 3375,
        containerClassname: "flex",
      },
    ],
    roleDescription: "Writer & Director",
    description: [
      "In The Night I Dream is my first short film. It is a spiritual thriller - a visually captivating dialogue light experience, that explores the captivating journey of Ada - a young woman burdened by self discovery and doubt, as she learns to embrace her extraordinary gifts.",
      // "Led the design team",
      "After pitching and applying to the Global Impact Program with Montreal International Film Festival, I was accepted onto the program and have gained mentorship through the process as well as access to investors.",
    ],
    upcomingImages: [
      {
        imgSrc: "/images/in_the_night_i_dream/In_the_night_i_dream_1.webp",
        imgAlt: "Image of Workflow and references",
        imgWidth: 6000,
        imgHeight: 3375,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/in_the_night_i_dream/In_the_night_i_dream_2.webp",
        imgAlt: "Image of Workflow and references",
        imgWidth: 6000,
        imgHeight: 3375,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/in_the_night_i_dream/In_the_night_i_dream_3.webp",
        imgAlt: "Image of Workflow and references",
        imgWidth: 6000,
        imgHeight: 3375,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/in_the_night_i_dream/In_the_night_i_dream_4.webp",
        imgAlt: "Image of Workflow and references",
        imgWidth: 6000,
        imgHeight: 3375,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/in_the_night_i_dream/In_the_night_i_dream_5.webp",
        imgAlt: "Image of Workflow and references",
        imgWidth: 6000,
        imgHeight: 3375,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/in_the_night_i_dream/In_the_night_i_dream_6.webp",
        imgAlt: "Image of Workflow and references",
        imgWidth: 6000,
        imgHeight: 3375,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/in_the_night_i_dream/In_the_night_i_dream_7.webp",
        imgAlt: "Image of Workflow and references",
        imgWidth: 6000,
        imgHeight: 3375,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/in_the_night_i_dream/In_the_night_i_dream_8.webp",
        imgAlt: "Image of Workflow and references",
        imgWidth: 6000,
        imgHeight: 3375,
        containerClassname: "min-h-screen flex",
      },
    ],
  },
  {
    title: "FWUT-Visualizer",
    category: "Direction",
    year: 2025,
    accentColor: "accent-fwut-visualizer",
    gridCol: "1 / 9",
    cover: [
      {
        imgSrc: "/gifs/fwut_viz.gif",
        imgAlt: "FWUT Visualizer",
        imgWidth: 800,
        imgHeight: 450,
        containerClassname: "flex",
      },
    ],
    roleDescription: "Director, Videograpgher & Editor",
    description: [
      "This is a series of visually striking music visuals designed to align with Seyi's artistic vision. ",
      "Keeping in theme with the album's black and gold aesthetic, the project incorporates Yoruba subtitles to honor his cultural roots, while the use of collage-style frame divisions and match-split effects enhances the dynamic storytelling. ",
    ],
    referenceImages: [
      {
        imgSrc: "/gifs/fwut_viz_reference.gif",
        imgAlt: "FWUT Vizualizer Reference",
        imgWidth: 600,
        imgHeight: 338,
        containerClassname: "max-h-[500px] flex",
      },
    ],
    finalImages: [
      {
        imgSrc: "/gifs/fwut_viz.gif",
        imgAlt: "FWUT Visualizer",
        imgWidth: 800,
        imgHeight: 450,
        containerClassname: "max-h-min flex",
      },
    ],
  },
  {
    title: "Edna's World",
    category: "Direction",
    year: 2024,
    accentColor: "accent-edna-world",
    gridCol: "6/12",
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.webp",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "flex",
      },
    ],
    roleDescription: "Director, Videographer, Editor",
    description: [
      "Edna's World is a visually poetic project inspired by Jorja Smith's teenage Fantasy. It explores themes of nostalgia, longing, and anger through intimate cinematography and dreamy aesthetics.",
      "As the visual director, videographer and editor, I crafted a visual narrative that captures the essence of painful emotions, blending soft, natural imagery with a reflective, almost cinematic tone.",
    ],
    referenceImages: [
      {
        imgSrc: "/images/home_images/issy_home.webp",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex",
      },
    ],
    finalImages: [
      {
        imgSrc: "/images/home_images/issy_home.webp",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex",
      },
    ],
  },
  {
    title: "Dear Creative",
    category: "Direction",
    year: 2024,
    accentColor: "accent-dear-creative",
    gridCol: "2/13",
    cover: [
      {
        imgSrc: "/gifs/dear_creative.gif",
        imgAlt: "FWUT Visualizer",
        imgWidth: 800,
        imgHeight: 450,
        containerClassname: "flex",
      },
    ],
    roleDescription: "Director, Videographer, Editor",
    description: [
      "I created Dear Creative at a time when I was emerging from what I call my creative hell—a season of self-doubt, identity confusion, and suppressed artistry. I was still figuring out who I was, what stories I wanted to tell, and how I wanted to tell them. At its core, this project was born out of a need—to create something I needed to see myself. Something motivational, something honest",
    ],
    finalImages: [
      {
        imgSrc: "/gifs/dear_creative.gif",
        imgAlt: "FWUT Visualizer",
        imgWidth: 800,
        imgHeight: 450,
        containerClassname: "max-h-min flex",
      },
    ],
    externalLink: "www.youtube.com",
  },
  {
    title: "VOFTD",
    category: "Direction",
    year: 2024,
    accentColor: "accent-voftd",
    gridCol: "3 / 10",
    cover: [
      {
        imgSrc: "/gifs/voftd.gif",
        imgAlt: "Voices of the first daughter Video Preview",
        imgWidth: 800,
        imgHeight: 450,
        containerClassname: "max-h-[70vh] flex",
      },
    ],
    roleDescription: "Podcast Producer, Editor",
    collaborators: [
      "Carson Sharp: Videographer and Editor",
      "Seyi Atilola: Light Design",
    ],
    description: [
      "VOTFD: Voices of the first daughter, is an audio visual podcast where we dive into the untold stories of first daughters who bear the weight of family expectations, hidden struggles, and sacrifices. through intimate conversations, we share our experiences of responsibility, and loneliness, and the pressure to always be  'the strong one'",
    ],

    finalImages: [
      {
        imgSrc: "/gifs/voftd.gif",
        imgAlt: "Voices of the first daughter Video Preview",
        imgWidth: 800,
        imgHeight: 450,
        containerClassname: "max-h-min flex",
      },
    ],
    externalLink: "www.youtube.com",
  },
  {
    title: "Paper Dreams",
    category: "Direction",
    year: 2024,
    accentColor: "accent-paper-dreams",
    gridCol: "1/13",
    cover: [
      {
        imgSrc: "/gifs/paper_dreams.gif",
        imgAlt: "Paper Dreams Video Preview",
        imgWidth: 800,
        imgHeight: 450,
        containerClassname: "max-h-[70vh] flex",
      },
    ],
    roleDescription: "VFX Editor",
    description: [
      "Artist: Futondon.",
      "Song: Paper Dreams",
      "A re-edit of an already completed music video by another artist. I was requested for addtional work, specifically for VFX. In this scene, the artist wanted money flowing down to coincide with the lyrics of the chorus",
    ],
    finalImages: [
      {
        imgSrc: "/gifs/paper_dreams.gif",
        imgAlt: "Paper Dreams Video Preview",
        imgWidth: 800,
        imgHeight: 450,
        containerClassname: "max-h-min flex",
      },
    ],
  },
  {
    title: "The Beauty of Contrasts",
    category: "Creative Direction",
    year: 2024,
    accentColor: "accent-the-beauty",
    gridCol: "5/12",
    cover: [
      {
        imgSrc: "/images/beauty_of_contrasts/boc_1.webp",
        imgAlt: "Model in an Alleyway",
        imgWidth: 1284,
        imgHeight: 1585,
        containerClassname: " flex",
      },
    ],
    roleDescription: "Creative/ Art Direction",
    collaborators: ["Stephen Ng'ang'a: Photography", "Edna Mbewe: Styling"],
    description: [
      "The beauty of contrasts was a project led by Vancouver based photographer Stephen His aim was to juxtapose elegance and femininity against the streets - hence the location",
    ],
    shootImages: [
      {
        imgSrc: "/images/beauty_of_contrasts/boc_1.webp",
        imgAlt: "Model in an Alleyway",
        imgWidth: 1284,
        imgHeight: 1585,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/beauty_of_contrasts/boc_2.webp",
        imgAlt: "Model in an Alleyway",
        imgWidth: 1284,
        imgHeight: 1585,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/beauty_of_contrasts/boc_3.webp",
        imgAlt: "Model in an Alleyway",
        imgWidth: 1284,
        imgHeight: 1585,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/beauty_of_contrasts/boc_4.webp",
        imgAlt: "Model in an Alleyway",
        imgWidth: 1284,
        imgHeight: 1585,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/beauty_of_contrasts/boc_5.webp",
        imgAlt: "Model in an Alleyway",
        imgWidth: 1284,
        imgHeight: 1585,
        containerClassname: "min-h-screen flex",
      },
    ],
  },
  {
    title: "The Best of Both Worlds",
    category: "Creative Direction",
    year: 2024,
    accentColor: "accent-best-of-both",
    gridCol: "4/9",
    cover: [
      {
        imgSrc: "/images/best_of_both_worlds/bobw-1.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "max-h-[70vh] flex",
      },
    ],
    roleDescription: "Creative Director/ Art Director, Editor",
    collaborators: [
      "Richard Goodluck: Photography",
      "Seyi Atilola: BTS Photography",
      "Deo Rodriguez: Sulemanji",
      "Edna Mbewe: Stylist",
    ],
    description: [
      "The Best of Both Worlds is a creative shoot I conceptualized. My aim with this shoot was to show the multidimensions of women. Using makeup, fashion and locations, I was able to pull together looks and tell a story that women do not need to be defines as “feminine” or “masculine”, in fact women are far more complex.",
    ],
    shootImages: [
      {
        imgSrc: "/images/best_of_both_worlds/bobw-1.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-2.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-3.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-4.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-5.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-6.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-7.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-8.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-9.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-10.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/best_of_both_worlds/bobw-11.webp",
        imgAlt: "Model in a Skatepark",
        imgWidth: 3200,
        imgHeight: 4800,
        containerClassname: "min-h-screen flex",
      },
    ],
  },
  {
    title: "Silent Sacrifice",
    category: "Creative Direction",
    year: 2024,
    accentColor: "accent-silent-sacrifice",
    gridCol: "5/ 13",
    cover: [
      {
        imgSrc: "/images/silent_sacrifice/ss-1.webp",
        imgAlt: "Model standing in a booth",
        imgWidth: 1536,
        imgHeight: 2408,
        containerClassname: "max-h-[70vh] flex",
      },
    ],
    roleDescription: "Creative Director, Lighting Director",
    collaborators: ["Angelo Pontalti: Photography"],
    description: [
      "Silent Sacrifice is a creative shoot inspired by a podcast I produced which delved ito the untold stories and feelings of first daughters. The sacrifice of self was a constant theme and feeling trapped, withg a desperation to be seen, heard and understood.",
    ],
    shootImages: [
      {
        imgSrc: "/images/silent_sacrifice/ss-1.webp",
        imgAlt: "Model standing in a booth",
        imgWidth: 1536,
        imgHeight: 2408,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/silent_sacrifice/ss-2.webp",
        imgAlt: "Model standing in a booth",
        imgWidth: 1536,
        imgHeight: 2408,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/silent_sacrifice/ss-3.webp",
        imgAlt: "Model standing in a booth",
        imgWidth: 1536,
        imgHeight: 2408,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/silent_sacrifice/ss-4.webp",
        imgAlt: "Model standing in a booth",
        imgWidth: 1536,
        imgHeight: 2408,
        containerClassname: "min-h-screen flex",
      },
      {
        imgSrc: "/images/silent_sacrifice/ss-5.webp",
        imgAlt: "Model standing in a booth",
        imgWidth: 1536,
        imgHeight: 2408,
        containerClassname: "min-h-screen flex",
      },
    ],
  },
  {
    title: "FWUT",
    category: "Creative Direction",
    year: 2024,
    accentColor: "accent-fwut",
    gridCol: "2/8",
    cover: [
      {
        imgSrc: "/images/fwut/fwut_1.webp",
        imgAlt: "FWUT Video Image Preview",
        imgWidth: 3648,
        imgHeight: 5472,
        containerClassname: "max-h-[70vh] flex",
      },
    ],
    roleDescription: "Creative Director",
    collaborators: [
      "Edna Mbewe & Tonoud Studio: Stylists",
      "Stephen Ng'ang'a: Photography",
    ],
    description: [
      "FWUT (F**k what you think) is the lead single for Seyi, The Poet’s upcoming album. His vision for the album cover was to infuse his Nigerian-Yoruba roots with western influence, specifically including tribal marks as the covers main statement and focus. Through research I was able to bring the tribal marks to life -specifically to his region of origin. ",
    ],

    shootImages: [
      {
        imgSrc: "/images/fwut/fwut_1.webp",
        imgAlt: "FWUT Video Image Preview",
        imgWidth: 3648,
        imgHeight: 5472,
        containerClassname: "min-h-[500px] flex",
      },
      {
        imgSrc: "/images/fwut/fwut_2.webp",
        imgAlt: "FWUT Video Image Preview",
        imgWidth: 3648,
        imgHeight: 5472,
        containerClassname: "min-h-[500px] flex",
      },
      {
        imgSrc: "/images/fwut/fwut_3.webp",
        imgAlt: "FWUT Video Image Preview",
        imgWidth: 3648,
        imgHeight: 5472,
        containerClassname: "min-h-[500px] flex",
      },
    ],
  },
];
