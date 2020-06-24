<template>
    <div class="col-4 mt-2">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{task.title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{task.subtitle}}</h6>
                <p class="card-text">{{task.text}}</p>
                <button type="button" class="btn btn-success">Выбрать</button>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: [ "task" ]
}
</script>