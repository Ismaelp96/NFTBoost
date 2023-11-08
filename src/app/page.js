import ContainerGrid from "@/components/container";
import { TitleSection } from "@/components/title-section";

export default function Home() {
  return (
    <>
      <section>
        <ContainerGrid>
          <TitleSection
            title="Destaque em Coleções"
            subtitle="Coleções notáveis"
          />
        </ContainerGrid>
      </section>
    </>
  );
}
