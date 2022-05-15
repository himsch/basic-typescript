{
  // Array
  const fruits: string[] = ['tomato', 'banana'];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple 💩 -> interface, type alias, class 등 으로 대체하기.
  // 배열안 원소들의 타입이 다를 경우 튜플이라고 함.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // Object Destructuring Assianment
  const [name, age] = student;
}
