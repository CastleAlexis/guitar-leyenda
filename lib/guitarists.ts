export interface SocialLinks {
  facebook?: string
  instagram?: string
  youtube?: string
}

export interface Guitarist {
  id: string
  name: string
  band: string
  style: string
  image: string
  bio: string
  videoUrl: string
  guitars: string[]
  socials?: SocialLinks
}

export const guitarists: Guitarist[] = [
  {
    id: "1",
    name: "Eddie Van Halen",
    band: "Van Halen",
    style: "Hard Rock / Shred",
    image: "/eddie-van-halen-1200.jpg",
    bio: "Eddie Van Halen (1955–2020) fue un guitarrista y compositor neerlandés‑estadounidense, cofundador de la banda Van Halen. Revolucionó la guitarra eléctrica con su técnica de tapping y su inconfundible tono. Creador de la 'Frankenstrat' y pionero del hard rock de los 80, es considerado uno de los músicos más influyentes de la historia del rock.",
    videoUrl: "https://www.youtube.com/watch?v=L9r-NxuYszg",
    guitars: ["EVH Wolfgang", "Frankenstrat", "Kramer 5150"],
    socials: {
      facebook: "https://www.facebook.com/vanhalen/",
      instagram: "https://www.instagram.com/eddievanhalen/",
      youtube: "https://www.youtube.com/results?search_query=Eddie+Van+Halen",
    },
  },
  {
    id: "2",
    name: "Slash",
    band:
      "Guns N' Roses\nSlash's Snakepit\nVelvet Revolver\nSlash ft. Myles Kennedy & The Conspirators",
    style: "Hard Rock / Blues Rock",
    image: "/slash-guitarist-top-hat.jpg",
    bio: "Slash (Saul Hudson, 1965) es un guitarrista, compositor y productor británico‑estadounidense, reconocido por su papel como guitarrista principal de Guns N' Roses. Su sonido potente, su feeling bluesero y su icónica Les Paul lo convirtieron en una leyenda del rock. Tras dejar Guns N' Roses en los 90 fundó Slash's Snakepit, Velvet Revolver y más tarde Slash ft. Myles Kennedy & The Conspirators. Es autor de solos emblemáticos como los de Sweet Child O' Mine, November Rain y Paradise City.",
    videoUrl: "https://www.youtube.com/watch?v=1w7OgIMMRc4",
    guitars: ["Gibson Les Paul", "Gibson ES-335", "Gibson Firebird"],
    socials: {
      facebook: "https://www.facebook.com/Slash/",
      instagram: "https://www.instagram.com/slash/",
      youtube: "https://www.youtube.com/results?search_query=Slash+guitar",
    },
  },
  {
    id: "3",
    name: "Steve Vai",
    band: "Frank Zappa Band\nAlcatrazz\nDavid Lee Roth Band\nWhitesnake\nG3 Tour\nSolista",
    style: "Shred / Progressive Rock",
    image: "/steve-vai-1200.jpg",
    bio: "Steve Vai (1960) es un guitarrista, compositor y productor estadounidense, considerado uno de los músicos más virtuosos e innovadores de la guitarra eléctrica. Comenzó su carrera a finales de los 70 con Frank Zappa. Más tarde brilló junto a David Lee Roth y Whitesnake, consolidándose como un guitarrista de técnica impecable y estilo teatral. Alcanzó fama mundial con Passion and Warfare (1990). Es creador de la Ibanez JEM y Universe, pionero en guitarras de 7 cuerdas y referente del virtuosismo moderno.",
    videoUrl: "https://www.youtube.com/watch?v=TI0JBo0m7xE",
    guitars: ["Ibanez JEM", "Ibanez Universe", "Ibanez PIA"],
    socials: {
      facebook: "https://www.facebook.com/stevevai/",
      instagram: "https://www.instagram.com/stevevaihimself/",
      youtube: "https://www.youtube.com/results?search_query=Steve+Vai",
    },
  },
  {
    id: "4",
    name: "Joe Satriani",
    band: "G3\nChickenfoot\nDeep Purple (temporal)\nSolista",
    style: "Instrumental Rock / Shred",
    image: "/joe-satriani-guitarist.jpg",
    bio: "Joe Satriani (1956) es un guitarrista, compositor y productor estadounidense, uno de los mayores virtuosos del rock instrumental. Comenzó enseñando guitarra —entre sus alumnos estuvieron Steve Vai y Kirk Hammett— antes de lanzarse como solista. En 1987 alcanzó fama mundial con Surfing with the Alien, redefiniendo el rock instrumental con melodías expresivas y técnica impecable. Ha recibido múltiples nominaciones al Grammy y lidera el proyecto G3.",
    videoUrl: "https://www.youtube.com/watch?v=VI57QHL6ge0",
    guitars: ["Ibanez JS Series", "Marshall JVM410H", "Vox Big Bad Wah"],
    socials: {
      facebook: "https://www.facebook.com/joesatriani/",
      instagram: "https://www.instagram.com/joesatriani/",
      youtube: "https://www.youtube.com/results?search_query=Joe+Satriani",
    },
  },
  {
    id: "5",
    name: "Paul Gilbert",
    band: "Mr. Big / Racer X",
    style: "Rock, Hard Rock, Heavy Metal y Shred",
    image: "/paul-gilbert-guitarist.jpg?v=2",
    bio: "Paul Gilbert (1966) es un guitarrista y compositor estadounidense, reconocido por su virtuosismo técnico y su versatilidad. Destacó en los 80 con Racer X y alcanzó fama internacional con Mr. Big (To Be with You, Green‑Tinted Sixties Mind). También ha desarrollado una prolífica carrera solista y es un respetado instructor en el GIT de Los Ángeles.",
    videoUrl: "https://www.youtube.com/watch?v=bFhqluzBNvQ",
    guitars: ["Ibanez PGM Series", "Fender Stratocaster", "Music Man Axis"],
    socials: {
      facebook: "https://www.facebook.com/paulgilbertmusic/",
      instagram: "https://www.instagram.com/paulgilbert_official/",
      youtube: "https://www.youtube.com/results?search_query=Paul+Gilbert",
    },
  },
  {
    id: "6",
    name: "John Petrucci",
    band: "Dream Theater\nLiquid Tension Experiment\nG3 Tour\nSolista",
    style: "Progressive Metal",
    image: "/john-petrucci-guitarist.jpg",
    bio: "John Petrucci (1967) es un guitarrista, compositor y productor estadounidense, cofundador y principal compositor de Dream Theater. Reconocido por su virtuosismo y precisión, combina metal progresivo con melodías complejas y gran sentido rítmico. Ha desarrollado una destacada carrera solista y participa en las giras G3. Colabora con Ernie Ball Music Man y Mesa/Boogie en sus equipos signature.",
    videoUrl: "https://www.youtube.com/watch?v=BpO7qjGCjSc",
    guitars: ["Music Man JP Series", "Ernie Ball strings", "Mesa Boogie amps"],
    socials: {
      facebook: "https://www.facebook.com/johnpetrucci/",
      instagram: "https://www.instagram.com/johnpetrucciofficial/",
      youtube: "https://www.youtube.com/results?search_query=John+Petrucci",
    },
  },
]
