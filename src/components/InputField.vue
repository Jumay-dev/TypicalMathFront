<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">{{val.varb}}</span>
        </div>
        <input type="text" 
        class="form-control " 
        :placeholder=val.measure
        :value=val.val
        >
        </div>        
    </div>
</template>

<script>
export default {
    props: [ "val" ],
}
</script>

<style scoped>
    .input-group {
        width: 200px;
    }
    .input-group-text {
        width: 60px;
    }
</style>