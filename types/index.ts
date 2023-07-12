import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles? : string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchGameProps {
    game: string;
    setGame: (game: string) => void;
}

export interface GameProps {
    id: number;
    name: string;
    rule: number;
    player: number
}