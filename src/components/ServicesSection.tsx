import { Heart, Shield, Sparkles, Baby, Scissors, Smile } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Odontologia Preventiva",
      description: "Limpeza, profilaxia e orientações para manter seu sorriso sempre saudável."
    },
    {
      icon: Sparkles,
      title: "Clareamento Dental",
      description: "Técnicas modernas e seguras para um sorriso mais branco e brilhante."
    },
    {
      icon: Shield,
      title: "Restaurações",
      description: "Reparos estéticos e funcionais com materiais de última geração."
    },
    {
      icon: Baby,
      title: "Odontopediatria",
      description: "Atendimento especializado e lúdico para o público infantil."
    },
    {
      icon: Scissors,
      title: "Extrações",
      description: "Procedimentos cirúrgicos com técnicas minimamente invasivas."
    },
    {
      icon: Smile,
      title: "Odontologia Geral",
      description: "Atendimento completo para toda a família com foco no bem-estar."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-light">
            <span className="text-gradient font-medium">Serviços</span> que oferecemos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado completo para seu sorriso, do preventivo ao estético, 
            sempre com técnicas modernas e atendimento humanizado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-gentle p-8 text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;