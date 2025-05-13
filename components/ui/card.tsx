import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-secondary-200 bg-white shadow-sm transition-all hover:shadow',
        className
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';

export default Card;