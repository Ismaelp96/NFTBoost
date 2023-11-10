import { SectionHero } from "@/components/section-hero";
import { SectionCarrousel } from "@/components/section-carrousel";

import Thumb01 from "@/assets/img-neft/01.jpg";
import Thumb02 from "@/assets/img-neft/02.jpg";
import Thumb03 from "@/assets/img-neft/03.jpg";
import Thumb04 from "@/assets/img-neft/04.jpg";
import Thumb05 from "@/assets/img-neft/05.jpg";
import Thumb06 from "@/assets/img-neft/06.jpg";
import Thumb07 from "@/assets/img-neft/07.jpg";
import Thumb08 from "@/assets/img-neft/08.jpg";
import Thumb09 from "@/assets/img-neft/09.jpg";
import Thumb10 from "@/assets/img-neft/10.jpg";
import Thumb11 from "@/assets/img-neft/11.jpg";
import Thumb12 from "@/assets/img-neft/12.jpg";

const featureCollections = [
  {
    name: "Cat #221",
    thumbnail: Thumb01,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb02,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb03,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb04,
    value: "0.0721",
    value_brl: "602,02",
  },
];

const featureCollections2 = [
  {
    name: "Cat #221",
    thumbnail: Thumb05,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb06,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb07,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb08,
    value: "0.0721",
    value_brl: "602,02",
  },
];

const featureCollections3 = [
  {
    name: "Cat #221",
    thumbnail: Thumb09,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb10,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb11,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb12,
    value: "0.0721",
    value_brl: "602,02",
  },
];

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCarrousel
        subtitle="Destaque em Coleções"
        title="Coleções notáveis"
        data={featureCollections}
      />
      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
      <SectionCarrousel
        subtitle="Seleção Mensal"
        title="Destaque do Mês"
        data={featureCollections2}
      />
      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
      <SectionCarrousel
        subtitle="em Tendência"
        title="Tendências"
        data={featureCollections3}
      />
    </>
  );
}
