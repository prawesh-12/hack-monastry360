import { Monastery } from '@/types';

export const monasteries: Monastery[] = [
  {
    id: 'rumtek',
    name: 'Rumtek Monastery',
    lat: 27.3248,
    lng: 88.5156,
    short: 'The Dharma Chakra Centre, seat of the Karmapa',
    description: 'Rumtek Monastery, also called the Dharma Chakra Centre, is a gompa located in the Indian state of Sikkim near the capital Gangtok.',
    history: 'Built in the 1960s by the 16th Karmapa, Rumtek serves as the main seat of the Karma Kagyu lineage and the Karmapa in exile. The monastery was constructed as a replica of the original Tsurphu Monastery in Tibet.',
    year: '1966',
    sect: 'Karma Kagyu',
    howToReach: 'Located 23 km from Gangtok. Regular taxi services available from Gangtok city center. The monastery is situated on a hilltop offering panoramic views of the surrounding valleys.',
    images: ['/assets/rumtek1.jpg', '/assets/rumtek2.jpg', '/assets/rumtek3.jpg'],
    panorama: '/assets/rumtek_panorama.jpg',
    thumbnail: '/assets/rumtek_thumb.jpg'
  },
  {
    id: 'pemayangtse',
    name: 'Pemayangtse Monastery',
    lat: 27.3256,
    lng: 88.1667,
    short: 'One of the oldest monasteries in Sikkim',
    description: 'Pemayangtse Monastery is a Buddhist monastery in Pelling, Sikkim, India. Planned, designed and founded by Lama Lhatsun Chempo in 1705.',
    history: 'Founded in 1705 by Lama Lhatsun Chempo, Pemayangtse is one of the oldest and most important monasteries in Sikkim. The name means "Perfect Sublime Lotus" and it serves as the head monastery of the Nyingma order in Sikkim.',
    year: '1705',
    sect: 'Nyingma',
    howToReach: 'Located in Pelling, West Sikkim, about 110 km from Gangtok. Accessible by road with regular bus and taxi services from Gangtok and Siliguri.',
    images: ['/assets/pemayangtse1.jpg', '/assets/pemayangtse2.jpg', '/assets/pemayangtse3.jpg'],
    panorama: '/assets/pemayangtse_panorama.jpg',
    thumbnail: '/assets/pemayangtse_thumb.jpg'
  },
  {
    id: 'tashiding',
    name: 'Tashiding Monastery',
    lat: 27.3292,
    lng: 88.2736,
    short: 'Sacred monastery atop a heart-shaped hill',
    description: 'Tashiding Monastery is a Buddhist monastery of the Nyingma sect of Tibetan Buddhism in Western Sikkim, India.',
    history: 'Built in 1717 by Ngadak Sempa Chenpo, Tashiding is considered one of the holiest monasteries in Sikkim. Located on a heart-shaped hill between the Rathong and Rangeet rivers, it holds special significance in Sikkimese Buddhism.',
    year: '1717',
    sect: 'Nyingma',
    howToReach: 'Accessible via a trek from Legship or by road from Gyalshing. The monastery is situated on a hilltop requiring a short climb through prayer flag-lined paths.',
    images: ['/assets/tashiding1.jpg', '/assets/tashiding2.jpg', '/assets/tashiding3.jpg'],
    panorama: '/assets/tashiding_panorama.jpg',
    thumbnail: '/assets/tashiding_thumb.jpg'
  }
];