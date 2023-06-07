import { Row } from './Row.model';

export type Board = Row[];

export const initState: Board = [
  [
    {
      active: true,
      villian: false
    },
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: true
    },
  ],
  [
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
  ],
  [
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: false
    },
  ],
  [
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
  ],
  [
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: true
    },
  ],
  [
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: true
    },
  ],
  [
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: true
    },
    {
      active: false,
      villian: true
    },
  ],
  [
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
    {
      active: false,
      villian: false
    },
  ]
];

// export const initState: Board = {
//   rows: [
//     {
//       boxes: [
//         {
//           villian: false,
//           active: true
//         },
//         {
//           villian: true,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: true,
//           active: false
//         },
//       ]
//     },
//     {
//       boxes: [
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: true,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//       ]
//     },
//     {
//       boxes: [
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//       ]
//     },
//     {
//       boxes: [
//         {
//           villian: true,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//       ]
//     },
//     {
//       boxes: [
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//       ]
//     },
//     {
//       boxes: [
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//       ]
//     },
//     {
//       boxes: [
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//         {
//           villian: false,
//           active: false
//         },
//       ]
//     },
//   ]
// };