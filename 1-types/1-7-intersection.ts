{
  /**
   * Intersection Type: &
   * 다양한 Type을 하나로 묶어서 사용.
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'song',
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
