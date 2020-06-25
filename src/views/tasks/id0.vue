<template>
    <div>
        <!-- <h2>{{task.title}}</h2>
        <p>{{task.text}}</p>
        <p>Введите начальные данные</p>
        <hr> -->
        <InputField />
        <InputField />
        <InputField />
        <InputField />
    </div>
</template>

<script>
import InputField from "../../components/InputField"

export default {
    components: {
        InputField
    },

    props: [ "task" ]
}
</script>