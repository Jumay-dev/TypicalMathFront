<template>
<div class="container">
  <div class="row" >
      <TypTask  
        v-for="task in tasks" 
        :key="task['id']"
        :task="task"
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