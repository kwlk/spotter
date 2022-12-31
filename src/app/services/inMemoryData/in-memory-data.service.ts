import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CalendarEvent } from '../../interfaces/CalendarEvent';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      { id: 12, title: 'Event1', long: 19.93824595659894, lat: 50.049874494426824, address: "ul. Nowa 1/4, 44-111 Kraków", description:"impreza" },
      { id: 13, title: 'Event2', long: 19.885798915173936, lat: 50.079095504186334, address: "ul. Nowa 1/4, 44-111 Kraków", description:"impreza"  },
      { id: 14, title: 'Event3', long: 20.00398720620926, lat: 50.08384141523049, address: "ul. Nowa 1/4, 44-111 Kraków", description:"impreza"  },
    ];
    return {events};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(events: CalendarEvent[]): number {
    return events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 11;
  }
}
