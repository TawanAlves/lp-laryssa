import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "A Dra. Laryssa é incrível! Conseguiu deixar minha filha de 6 anos super à vontade. O consultório é acolhedor e o atendimento é muito humanizado.",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "Profissional excepcional! Tinha muito medo de dentista, mas ela me tranquilizou completamente. O resultado do meu tratamento ficou perfeito.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Melhor experiência que já tive em consultório odontológico. A Dra. Laryssa é atenciosa, explica tudo e faz questão que você se sinta confortável.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-light">
            O que nossos{" "}
            <span className="text-gradient font-medium">pacientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A confiança dos nossos pacientes é nossa maior recompensa. Confira
            alguns depoimentos de quem já experienciou nosso cuidado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-gentle p-8 space-y-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-muted-foreground leading-relaxed text-center italic">
                "{testimonial.text}"
              </blockquote>

              <div className="text-center">
                <div className="font-medium text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">Paciente</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
