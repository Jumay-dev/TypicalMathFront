<template>
    <div class="col-lg-4 col-md-6 col-sm-12 mt-2">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{task.title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{task.subtitle}}</h6>
                <p class="card-text">{{task.text}}</p>
                <router-link :to="{ name: 'Task', params: { id: task.id, task } }" type="button" class="btn btn-success" :task="task">Выбрать</router-link>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: [ "task" ]
}
</script>