interface FragranceNoteCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  noteType: "top" | "middle" | "base";
}

export default function FragranceNoteCard({ 
  title, 
  subtitle, 
  description, 
  image, 
  duration, 
  noteType 
}: FragranceNoteCardProps) {
  const colorClasses = {
    top: "bg-accent/10 text-accent",
    middle: "bg-secondary/10 text-secondary", 
    base: "bg-primary/10 text-primary"
  };

  return (
    <div className="glass-card p-8 rounded-xl text-center" data-testid={`fragrance-note-${noteType}`}>
      <img 
        src={image} 
        alt={subtitle}
        className="rounded-lg w-full h-48 object-cover mb-6"
        data-testid={`fragrance-image-${noteType}`}
      />
      
      <h3 className="text-2xl font-serif font-bold mb-4 text-accent" data-testid={`fragrance-title-${noteType}`}>
        {title}
      </h3>
      <h4 className="text-lg font-semibold mb-3 text-secondary" data-testid={`fragrance-subtitle-${noteType}`}>
        {subtitle}
      </h4>
      <p className="text-muted-foreground mb-4" data-testid={`fragrance-description-${noteType}`}>
        {description}
      </p>
      <div className="flex justify-center">
        <span className={`text-sm px-3 py-1 rounded-full ${colorClasses[noteType]}`} data-testid={`fragrance-duration-${noteType}`}>
          {duration}
        </span>
      </div>
    </div>
  );
}
