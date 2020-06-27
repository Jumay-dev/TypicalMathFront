<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">{{field.varb}}</span>
        </div>
        <input type="text" 
        class="form-control " 
        :placeholder=field.measure
        @input="changeValue"
        v-model="inpValue"
        >
        </div>        
    </div>
</template>

<script>
export default {
    props: [ "field" ],
    data() {
        return {
            inpValue: this.field.val,
            inpVarb: this.field.varb
        }
    },
    methods: {
        changeValue() {
            this.$emit('updateForm', {
                // [this.inpVarb]: this.inpValue
                sendVarb: this.inpVarb,
                sendVal: this.inpValue
            })
        }
    }
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