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