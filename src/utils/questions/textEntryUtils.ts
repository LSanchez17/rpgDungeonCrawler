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

export const stripNumbersFromString = (word: string): string => {
    return word.replace(/[0-9]/g, '');
}

export const trimStrings = (word: string): string => {
    return word.trim();
}

export const removeSpacesFromString = (word: string): string => {
    return word.replace(/\s/g, '');
}