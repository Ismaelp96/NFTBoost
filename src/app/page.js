import { CardNFT } from "@/components/card-nft";
import ContainerGrid from "@/components/container";
import { TitleSection } from "@/components/title-section";
import ImageNFT01 from "@/assets/img-neft/01.jpg";
import ImageNFT02 from "@/assets/img-neft/02.jpg";
import { CardCollection } from "@/components/card-collectors";

export default function Home() {
  return (
    <>
      <section>
        <ContainerGrid>
          <CardCollection
            image={ImageNFT01}
            name="Lorem"
            value_btc="0.721"
            porcent="20"
          />
        </ContainerGrid>
      </section>
    </>
  );
}
