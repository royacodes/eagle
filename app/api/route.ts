import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

type Data = {
  id: number;
  name: string;
  rule: string;
  player: number;
};

const data: Data[] = [
  { id: 1, name: 'Poker', rule: 'rule1', player: 4 },
  { id: 2, name: 'Blackjack', rule: 'rule2', player: 2 },
  { id: 3, name: 'Roulette', rule: 'rule3', player: 5 },
  { id: 4, name: 'Court piece (Hokm)', rule: 'rule4', player: 7 },
  { id: 5, name: 'Crazy Eights', rule: 'rule5', player: 8 },
];

export async function GET() {
        return NextResponse.json(data);
}