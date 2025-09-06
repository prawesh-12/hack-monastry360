import { CulturalEvent } from '@/types';

export const events: CulturalEvent[] = [
  {
    id: 'bumchu',
    title: 'Bumchu Festival',
    date: '2024-03-15',
    description: 'The sacred vase ceremony at Tashiding Monastery where holy water is revealed to predict the coming year. This ancient ritual attracts thousands of devotees who believe the water level indicates the prosperity and peace for the year ahead.',
    monastery: 'Tashiding Monastery',
    type: 'Religious Festival'
  },
  {
    id: 'losar',
    title: 'Tibetan New Year (Losar)',
    date: '2024-02-10',
    description: 'The most important festival in the Tibetan calendar, celebrated with traditional dances, prayers, and community gatherings across all monasteries in Sikkim. Monks perform special rituals and communities come together to welcome the new year.',
    monastery: 'All Monasteries',
    type: 'New Year Celebration'
  },
  {
    id: 'saga_dawa',
    title: 'Saga Dawa Festival',
    date: '2024-05-23',
    description: 'Commemorating the birth, enlightenment, and death of Buddha, this month-long festival involves special prayers, meditation retreats, and acts of merit. Pilgrims circumambulate sacred sites and monasteries offer continuous prayer sessions.',
    monastery: 'Rumtek Monastery',
    type: 'Buddhist Observance'
  }
];