import { HeaderMain } from "~/components/HeaderMain";
import { Card } from "~/components/Card";

export const SectionCards = () => (
  <section className="px-5 py-12 md:px-16 md:py-24">
    <div className="container mx-auto space-y-12">
      <HeaderMain
        topics="nossos serviços"
        title="Veja o que fazemos de melhor"
      />

      <div className="flex flex-col space-y-8 lg:space-x-8 lg:flex-row lg:space-y-0 ">
        <Card url="img-card-01-desktop" title="Corte de cabelo">
          Cortes profissionais e modernos para valorizar seu estilo.
        </Card>

        <Card url="img-card-02-desktop" title="Barba aparada">
          Dê uma bela forma pra sua barba com nossos cuidados especiais.
        </Card>

        <Card url="img-card-03-desktop" title="Lavagem">
          Cuide da limpeza da sua cabeça com produtos exclusivos.
        </Card>
      </div>
    </div>
  </section>
);
