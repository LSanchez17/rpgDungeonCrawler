export interface WeaponInterface {
    name: string;
    price: number;
    attack: number;
    durability: number;
    setDiscount: (characterDiscount: number) => void;
    setAttackBoost: (characterAttackBoost: number) => void;
    damageWeapon: () => void;
    repairWeapon: (repairPercentage: number) => void;
    setAttackDecrease: (characterAttackDecrease: number) => void;
    setPremiumPrice: () => void;
}