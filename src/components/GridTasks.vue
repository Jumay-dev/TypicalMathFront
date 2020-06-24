<template>
<div class="container">
  <div class="row" >
      <TypTask 
        :task="task" 
        v-for="task in tasks" 
        :key="task.id"
      />
  </div>
</div>    
</template>

<script>
import TypTask from "./TypTask"

export default {
    components: {
        TypTask
    },
    props: [ "tasks" ]

}
</script>