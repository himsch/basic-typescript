{
  // number type 만 체크하기 때문에 확장성이 너무 낮음.
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!!');
    }
    return arg;
  }

  // type 이 보장되지 않기 때문에 타입이 안전하지 않다.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!!');
    }
    return arg;
  }

  // 함수에서 제네릭을 사용하는 방법.
  // 어떤 인자를 전달하던지 타입을 보장 받을 수 있다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!!');
    }
    return arg;
  }
  const number: number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}