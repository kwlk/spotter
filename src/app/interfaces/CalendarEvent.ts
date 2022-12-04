export interface CalendarEvent {
  id: number;
  title: string;
  description?: string;
  kind?: "location", long?: number, lat?: number; //tbd what do we need
  address?: string;
}
