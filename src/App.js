import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList'
import Box from './Components/hoc/Box'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoFilter from './Components/TodoFilter/TodoFilter'

class App extends Component {
  state = {
    todos: [],
    counterTasks: 0
  }

  onToggle = id => {
    let todos = this.state.todos.map(todo => {

      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    // this.sumOfTask()
    this.setState({
      todos
    })
  }

  onAddButton = () => {
    const input = document.querySelector('.TodoForm__text');
    
    if (input.value.trim()) {
      const newTodo = {
        id: this.generationId(),
        title: input.value,
        completed: false
      }

      let todos = this.state.todos;
      console.log(todos);
      todos.push(newTodo);

      this.setState({
        todos,
        // counterTasks: this.counterTasks
      })
    }
  }

  onDelete = id => {
    let todos = this.state.todos.filter(todo => {
      if (todo.id !== id) {
        return todo
      } else {
        return null
      }
    })
    this.setState({todos})
  }

  onAddKeyCode = e => {
    if (e.keyCode === 13) {
      document.querySelector('.TodoForm__button').click()
    }
  }

  onUpdateName = id => {
    // Изменение таски по двойному клику
  }

  // sumOfTask = () => {
  //   this.state.todos.forEach(todo => {
  //     if (!todo.completed) {
  //       this.setState({counterTasks: this.counterTasks + 1})
  //     }
  //   })
  // }
  

  generationId() {
    return Math.random().toString(36).substr(2, 9);
  }

  render() {
    return (
      <div className="App">
        <Box 
          input={<TodoForm 
                  onClickAddTask={this.onAddButton}
                  onKeyDownAddTask={this.onAddKeyCode}
                />} 
          list={<TodoList 
                  onChange={this.onToggle} 
                  onClick={this.onDelete}
                  onDoubleClick={this.onUpdateName}
                  todos={this.state.todos} 
                />}
          filter={<TodoFilter 
                    // sumOfTask={ßthis.state.counterTasks}
                  />}
        />
      </div>
    );
  } 
  
}

export default App;
