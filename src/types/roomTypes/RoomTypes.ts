export interface RoomTypes {
    name: RoomTypesEnum;
    description: string;
}

export enum RoomTypesEnum {
    'RestRoom',
    'BossRoom',
    'ChestRoom',
    'EmptyRoom',
    'MonsterRoom',
    'ShopRoom',
    'TrapRoom',
}
