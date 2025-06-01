export function getEventStatus(eventDate: string) {
  const now = new Date();
  const event = new Date(eventDate);
  
  if (event < now) {
    return {
      status: 'past',
      emoji: '📅',
      className: 'text-muted-foreground'
    };
  }
  
  const isToday = event.toDateString() === now.toDateString();
  if (isToday) {
    return {
      status: 'today',
      emoji: '🔔',
      className: 'text-primary font-bold'
    };
  }
  
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const isTomorrow = event.toDateString() === tomorrow.toDateString();
  if (isTomorrow) {
    return {
      status: 'tomorrow',
      emoji: '⏰',
      className: 'text-primary'
    };
  }
  
  return {
    status: 'upcoming',
    emoji: '📢',
    className: 'text-primary'
  };
} 