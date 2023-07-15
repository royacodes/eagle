"use client";

import { css } from "@emotion/react";

interface CardProps {
  card: string;
}

const Card = ({ card }: CardProps) => {
  return (
    <div
      className={`card card-${card} card-${card}-dims`}
      css={css`
        display: inline-block;
        margin-right: 0.125rem;
      `}
    />
  );
};

export default Card;
