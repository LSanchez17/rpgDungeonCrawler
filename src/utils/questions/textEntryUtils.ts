import { DifficultyEnum } from "../../types";
import { ValidMainMenuOptions } from "../../types";

export const isValidStartGameOption = (answer: string): boolean => {
    return answer in ValidMainMenuOptions
}

export const isValidDifficultyOption = (answer: string): boolean => {
    return answer in DifficultyEnum;
}

export const capitalizeFirstLetterOfWord = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}