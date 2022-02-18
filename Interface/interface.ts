// 인터페이스는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다.
// 인터페이스에 선언된 프로퍼티 또는 메소드 구현을 강제하여 일관성을 유지할 수 있도록 하는 것이다.
// 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인터페이스를 생성할 수 없고 모든 메소드는 추상 메소드이다.
// 단, 추상클래스의 추상메소드와 달리 abstract 키워드를 사용하지 않는다.

// 인터페이스 정의 : 파라미터 타입을 선언할 수 있다.
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 변수 todo 타입으로 Todo 인터페이스를 선언하였다.
let todo: Todo;

// 변수 todo는 Todo 인터페이스를 준수하여야 한다.
todo = { id: 1, content: "typescript", completed: false };

let todos: Todo[] = [];

//파라미터 todo의 타입으로 Todo 인터페이스를 선언하였다.
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

//파라미터 todo는 Todo 인터페이스를 준수하여야 한다.
const newTodo = { id: 2, content: "typescript", completed: false };
addTodo(newTodo);
console.log(todos);
