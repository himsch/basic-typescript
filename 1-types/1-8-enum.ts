{
  /**
   * Enum
   * 여러가지 관련된 상수값을 한 곳에 모아서 정의하는 방법.
   */
  // Javscript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Thursday;
  // 🚫 Enum으로 타입이 지정된 변수에 다른 어떠한 숫자도 할당이 가능한 문제!
  day = 1;
  day = 0;
  console.log(day);
  // ✅ Enum대신 Union type을 사용하는 편이다.
  type DaysOfWeek = 'Monday' | 'TuesDay' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'TuesDay';
}
