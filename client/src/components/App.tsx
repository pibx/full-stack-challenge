import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

// import { todosReducer } from "../reducers/todos";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  state = { fetching: false };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
    // this.props.fetchTodos();
  }

  onButtonClick = (): void => {
    setTimeout(this.props.fetchTodos());
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {" "}
          {this.state.fetching ? console.log("loading...") : null}
          {todo.title}
        </div>
      );
    });
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
