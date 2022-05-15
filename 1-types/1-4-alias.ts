{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'song';
  const address: Text = 'song';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'song',
    age: 20,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let songName: Name;
  songName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}
