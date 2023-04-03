<template>
  <div class="todo-footer" v-show='total'>
    <label>
      <input type="checkbox" v-model="isall">
    </label>
    <span>
      <span>已完成{{doneTodo}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click='deletTodo'>清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name: 'UserFooter',
        props: ['todos', 'checkall', 'deletTodo'],
        methods:{
          checkal(e){
            this.checkall(e.target.checked)

          }
        },
        computed:{
            doneTodo(){
              return this.todos.reduce((pre, current)=>pre+current.done, 0)
            },
            total(){
              return this.todos.length
            },
            isall:{
              get(){
                return this.doneTodo == this.total
              },
              set(value){
                  console.log(value);
                  this.checkall(value)
              }
              
            }
        }
    }
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>