import Image from "next/image";

import ContainerGrid from "./container";
import Logo from "@/assets/logo.svg";
import Link from "next/link";

const footerNav = [
  {
    titleMenu: "NFT Boost®",
    items: ["Download", "NFTs", "Rank", "FAQ"],
  },
  {
    titleMenu: "Links importantes",
    items: ["About us", "Questions", "Press", "Contact us", "Legal"],
  },
];

export function Footer() {
  return (
    <footer className="py-10 @laptop:pt-32 @laptop:pb-14">
      <ContainerGrid className="flex flex-col @laptop:flex-row justify-between gap-10">
        <div className="text-left">
          <Image src={Logo} alt="Logo NFTboost" />
          <p className="mt-4 mb-6 text-lg text-white text-opacity-70 max-w-full @laptop:max-w-left-cont-footer">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <button className="w-fulll @tablet:w-auto  bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-900 transition-all ease-linear">
            Conectar carteira
          </button>
        </div>
        <div className="gap-10 @laptop:gap-20 flex flex-col @laptop:flex-row">
          {footerNav.map(({ titleMenu, items }) => (
            <div key={`Menu-${titleMenu}`}>
              <strong className="block text-xl mb-4">{titleMenu}</strong>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-lg text-white text-opacity-70"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContainerGrid>
    </footer>
  );
}
