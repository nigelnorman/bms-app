import { Observable, Subject } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Injectable } from "@angular/core";

interface BroadcastEvent {
  key: any;
  data?: any;
}

@Injectable()
export class BroadcasterService {
  private transmission: Subject<BroadcastEvent>;

  constructor() {
    this.transmission = new Subject<BroadcastEvent>();
  }

  public broadcast(key: any, data?: any): void {
    this.transmission.next({ key, data });
  }

  public receive<T>(key: any): Observable<T> {
    return this.transmission
      .asObservable()
      .pipe(filter(event => event.key === key))
      .pipe(map(event => event.data));
  }
}
