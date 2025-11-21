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
    bio: "Eddie Van Halen (1955-2020) fue un guitarrista y compositor neerlandés-estadounidense, cofundador de la banda Van Halen. Revolucionó la guitarra eléctrica con su técnica de tapping y su inconfundible tono. Creador de la 'Frankenstrat' y pionero del hard rock de los 80, es considerado uno de los músicos más influyentes de la historia del rock.",
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
    bio: "Slash (Saul Hudson, 1965) es un guitarrista, compositor y productor británico-estadounidense, reconocido por su papel como guitarrista principal de Guns N' Roses. Su sonido potente, su feeling bluesero y su icónica Les Paul lo convirtieron en una leyenda del rock. Tras dejar Guns N' Roses en los 90 fundó Slash's Snakepit, Velvet Revolver y más tarde Slash ft. Myles Kennedy & The Conspirators. Es autor de solos emblemáticos como los de Sweet Child O' Mine, November Rain y Paradise City.",
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
    image: "/joe-satriani-1200.jpg",
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
    bio: "Paul Gilbert (1966) es un guitarrista y compositor estadounidense, reconocido por su virtuosismo técnico y su versatilidad. Destacó en los 80 con Racer X y alcanzó fama internacional con Mr. Big (To Be with You, Green-Tinted Sixties Mind). También ha desarrollado una prolífica carrera solista y es un respetado instructor en el GIT de Los Ángeles.",
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
  {
    id: "7",
    name: "Zakk Wylde",
    band: "Ozzy Osbourne\nBlack Label Society\nZakk Sabbath\nPride & Glory",
    style: "Heavy Metal / Southern Metal",
    image: "/zakk-wylde-1200.jpg",
    bio: "Zakk Wylde (1967) es un guitarrista, cantante y compositor estadounidense, conocido por su etapa con Ozzy Osbourne y por liderar Black Label Society. Su sonido agresivo, pentatónico y con abundante uso de pinch harmonics se combina con riffs densos y un tono característico Les Paul + Marshall.",
    videoUrl: "https://www.youtube.com/watch?v=ngJB8VIZNfQ",
    guitars: ["Gibson Les Paul \"Bullseye\"", "Wylde Audio Barbarian", "Marshall JCM800"],
    socials: {
      facebook: "https://www.facebook.com/zakkwylde/",
      instagram: "https://www.instagram.com/zakkwyldebls/",
      youtube: "https://www.youtube.com/results?search_query=Zakk+Wylde",
    },
  },
  {
    id: "8",
    name: "George Lynch",
    band: "Dokken\nLynch Mob\nKXM\nThe End Machine",
    style: "Hard Rock / Shred",
    image: "/george-lynch-1200.jpg",
    bio: "George Lynch (1954) es un guitarrista estadounidense reconocido por su trabajo en Dokken durante los 80 y su proyecto Lynch Mob. Famoso por un vibrato expresivo, frases cromáticas y un tono afilado, dejó solos icónicos como 'Mr. Scary' y 'In My Dreams'.",
    videoUrl: "https://www.youtube.com/watch?v=tSMCv3Qeafg",
    guitars: ["ESP Kamikaze", "ESP Tiger", "Rand Guitars", "Marshall Super Lead"],
    socials: {
      facebook: "https://www.facebook.com/georgelynchofficial/",
      instagram: "https://www.instagram.com/georgelynchofficial/",
      youtube: "https://www.youtube.com/results?search_query=George+Lynch",
    },
  },
  {
    id: "9",
    name: "Dave Mustaine",
    band: "Megadeth\nMetallica (temprano)",
    style: "Thrash Metal",
    image: "/dave-mustaine-1200.jpg",
    bio: "Dave Mustaine (1961) es un guitarrista, vocalista y compositor estadounidense, fundador y líder de Megadeth. Pionero del thrash metal, combinó riffs rápidos, precisión rítmica y armonías gemelas influyendo a generaciones. Coescribió temas clave en los inicios de Metallica antes de crear Megadeth en 1983.",
    videoUrl: "https://www.youtube.com/watch?v=9d4ui9q7eDM",
    guitars: ["Gibson/Kramer Flying V", "Dean V / Zero", "Marshall amplifiers", "Floyd Rose tremolo"],
    socials: {
      facebook: "https://www.facebook.com/davemustaine/",
      instagram: "https://www.instagram.com/davemustaine/",
      youtube: "https://www.youtube.com/results?search_query=Dave+Mustaine",
    },
  },
  {
    id: "10",
    name: "Richie Kotzen",
    band: "The Winery Dogs\nPoison\nSolista",
    style: "Rock / Blues / Fusion",
    image: "https://thisisrock.es/web2020/wp-content/uploads/2024/09/Escucha-lo-nuevo-de-Richie-Kotzen-%E2%80%98Insomnia.jpg",
    bio: "Virtuoso multiinstrumentista con un estilo que mezcla rock, soul y blues, conocido por su fraseo vocal y guitarristico muy expresivo.",
    videoUrl: "https://www.youtube.com/watch?v=HLLD_jQOI6w",
    guitars: ["Fender Telecaster", "PRS Signature", "Cornford amps"],
    socials: {
      facebook: "https://www.facebook.com/richiekotzenmusic/",
      instagram: "https://www.instagram.com/richie_kotzen/",
      youtube: "https://www.youtube.com/results?search_query=Richie+Kotzen",
    },
  },
  {
    id: "11",
    name: "Richie Sambora",
    band: "Bon Jovi\nSolista",
    style: "Rock / Hard Rock",
    image: "https://www.concierto.cl/wp-content/uploads/2023/07/Richie-Sambora-jpeg.webp",
    bio: "Guitarrista de Bon Jovi con un sonido mel\u00f3dico y coros caracter\u00edsticos; autor de riffs y solos ic\u00f3nicos de los 80 y 90.",
    videoUrl: "https://www.youtube.com/watch?v=9SKFwtgUJHs",
    guitars: ["Fender Stratocaster", "Gibson Les Paul", "Talkbox"],
    socials: {
      facebook: "https://www.facebook.com/richiesambora/",
      instagram: "https://www.instagram.com/therealsambora/",
      youtube: "https://www.youtube.com/results?search_query=Richie+Sambora",
    },
  },
  {
    id: "12",
    name: "Jerry Cantrell",
    band: "Alice in Chains\nSolista",
    style: "Grunge / Alternative Metal",
    image: "https://cdn-images.dzcdn.net/images/artist/8008e2154c414206316b1e0bf155fe55/1900x1900-000000-81-0-0.jpg",
    bio: "Cerebro sonoro de Alice in Chains; mezcla riffs pesados, afinaciones bajas y armon\u00edas vocales oscuras.",
    videoUrl: "https://www.youtube.com/watch?v=zTuD8k3JvxQ",
    guitars: ["G&L Rampage", "Gibson Les Paul Custom", "Bogner Uberschall"],
    socials: {
      facebook: "https://www.facebook.com/jerrycantrell/",
      instagram: "https://www.instagram.com/jerrycantrell/",
      youtube: "https://www.youtube.com/results?search_query=Jerry+Cantrell",
    },
  },
  {
    id: "13",
    name: "Steve Morse",
    band: "Deep Purple\nDixie Dregs\nSteve Morse Band",
    style: "Rock / Fusion / Progressive",
    image: "https://s3.us-west-2.amazonaws.com/static.ernieball.com/website/images/striking_a_chord/image/full/3.jpg?1570556295",
    bio: "Vers\u00e1til y t\u00e9cnico, fusiona country, rock y prog con articulaci\u00f3n limpia y composiciones elaboradas.",
    videoUrl: "https://www.youtube.com/watch?v=rGNC1zoykLw",
    guitars: ["Music Man SM Signature", "ENGL amps", "PRS"],
    socials: {
      facebook: "https://www.facebook.com/stevemorse/",
      instagram: "https://www.instagram.com/stevemorse/",
      youtube: "https://www.youtube.com/results?search_query=Steve+Morse",
    },
  },
  {
    id: "14",
    name: "Adrian Vandenberg",
    band: "Whitesnake\nVandenberg",
    style: "Hard Rock",
    image: "https://www.whitesnake-blog.com/img/CxETiX8XcAE0qp4.jpg-large.jpg",
    bio: "Guitarrista holand\u00e9s con tono cl\u00e1sico de hard rock, recordado por su etapa en Whitesnake y su banda Vandenberg.",
    videoUrl: "https://www.youtube.com/watch?v=Wy88qBV24g8",
    guitars: ["Ibanez Destroyer", "Fender Stratocaster", "Marshall amps"],
    socials: {
      facebook: "https://www.facebook.com/adriaan.vandenberg/",
      instagram: "https://www.instagram.com/adrvdb/",
      youtube: "https://www.youtube.com/results?search_query=Adrian+Vandenberg",
    },
  },
  {
    id: "15",
    name: "Ritchie Blackmore",
    band: "Deep Purple\nRainbow",
    style: "Hard Rock / Neoclassical",
    image: "https://www.scienceofnoise.net/wp-content/uploads/2019/06/rs-183508-113914425-e1559079168616.jpg",
    bio: "Pionero del hard rock y del fraseo neocl\u00e1sico; riffs como Smoke on the Water definieron generaciones.",
    videoUrl: "https://www.youtube.com/watch?v=zUwEIt9ez7M",
    guitars: ["Fender Stratocaster scalloped", "Marshall Major", "Engl amps"],
    socials: {
      facebook: "https://www.facebook.com/RitchieBlackmore/",
      instagram: "https://www.instagram.com/ritchieblackmore/",
      youtube: "https://www.youtube.com/results?search_query=Ritchie+Blackmore",
    },
  },
  {
    id: "16",
    name: "Gary Moore",
    band: "Thin Lizzy\nColosseum II\nSolista",
    style: "Blues Rock / Hard Rock",
    image: "https://cdn.mos.cms.futurecdn.net/9Qb39cBNuPNyMNh5ewfZ3k.jpg",
    bio: "Legado de lirismo y sustain; pas\u00f3 del hard rock al blues con un tono lleno de sentimiento.",
    videoUrl: "https://www.youtube.com/watch?v=4O_YMLDvvnw",
    guitars: ["Gibson Les Paul 'Greeny'", "PRS Singlecut", "Marshall JTM"],
    socials: {
      facebook: "https://www.facebook.com/garymoore/",
      instagram: "https://www.instagram.com/gary_moore_guitar/",
      youtube: "https://www.youtube.com/results?search_query=Gary+Moore",
    },
  },
]
