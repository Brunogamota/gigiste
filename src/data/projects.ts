export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  category: string;
  area: string;
  description: string;
  longDescription: string;
  tags: string[];
  coverColor: string;
  accentColor: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "casa-caetetuba",
    index: "001",
    title: "Casa Caetetuba",
    subtitle: "Residência entre pedra e água",
    location: "Ubatuba, SP",
    year: "2024",
    category: "Residencial",
    area: "680 m²",
    description:
      "Uma residência que dialoga com a topografia íngreme da serra, criando plataformas que suspendem a vida cotidiana sobre a mata atlântica.",
    longDescription:
      "O projeto nasce de uma recusa à imposição. A topografia íngreme de Ubatuba não foi vencida — foi escutada. Cada nível da casa emerge do declive natural, criando terraços que flutuam sobre a vegetação. O concreto aparente capta o tempo através das marcas de forma, transformando o envelhecimento em narrativa.",
    tags: ["concreto", "mata atlântica", "sustentável", "piscina infinita"],
    coverColor: "#1A1A1A",
    accentColor: "#6B6B6B",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600&q=80",
    ],
    featured: true,
  },
  {
    id: "instituto-horizonte",
    index: "002",
    title: "Instituto Horizonte",
    subtitle: "Cultural entre concreto e céu",
    location: "São Paulo, SP",
    year: "2023",
    category: "Institucional",
    area: "4.200 m²",
    description:
      "Um centro cultural que redefine a relação entre espaço público e privado, criando sequências de compressão e expansão espacial.",
    longDescription:
      "A cidade como programa. O Instituto Horizonte foi concebido como uma dobra urbana — uma superfície que coleta o fluxo da cidade e o transforma em experiência cultural. O concreto brutalista dialoga com vidro transparente, criando uma dualidade entre opacidade e luminosidade.",
    tags: ["brutalismo", "cultural", "urbano", "concreto aparente"],
    coverColor: "#2A2A2A",
    accentColor: "#9A9A9A",
    images: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80",
    ],
    featured: true,
  },
  {
    id: "vila-minerva",
    index: "003",
    title: "Vila Minerva",
    subtitle: "Três volumes, uma família",
    location: "Brasília, DF",
    year: "2023",
    category: "Residencial",
    area: "1.100 m²",
    description:
      "Três volumes autônomos conectados por passarelas que filtram a luz do cerrado, criando um microcosmo doméstico único.",
    longDescription:
      "Fragmentar para reconectar. Os três volumes da Vila Minerva nascem da necessidade de privacidade dentro da convivência familiar. Cada módulo possui sua lógica construtiva própria — aço corten, concreto branco, madeira maçaranduba — criando uma conversa entre materiais e gerações.",
    tags: ["modular", "cerrado", "aço corten", "multi-familiar"],
    coverColor: "#111111",
    accentColor: "#8A9099",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",
    ],
    featured: true,
  },
  {
    id: "sede-vela",
    index: "004",
    title: "Sede VELA",
    subtitle: "Escritório como manifesto",
    location: "Rio de Janeiro, RJ",
    year: "2022",
    category: "Comercial",
    area: "2.800 m²",
    description:
      "A sede de uma empresa de tecnologia que nega o escritório corporativo convencional, criando um ambiente de trabalho como experiência arquitetônica.",
    longDescription:
      "Contra a arbitrariedade do open space. A VELA precisava de um espaço que refletisse sua cultura de autonomia criativa. O resultado é uma sequência de ambientes com diferentes qualidades espaciais — do silêncio contemplativo à efervescência colaborativa — todos conectados por uma espinha dorsal de vidro que captura a paisagem do Rio.",
    tags: ["corporativo", "inovação", "vidro", "paisagismo"],
    coverColor: "#1A1A1A",
    accentColor: "#A8B0BB",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200581399c4?w=1600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80",
    ],
    featured: false,
  },
  {
    id: "capella-serrana",
    index: "005",
    title: "Capella Serrana",
    subtitle: "Sagrado entre pedras",
    location: "Campos do Jordão, SP",
    year: "2022",
    category: "Institucional",
    area: "320 m²",
    description:
      "Uma pequena capella construída com pedra local e estrutura de aço, onde a luz é o principal elemento litúrgico.",
    longDescription:
      "A arquitectura do sagrado é a arquitectura da luz. Na Capella Serrana, cada abertura foi calculada para capturar a luz em momentos específicos do dia. A pedra molassa da região foi empilhada sem argamassa, permitindo que frestas deixem escapar filetes de luz que marcam as horas como um relógio solar litúrgico.",
    tags: ["religioso", "pedra natural", "luz natural", "paisagem"],
    coverColor: "#2A2A2A",
    accentColor: "#C8C8C8",
    images: [
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80",
      "https://images.unsplash.com/photo-1581404382698-28e820c7fb4e?w=1600&q=80",
    ],
    featured: false,
  },
  {
    id: "casa-do-patio",
    index: "006",
    title: "Casa do Pátio",
    subtitle: "Introversão e céu aberto",
    location: "Florianópolis, SC",
    year: "2021",
    category: "Residencial",
    area: "420 m²",
    description:
      "Uma casa que se vira para dentro, organizando todos os ambientes ao redor de um pátio central descoberto.",
    longDescription:
      "A introversão como estratégia espacial. Numa cidade de clima generoso como Florianópolis, a Casa do Pátio nega a fachada convencional e abraça o interior. O pátio central é o coração da casa — um fragmento de céu que pertence à família, não à rua.",
    tags: ["pátio central", "introversão", "tropical", "jardim"],
    coverColor: "#111111",
    accentColor: "#6B6B6B",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1600&q=80",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
