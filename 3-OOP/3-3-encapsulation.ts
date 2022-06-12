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
  console.log(maker);
  maker.fillCoffeeBeans(10);
  console.log(maker.makeCoffee(2));
}