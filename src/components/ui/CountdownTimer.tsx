"use client";

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  onExpire?: () => void;
}

export function CountdownTimer({ targetDate, onExpire }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Parse the target date as UTC
      const target = new Date(targetDate);
      const now = new Date();
      
      // Get the time difference in milliseconds
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        onExpire?.();
        return null;
      }

      // Time calculations
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (!newTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onExpire]);

  if (!timeLeft) {
    return <span className="text-muted-foreground">Event has ended</span>;
  }

  // Only show non-zero units and the next unit
  const units = [
    { value: timeLeft.days, label: 'd' },
    { value: timeLeft.hours, label: 'h' },
    { value: timeLeft.minutes, label: 'm' },
    { value: timeLeft.seconds, label: 's' }
  ];

  // Find the first non-zero unit
  const firstNonZeroIndex = units.findIndex(unit => unit.value > 0);
  const displayUnits = units.slice(
    firstNonZeroIndex !== -1 ? firstNonZeroIndex : units.length - 2,
    firstNonZeroIndex !== -1 ? firstNonZeroIndex + 3 : units.length
  );

  return (
    <span className="font-mono text-primary">
      {displayUnits.map((unit, index) => (
        <span key={unit.label}>
          {unit.value.toString().padStart(2, '0')}
          {unit.label}
          {index < displayUnits.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
} 