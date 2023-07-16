import Image from "next/image";
import { Card } from "@/components";
import GameLayout from "./GameLayout";

interface IProps {
  chips: number;
  connected: boolean;
  isActive: boolean;
}

const GamePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/table-default.svg"
        alt="table"
        width={600}
        height={500}
        className="max-w-full max-h-full"
      />
      <Card card="10d" />

      {/* Background images as srcSet for better responsive support */}
      {/* <img
        srcSet={`/background-moon.jpg 1x, background-moon@2x.jpg 2x, `}
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
        `}
        alt="Watching the Earth from the Moon"
      /> */}
      {/* <img
        src="/table-default.svg"
        css={css`
          position: absolute;
          top: 6rem;
          left: 2.875rem;
        `}
        alt="Poker table with Chips logo at the center"
      /> */}
    </div>
  );
};

GamePage.PageLayout = GameLayout;
// GamePage.getLayout = function (page: ReactElement) {
//   return <GameLayout>{page}</GameLayout>;
// };

export default GamePage;
