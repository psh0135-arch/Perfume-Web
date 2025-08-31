interface ReviewCardProps {
  name: string;
  profileImage: string;
  rating: number;
  review: string;
  date: string;
}

export default function ReviewCard({ name, profileImage, rating, review, date }: ReviewCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg 
      key={i} 
      className={`w-4 h-4 ${i < rating ? 'text-accent' : 'text-muted'}`} 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));

  return (
    <div className="glass-card p-6 rounded-xl" data-testid={`review-card-${name}`}>
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={profileImage} 
          alt={`${name}님 프로필`}
          className="w-12 h-12 rounded-full object-cover"
          data-testid={`profile-image-${name}`}
        />
        <div>
          <h4 className="font-semibold text-foreground" data-testid={`reviewer-name-${name}`}>
            {name}
          </h4>
          <div className="flex" data-testid={`rating-stars-${name}`}>
            {stars}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground mb-3" data-testid={`review-text-${name}`}>
        "{review}"
      </p>
      <span className="text-sm text-muted-foreground" data-testid={`review-date-${name}`}>
        {date}
      </span>
    </div>
  );
}
