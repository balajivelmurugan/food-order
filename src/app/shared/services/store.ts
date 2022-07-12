import { BehaviorSubject, Observable } from "rxjs";

export class Store<T> {

  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initializeState: T){
    this._state$ = new BehaviorSubject(initializeState);
    this.state$ = this._state$.asObservable();
  }

  get state(): T{
    return this._state$.getValue();
  }

  setState(nextState: T): void{
    this._state$.next(nextState);
  }
}
