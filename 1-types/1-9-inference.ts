{
  /**
   * Type Inference
   * 타입을 명시하지 않아도 초기값에 따라 타입을 추론해서 알아서 정해짐.
   */
  let text = 'hello';

  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
