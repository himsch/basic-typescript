{
  // Array
  const fruits: string[] = ['tomato', 'banana'];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple π© -> interface, type alias, class λ± μΌλ‘ λμ²΄νκΈ°.
  // λ°°μ΄μ μμλ€μ νμμ΄ λ€λ₯Ό κ²½μ° ννμ΄λΌκ³  ν¨.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // Object Destructuring Assianment
  const [name, age] = student;
}
