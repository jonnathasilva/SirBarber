import { Icon, SectionCards, IntroductionMain, HeaderMain } from "./components";

export const Home = () => {
  return (
    <div>
      <header className="p-5  md:py-6 md:px-16 bg-Black-500 ">
        <div className="flex justify-between items-center container  mx-auto ">
          <Icon name="logo" className="w-28 h-8 text-White-500" />

          <button className="uppercase font-bold border border-White-500 text-White-500 px-6 py-3 hover:border-White-700 hover:text-White-700">
            agendar horarío
          </button>
        </div>
      </header>

      <main>
        <IntroductionMain />

        <SectionCards />

        <>
          <div className="px-5 py-12 md:px-16 md:pt-24 bg-White-300">
            <div className="container space-y-5">
              <HeaderMain
                topics="onde estamos"
                title="Venha nos fazer uma visita!"
              />

              <div className="flex">
                <Icon name="location" />

                <span>Rua 08 de agosto, 497</span>
              </div>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0127120904203!2d-38.549649184963!3d-3.807331197230291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74e42a321d621%3A0xed27a08163817058!2sRua%2008%20de%20Agosto%20-%20Parque%20Dois%20Irm%C3%A3os%2C%20Fortaleza%20-%20CE%2C%2060810-670!5e0!3m2!1spt-BR!2sbr!4v1665527975759!5m2!1spt-BR!2sbr"
            loading="lazy"
            className="w-full h-96"
          />
        </>
      </main>

      <footer className="p-5 md:px-16 md:py-12 bg-Black-300">
        <div className="conatiner flex flex-col justify-between space-y-4 items-start md:items-center md:flex-row">
          <div className="space-y-5">
            <Icon name="logo" className="w-56 text-White-500" />

            <p className="text-md text-White-500">
              ©2022 - SirBarber. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex space-x-3">
            <Icon name="facebook" className="w-12" />
            <Icon name="twitter" className="w-12" />
            <Icon name="instagram" className="w-12" />
          </div>
        </div>
      </footer>
    </div>
  );
};
