import { Board } from '../../../shared/types/Board/Board.model';
import { BombBox } from '../types/BombBox.model';

export const boardState: Board<BombBox> = [
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