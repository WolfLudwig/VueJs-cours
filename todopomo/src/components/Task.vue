<template>
    <div>
        <h3> {{title}} </h3>
        <input type="text">
        <ol>
            <li v-bind:key="task" v-for="task in tasks">
                {{ task.name }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "Task",
    data: function(){
        return{
            title:"Liste test",
            newTask: "",
            tasks:[
                {
                    name: "Test",
                    complited: false
                },
                {
                    name: "Test2",
                    complited: false
                }
            ],
        }
    }
    
}
</script>

<style lang="scss">


</style>