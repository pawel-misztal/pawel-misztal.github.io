import * as THREE from "three";

interface Disposable {
  dispose():void
}

export class DisposeTracker {
  container: Set<Disposable>;
  constructor() {
    this.container = new Set();
  }
  
  track<T>(obj:T):T{
    if(!obj)
      return obj;

    if(obj && typeof (obj as any).dispose === 'function')
      this.container.add(obj as unknown as Disposable);

    return obj
  }

  disposeAll() {
    this.container.forEach((val) => {
      val.dispose();
    })
    this.container.clear();
  }
}