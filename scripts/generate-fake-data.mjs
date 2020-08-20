import { bobRossLipsum } from './lib/bob-ross-lipsum.mjs';
import fs from 'fs';

const pick = (array) => array[(Math.random() * array.length) | 0];

function createRandomMessage(id) {
  return {
    id: id || Math.random().toString(16).slice(2),
    user: 'Bob Ross',
    category: pick(['Arts', 'Design', 'Inspiration']),
    message: bobRossLipsum(),
  };
}

const data = Array(2000)
  .fill(0)
  .map((_, idx) => createRandomMessage(idx + 1));
fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');
