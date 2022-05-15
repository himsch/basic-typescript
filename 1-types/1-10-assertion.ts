{
  /**
   * Type Assertions 💩
   * 강제한 타입이 다를 경우 어플리케이션이 종료됨.
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // const numbers = findNumbers()!;
  numbers!.push(2); // 확실히 Array 일때 ! 붙여 사용.

  // 실제 example
  const button = document.querySelector('class');
  // button!.nodeValue;
  if (button) {
    button.nodeValue;
  }
}
