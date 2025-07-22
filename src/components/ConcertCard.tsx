
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConcertCardProps {
  date: string;
  time: string;
  title: string;
  venue: string;
  description: string;
  delay?: number;
}

const ConcertCard = ({ date, time, title, venue, description, delay = 0 }: ConcertCardProps) => {
  return (
    <Card
      className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center mb-4 text-orchestra-red">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="font-medium">{date}, {time}</span>
        </div>

        <h3 className="font-playfair text-2xl font-bold mb-2 text-charcoal">
          {title}
        </h3>

        <p className="text-charcoal/70 mb-2 font-medium">
          {venue}
        </p>

        <p className="text-charcoal/60 mb-6 text-sm leading-relaxed">
          {description}
        </p>

        <Button
          className="w-full bg-orchestra-red hover:bg-orchestra-red/90 text-white transition-all duration-300"
        >
          Билеты
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConcertCard;
