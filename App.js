import React from 'react';
import { StyleSheet, Text, View , FlatList, AsyncStorage } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle'
import Input from './app/components/InputBox';
import TodoItem from './app/components/TodoItem';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      inputValue:'',
      todos:[]
    }
  }
  componentWillMount(){
    this.getData()
  }
  storeData = ()=>{
    AsyncStorage.setItem('@todo:state',JSON.stringify(this.state));
  }
  getData =()=>{
    AsyncStorage.getItem('@todo:state').then((state)=>{
      if(state !== null){
        this.setState(JSON.parse(state));
      }
    })
  }


  _makeTodoItem = ({item,index})=> {
    return(
      <TodoItem name = {item.title}
      isComplete={item.isComplete}
      changeComplete={() => {
        const newTodo = [...this.state.todos];
        newTodo[index].isComplete = !newTodo[index].isComplete;
        this.setState({todos:newTodo},this.storeData);
      }}
      deleteItem={() => {
        const newTodo = [...this.state.todos];
        newTodo.splice(index,1);
        this.setState({todos:newTodo},this.storeData);
        }}      
      />
    )
    }
    _changeText=(value)=>{
      this.setState({inputValue:value});
    }

    _addTodoItem = () => {
      if(this.state.inputValue != ''){
      const prevTodo = this.state.todos; //현재의 todos를 prevTodo에 넣습니다.
      const newTodo = { title: this.state.inputValue, isComplete : false}; //현재 input창에 있는 값을 새로운 할일로 등록
      this.setState({
      inputValue: '', //TodoItem이 추가되면 입력창은 비어야하므로
      todos: prevTodo.concat(newTodo) // 이전의 TodoItem에 새 Todo를 이어붙여 todos값으로 변경
      },this.storeData);
    }
  }




  render(){
    return (
      <View style={styles.container}>
        <View style={styles.headercenter}>
          <Header/>
        </View>
        <View style={styles.subContainer}>
          <SubTitle title="할 일을 입력해주세요"/>

          <Input
          value ={this.state.inputValue}
          changeText = {this._changeText}
          addTodoItem = {this._addTodoItem}/>

        </View>
        <View style={styles.subContainer}>
          <SubTitle title="해야할 일 목록"/>

          <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoItem} //_makeTodoItem은 우리가 Item을 render하는 방법에 대해 나타내고 후에 작성해줍니다
            keyExtractor={(item, index) => { return `${index}`}}/>

        </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headercenter : {
    alignItems:"center",
  },
  subContainer : {
    marginLeft : 20,
  },
});
