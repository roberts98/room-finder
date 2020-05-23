import { v1 as uuid } from 'uuid';

export const initialState = {
  rooms: [],
  filters: {},
  buildings: [
    {
      id: uuid(),
      name: 'Building A',
      floors: [
        {
          id: uuid(),
          name: 'Floor 1',
          rooms: [
            {
              id: uuid(),
              number: 23,
              text: 'Text output 11',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 23,
              text: 'Text output 12',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 13,
              text: 'Text output 13',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 2',
          rooms: [
            {
              id: uuid(),
              number: 21,
              text: 'Text output 21',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 22,
              text: 'Text output 22',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 23,
              text: 'Text output 23',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 3',
          rooms: [
            {
              id: uuid(),
              number: 31,
              text: 'Text output 31',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 32,
              text: 'Text output 32',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 33,
              text: 'Text output 33',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: 'Building B',
      floors: [
        {
          id: uuid(),
          name: 'Floor 1',
          rooms: [
            {
              id: uuid(),
              number: 110,
              text: 'B Text output 11',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 12,
              text: 'B Text output 12',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 13,
              text: 'B Text output 13',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 2',
          rooms: [
            {
              id: uuid(),
              number: 21,
              text: 'B Text output 21',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 22,
              text: 'B Text output 22',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 23,
              text: 'B Text output 23',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
          ],
        },
        {
          id: uuid(),
          name: 'Floor 3',
          rooms: [
            {
              id: uuid(),
              number: 31,
              text: 'B Text output 31',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 32,
              text: 'B Text output 32',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
            {
              id: uuid(),
              number: 33,
              text: 'B Text output 33',
              link: 'https://google.com',
              image: 'http://picsum.photos/600/400',
            },
          ],
        },
      ],
    },
  ],
};
