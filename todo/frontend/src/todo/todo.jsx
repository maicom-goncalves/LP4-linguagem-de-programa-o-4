import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3001/api/todos'

class Todo extends Component {
   constructor(props){
       super(props)
       this.state = { description: '', list:[]}

       this.handleAdd = this.handleAdd.bind(this)
       this.handleChange = this.handleChange.bind(this)

       this.refresh();
   } 
   handleChange(e){
       this.setState({...this.state, description: e.target.value})
   }

   refresh(){
       axios.get(`${URL}?sort=-createAt`)
       .then(resp => console.log(resp.data))
   }

   handleAdd(){
       //console.log(this.state.description);
       const description = this.state.description
       axios.post(URL, { description })
       .then(resp => this.refresh())
   }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro">
                </PageHeader>
                <TodoForm description={this.state.description}
                handleAdd={this.handleAdd}
                handleChange={this.handleChange}/>
                <TodoList list={this.state.list}/>
            </div>
            
        )
    }
}

export default Todo