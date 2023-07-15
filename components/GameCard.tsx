"use client";

import { useState } from "react";
import Image from "next/image";
import { GameProps } from "@/types";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

interface GameCardProps {
  game: GameProps;
}
const GameCard = ({ game }: GameCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id, name, rule, player } = game;
  const router = useRouter();

  return (
    <div className="game-card group">
      <div className="game-card__content">
        <h2 className="game-card__content-title">{name}</h2>
      </div>
      {/* <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        100
        <span className="self-end text-[14px] font-medium">/day</span>
      </p> */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="game model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-16">
        <div className="game-card__btn-container">
          <CustomButton
            title="Create Room"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/poker.svg"
            handleClick={() => router.push(`/game/${name}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
