import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message =
      "Olá! Gostaria de agendar uma consulta com a Dra. Laryssa Evelyn.";
    const whatsappUrl = `https://wa.me/5573981232545?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              Pronto para transformar <br />
              <span className="text-gradient font-medium">seu sorriso?</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Agende sua consulta e descubra como é ser atendido com carinho,
              atenção e toda a expertise que você merece.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>Horários flexíveis de segunda a sexta</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Localizado no centro de Ilhéus - BA</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>Atendimento particular personalizado</span>
              </div>
            </div>

            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-[#736fa1] text-primary-foreground px-10 py-4 text-lg font-medium rounded-full"
            >
              <Phone className="mr-2 h-5 w-5" />
              Agendar pelo WhatsApp
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/assets/ft1.jpg"
                alt="Dra. Laryssa Evelyn - Agende sua consulta"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform -rotate-2 scale-105 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
