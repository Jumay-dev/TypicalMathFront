<template>
  <div id="app">
    <h1>Выберите типовую задачу</h1>
    <hr>
    <GridTasks :tasks="tasks" v-if="!isLoading"/>
    <LoaderGrin v-else />
  </div>
</template>

<script>
import GridTasks from "../components/GridTasks"
import LoaderGrin from "../components/LoaderGrin"

export default {
    components: {
        GridTasks,
        LoaderGrin
    },
    props: [ "tasks", "isLoading" ],
    data() {
      return {
        
      }
    }
}
</script>