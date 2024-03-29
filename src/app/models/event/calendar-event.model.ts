export class CalendarEvent {
  id?: string | null;
  userId?: string;
  title?: string;
  description?: string;
  date?: string;  // kept as number of seconds
  longitude?: number;
  latitude?: number;
  address?: string;
}
