import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-foreground">
              Dra. Laryssa Evelyn
            </h3>
            <p className="text-muted-foreground">
              Odontologia humanizada e acolhedora em Ilhéus-BA. Cuidando do seu
              sorriso com carinho e profissionalismo.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-primary" />
              <span>Feito com carinho para nossos pacientes</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(73) 9 8123-2545</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>laryevelyn16@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Centro, Ilhéus - BA</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* <h3 className="text-lg font-medium text-foreground">Horários</h3> */}
            {/* <div className="space-y-2 text-muted-foreground text-sm">
              <div>Segunda a Quinta: 8h às 18h</div>
              <div>Sexta: 8h às 17h</div>
              <div>Sábado: Sob consulta</div>
            </div> */}
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 Dra. Laryssa Evelyn - Odontologia. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">CRO-BA 30010</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
