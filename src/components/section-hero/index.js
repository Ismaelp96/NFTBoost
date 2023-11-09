import Image from "next/image";

import ContainerGrid from "../container";
import IconBoost from "@/assets/icon-boost.svg";
import SmallNFT01 from "@/assets/nft-small.png";
import SmallNFT02 from "@/assets/double-nft.png";
import GooglePlay from "@/assets/google.svg";
import AppleStore from "@/assets/apple.svg";
import { CardsHero } from "./cards";

export function SectionHero() {
  return (
    <section className="pt-36 bg-hero-pattern bg-no-repeat overflow-hidden">
      <ContainerGrid className="flex flex-col items-center">
        <h3 className="flex items-center gap-2 text-sm mb-3 @tablet:text-base @desktop:text-xl">
          <Image src={IconBoost} alt="Icone CodeBoost" />
          <span>Adentre um reino de possibilidades infinitas </span>
        </h3>
        <h1 className="text-5xl/normal text-center font-poppins @desktop:text-7xl/normal @desktop:mb-3">
          Explore um Universo
          <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32">
            <Image
              src={SmallNFT01}
              alt="Imagem NFT 01"
              className="w-11 @desktop:w-auto"
            />
          </div>
          Digital de
          <Image
            src={SmallNFT02}
            alt="Imagem NFT 02"
            className="inline-block w-16 mx-2 @desktop:w-auto"
          />
          Colecionáveis Únicos!
        </h1>
        <p className="w-full text-center text-sm mb-6 @tablet:text-base @desktop:text-xl @desktop:max-w-content-desc-hero @desktop:mb-9">
          Adentre um reino de possibilidades infinitas e mergulhe nas coleções
          de NFT, onde a arte, a cultura e a inovação se unem para criar
          experiências verdadeiramente exclusivas.
        </p>
        <div className="flex flex-col items-center gap-4 @tablet:flex-row">
          <Image src={GooglePlay} alt="Google Play" />
          <Image src={AppleStore} alt="Apple Store" />
        </div>
        <CardsHero />
        <div className="w-full border-t border-white border-opacity-5  mt-10 @desktop:mt-36"></div>
      </ContainerGrid>
    </section>
  );
}
