import { Character } from "../lib/character/Character"

export const characterCreation = (characterName: string) => {
    const newCharacter = new Character(characterName)   

    newCharacter.setBaseAttributes();

    return newCharacter;
}