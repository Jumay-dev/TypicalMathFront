<template>
  <div id="app">
    <h1>Выберите типовую задачу</h1>
    <hr>
    <GridTasks :tasks="tasks"/>
  </div>
</template>

<script>
import GridTasks from "./components/GridTasks"

export default {
  name: 'App',
  components: {
    GridTasks
  },
  data() {
    return {
      tasks: [  //Временно на front, реально будем получать с back
        {id: 0, title: "Расчет маневра", subtitle: "Кватернионы", text: "Описание задачи будет реализовано здесь"},
        {id: 1, title: "Название задачи", subtitle: "Тип матаппарата", text: "Описание задачи будет реализовано здесь"},
        {id: 2, title: "Название задачи", subtitle: "Тип матаппарата", text: "Описание задачи будет реализовано здесь"},
        {id: 3, title: "Название задачи", subtitle: "Тип матаппарата", text: "Описание задачи будет реализовано здесь"},
        {id: 4, title: "Название задачи", subtitle: "Тип матаппарата", text: "Описание задачи будет реализовано здесь"},
        {id: 5, title: "Название задачи", subtitle: "Тип матаппарата", text: "Описание задачи будет реализовано здесь"},
        {id: 6, title: "Название задачи", subtitle: "Тип матаппарата", text: "Описание задачи будет реализовано здесь"},
        {id: 7, title: "Название задачи", subtitle: "Тип матаппарата", text: "Описание задачи будет реализовано здесь"},
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
