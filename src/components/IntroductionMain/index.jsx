import { Icon } from "~/components/Icons";

export const IntroductionMain = () => (
  <section className="bg-Black-500 px-5 md:px-16 ">
    <div className="container mx-auto flex flex-col lg:flex-row">
      <div className="space-y-8 flex flex-col items-start justify-center flex-1">
        <div className="space-y-4">
          <h1 className="text-White-500 text-3xl leading-10 font-bold md:text-5xl md:leading-[64px]">
            Uma nova experiência em barbearia
          </h1>

          <p className="text-White-500 text-md leading-6 md:text-lg md:leading-7">
            Experimente mudar totalmente sua maneira de ir ao barbeiro com
            inovação, bom atendimento e com certeza, muito estilo!
          </p>
        </div>

        <a
          href="#"
          className="font-bold flex items-center space-x-4 bg-red-500 px-10 py-5 hover:bg-red-700"
        >
          <Icon name="whatsapp" className="text-White-500" />

          <span className="text-White-500">AGENDAR HORÁRIO</span>
        </a>
      </div>

      <div className="flex-1">
        <img
          src="./imgs/img-hero-barber-desktop.webp"
          alt="-hero-barber"
          className="h-full"
        />
      </div>
    </div>
  </section>
);
