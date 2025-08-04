const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/assets/ft2.jpg"
              alt="Dra. Laryssa Evelyn - Sobre a profissional"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                <span className="text-gradient font-medium">
                  Dra. Laryssa Evelyn
                </span>
              </h2>
              <p className="text-lg text-primary font-medium">
                Cirurgiã-Dentista | CRO-BA 30010
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dedico-me a oferecer um atendimento odontológico que vai além da
                técnica. Acredito que cada sorriso é único e merece cuidado
                personalizado, em um ambiente acolhedor e seguro.
              </p>

              <p>
                Minha missão é transformar a experiência no dentista em algo
                tranquilo e humanizado, especialmente para crianças e pacientes
                com ansiedade. Utilizo técnicas modernas e uma abordagem gentil
                para garantir o melhor resultado com máximo conforto.
              </p>

              <p>
                Graduada pela UFCG e em constante atualização para oferecer os
                tratamentos mais modernos e eficazes para você e sua família.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">
                  Anos de experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">
                  Sorrisos transformados
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
