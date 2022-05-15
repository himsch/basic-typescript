{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   */

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined 비었는지 안비었는지 결정되어 있지않음.
  let name: undefined;
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null 비었다.
  let person: null;
  let person2: string | null;
  person = null;
  person2 = '1';
}

{
  /**
   * TypeScript
   */

  // unknown 💩 어떤 타입이 올지 모를때.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 모든 타입
  let anything: any = 0;
  anything = 'hello';

  // void 함수에서 아무것도 return 값이 없을때.
  function print(): void {
    console.log('hello');
  }
  let unusable: void = undefined; // 💩 변수에서는 사용하지 않음.

  // never 해당 함수에서 return을 절대 하지 않을때.
  function throwError(message: string): never {
    // message -> server log
    // ex) 1. 다른 곳으로 던져버리기 때문에 return 될 수 없음.
    throw new Error(message);

    // ex) 2. 무한루프이므로 return 될 수 없음.
    while (true) {}
  }

  // object 💩
  let obj: object = [1, 3];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'song' });
  acceptSomeObject({ animal: 'dog' });
  acceptSomeObject(() => {});
}
