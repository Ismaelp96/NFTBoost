import Image from "next/image";
import CardsLeft from "@/assets/cards-left.png";
import CardsRight from "@/assets/cards-right.png";

export function CardsHero() {
  return (
    <div className="relative w-width-cards-mobile h-height-cards-mobile mt-12 @mt-20 @desktop:w-width-desk-card @desktop:h-height-cards-desk">
      <Image
        src={CardsLeft}
        alt="Card da esquerda"
        className="absolute top-0 left-8 @desktop:left-0 w-1/2 @desktop:w-auto z-10"
      />
      <Image
        src={CardsRight}
        alt="Card da direita"
        className="absolute top-0 right-8 @desktop:right-0 w-1/2 @desktop:w-auto"
      />
    </div>
  );
}
