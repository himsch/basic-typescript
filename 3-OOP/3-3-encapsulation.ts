{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public: 기본값.
  // private: 클래스 외부에서 접근불가.
  // protected: 상속한 클래스에서만 접근가능.
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0;  // instance(Object) level

    // 생성자가 private 이면, new 키워드를 통해 인스턴스를 생성 할 수 없다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error(`value for beans should be greater than 0`);
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  // const maker = new CoffeeMaker(32);
  // static 메소드로만 인스턴스를 생성하도록 유도하는 방법.
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(10);
  maker.makeCoffee(2);

  class User {
    // get,set 키워드를 사용하면 함수형태가 되지만, 사용할때는 아래와같이 맴버변수처럼 사용해
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('age than 0')
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
    }
  }

  const user = new User('Hong', 'Song');
  user.age = 6; // setter
  console.log(user.fullName); // getter
}