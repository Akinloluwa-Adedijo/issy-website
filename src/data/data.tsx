export interface workData {
  title: string;
  category: string;
  year: number;
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
}

export const workData: workData[] = [
  {
    title: "In the Night I Dream",
    category: "Direction",
    year: 2025,
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.JPG",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex py-2",
      },
    ],
    roleDescription: "Writer & Director",
    description: [
      "In The Night I Dream is my first short film. It is a spiritual thriller - a visually captivating dialogue light experience, that explores the captivating journey of Ada - a young woman burdened by self discovery and doubt, as she learns to embrace her extraordinary gifts.",
      "Led the design team",
      "After pitching and applying to the Global Impact Program with Montreal International Film Festival, I was accepted onto the program and have gained mentorship through the process as well as access to investors.",
    ],
  },
  {
    title: "FWUT-Visualizer",
    category: "Direction",
    year: 2025,
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.JPG",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex py-2",
      },
    ],
    roleDescription: "Director, Videograpgher & Editor",
    description: [
      "This is a series of visually striking music visuals designed to align with Seyi's artistic vision. With a lot yet to be released. ",
      "Keeping in theme with the album's black and gold aesthetic, the project incorporates Yoruba subtitles to honor his cultural roots, while the use of collage-style frame divisions and match-split effects enhances the dynamic storytelling. ",
      "As the director, videographer, and editor, I ensured each visualizer complemented Seyi’s sound, creating a cohesive and immersive viewing experience.",
    ],
  },
  {
    title: "Edna's World",
    category: "Direction",
    year: 2024,
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.JPG",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex py-2",
      },
    ],
    roleDescription: "Director, Videographer, Editor",
    description: [
      "Edna's World is a visually poetic project inspired by Jorja Smith's teenage Fantasy. It explores themes of nostalgia, longing, and anger through intimate cinematography and dreamy aesthetics.",
      "As the visual director, videographer and editor, I crafted a visual narrative that captures the essence of painful emotions, blending soft, natural imagery with a reflective, almost cinematic tone.",
    ],
  },
  {
    title: "VOFTD",
    category: "Direction",
    year: 2024,
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.JPG",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex py-2",
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
  },
  {
    title: "Paper Dreams",
    category: "Direction",
    year: 2024,
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.JPG",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex py-2",
      },
    ],
    roleDescription: "VFX Editor",
    description: [
      "Artist: Futondon.",
      "Song: Paper Dreams",
      "A re-edit of an already completed music video by another artist. I was requested for addtional work, specifically for VFX. In this scene, the artist wanted money flowing down to coincide with the lyrics of the chorus",
    ],
  },
  {
    title: "The Beauty of Contrasts",
    category: "Creative Direction",
    year: 2024,
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.JPG",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex py-2",
      },
    ],
    roleDescription: "Creative/ Art Direction",
    collaborators: [
      "Stephen Ng'ang'a: Photography",
      "Seyi Atilola: Light Design",
    ],
    description: [
      "The beauty of contrasts was a project led by Vancouver based photographer Stephen His aim was to juxtapose elegance and femininity against the streets - hence the location",
    ],
  },
  {
    title: "The Best of Both Worlds",
    category: "Creative Direction",
    year: 2024,
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.JPG",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex py-2",
      },
    ],
    roleDescription: "Creative Director, Make-up artist, Co-stylist, Editor",
    collaborators: [
      "Richard Goodluck: Photography",
      "Seyi Atilola: BTS Photography",
      "Deo Rodriguez: Sulemanji",
      "Ednainstyle: Stylist",
    ],
    description: [
      "The Best of Both Worlds is a creative shoot I conceptualized. My aim with this shoot was to show the multidimensions of women. Using makeup, fashion and locations, I was able to pull together looks and tell a story that women do not need to be defines as “feminine” or “masculine”, in fact women are far more complex.",
      "As a London girl, i took inspiration from my city and also current makeup trends at the time i.e Pearls. ",
    ],
  },
  {
    title: "Silent Sacrifice",
    category: "Creative Direction",
    year: 2024,
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.JPG",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex py-2",
      },
    ],
    roleDescription: "Creative Director, Lighting Director",
    collaborators: ["Angelo Pontalti: Photography"],
    description: [
      "Silent Sacrifice is a creative shoot inspired by a podcast I produced which delved ito the untold stories and feelings of first daughters. The sacrifice of self was a constant theme and feeling trapped, withg a desperation to be seen, heard and understood.",
      "My aim with this shoot was to show exactly that, hence the mood, choice of colour and choice o photography style",
    ],
  },
  {
    title: "FWUT",
    category: "Creative Direction",
    year: 2024,
    cover: [
      {
        imgSrc: "/images/home_images/issy_home.JPG",
        imgAlt: "Isioma Idehen Profile Picture",
        imgWidth: 2400,
        imgHeight: 3600,
        containerClassname: "max-h-[500px] flex py-2",
      },
    ],
    roleDescription: "Creative Director",
    collaborators: [
      "Ednainstyle & Tonoud Studio: Stylists",
      "Stephen Ng'ang'a: Photography",
    ],
    description: [
      "Silent Sacrifice is a creative shoot inspired by a podcast I produced which delved ito the untold stories and feelings of first daughters. The sacrifice of self was a constant theme and feeling trapped, withg a desperation to be seen, heard and understood.",
      "My aim with this shoot was to show exactly that, hence the mood, choice of colour and choice o photography style",
    ],
  },
];
