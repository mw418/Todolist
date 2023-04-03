<template>
<li>
    <label>
        <!-- <input type="checkbox" :checked='todo.done' @change='check(todo.id)'> -->
        <input type="checkbox" v-model='todo.done'>
        <span>{{todo.title}}</span>
    </label>
    <button class='btn btn-danger' @click='delet(todo.title)' :clear='clear'>删除</button>
  </li>
</template>

<script>
    export default {
        name: 'Item',
        props:['todo', 'clear'],
        methods:{
            delet(x){
                if(confirm(`${x}确定删除吗？`)){
                    this.clear(x)
                }
            }
        }
    }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
.todo-enter-active{
  animation: todo 0.5s linear;
}
.todo-leave-active{
  animation: todo 0.5s linear reverse;
}
@keyframes todo {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>