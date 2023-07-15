import "../../globals.css";

export const metadata = {
  title: "Game Hub",
  description: "Play the best games in the world",
};

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
