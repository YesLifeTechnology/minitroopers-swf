export class Enum extends Array {
  constructor(...args: any[]) {
    super(...args);
  }

  static resolve(): void {
    if (typeof window !== "undefined") {
      const win = window;
      if (!(win as any).__enum__) {
        (win as any).__enum__ = {};
      }
      (win as any).__enum__[this.name] = this;
    } else {
      const glob = global;
      if (typeof (glob as any).__enum__ === "undefined") {
        (glob as any).__enum__ = {};
      }
      (glob as any).__enum__[this.name] = this;
    }
  }

  override toString(): string {
    return this[0];
  }
}
