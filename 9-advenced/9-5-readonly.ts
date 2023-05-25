{
  type Todo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<Todo>) {
    // todo.title = 'jaja'; ❌ readonly 이므로 변경 불가능.
  }
}
