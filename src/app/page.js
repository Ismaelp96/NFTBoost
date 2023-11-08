import { CardNFT } from "@/components/card-nft";
import ContainerGrid from "@/components/container";
import { TitleSection } from "@/components/title-section";
import ImageNFT01 from "@/assets/img-neft/01.jpg";
import ImageNFT02 from "@/assets/img-neft/02.jpg";

export default function Home() {
  return (
    <>
      <section>
        <ContainerGrid>
          <TitleSection
            title="Destaque em Coleções"
            subtitle="Coleções notáveis"
          />
          <CardNFT
            thumbnail={ImageNFT01}
            name="Cat #221"
            value="0.0721"
            value_brl="602,02"
          />
          <CardNFT
            thumbnail={ImageNFT02}
            name="Cat #221"
            value="0.0721"
            value_brl="602,02"
          />
        </ContainerGrid>
      </section>
    </>
  );
}
