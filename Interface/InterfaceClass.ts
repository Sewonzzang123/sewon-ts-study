// 4. 클래스와 인터페이스
// 클래스와 인터페이스

// 클래스 선언문의 implements 뒤에 인터페이스를 선언하면 해당 클래스는 지정된 인터페이스를 반드시 구현하여야 합니다.
// 이는 인터페이스를 구현하는 클래스의 일관성을 유지할 수 있는 장점을 가집니다.
// 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수는 없습니다.

// 인터페이스 정의
interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 합니다.
class TodoClass implements ITodo {
  constructor(
    public id: number,
    public content: string,
    public complete: boolean
  ) {}
}

const todo1 = new TodoClass(1, "Typescript", false);

console.log(todo1);

// 인터페이스는 프로퍼티뿐만 아니라 메소드도 포함할 수 있습니다. 단, 모든 메소드는 추상 메소드여야 합니다.
// 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야 합니다.

interface IPerson {
  name: string;
  sayHello(): void;
}

/*
    인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야 합니다.
*/
class Person implements IPerson {
  constructor(public name: string) {}

  // 인터페이스에서 정의한 추상 메소드의 구현
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(person: IPerson): void {
  person.sayHello();
}

const me = new Person("sewon");
greeter(me);
