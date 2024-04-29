export interface RoomTypes {
    name: RoomTypesEnum;
    description: string;
}

export enum RoomTypesEnum {
   RESTROOM = 'RestRoom',
   BOSSROOM = 'BossRoom',
   CHESTROOM = 'ChestRoom',
   EMPTYROOM = 'EmptyRoom',
   MONSTERROOM = 'MonsterRoom',
   SHOPROOM = 'ShopRoom',
   TRAPROOM = 'TrapRoom',
}
