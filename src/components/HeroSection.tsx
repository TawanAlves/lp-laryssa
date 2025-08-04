import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message =
      "Olá! Gostaria de agendar uma consulta com a Dra. Laryssa Evelyn.";
    const whatsappUrl = `https://wa.me/5573981232545?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              <span className="text-gradient font-medium">Seu sorriso</span>
              <br />
              <span className="text-foreground">merece cuidado</span>
              <br />
              <span className="text-foreground font-light">especial</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Odontologia humanizada e acolhedora em Ilhéus. Atendimento
              personalizado que prioriza seu bem-estar e conforto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-primary hover:bg-[#736fa1] text-primary-foreground px-8 py-4 text-lg font-medium rounded-full"
              >
                <Phone className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <span>📍 Ilhéus - BA</span>
              <span>•</span>
              <span>👥 Crianças e Adultos</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/assets/ft3.jpg"
                alt="Dra. Laryssa Evelyn - Dentista em Ilhéus"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
