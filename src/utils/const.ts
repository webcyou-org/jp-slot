export const BEING_ELECTED_LIST: string[] = [
    'BIG当選',
    'REG当選',
    'BIG＋スイカ当選',
    'REG＋スイカ当選',
    'BIG＋チェリー当選',
    'REG＋チェリー当選',
    'スイカ当選',
    'チェリー当選',
    'ベル当選',
    'リプレイ当選',
    '当選無し'
];

export const MINOR_ROLE_BEING_ELECTED_LIST: string[] = [
    'スイカ当選',
    'チェリー当選',
    'ベル当選',
    'リプレイ当選',
    '当選無し'
];

export const BEING_ELECTED_WEIGHT_LIST: number[] = [5, 4, 50, 40, 170, 150, 1220, 610, 7710, 8978, 46599];

export const MINOR_ROLE_BEING_ELECTED_WEIGHT_LIST: number[] = [1310, 930, 7710, 8987, 46599];

export enum BonusFlag {
    Lose,
    Big,
    Reg
}

export enum MinorRole {
    Lose,
    Watermelon,
    Cherry,
    Bell,
    Replay
}
