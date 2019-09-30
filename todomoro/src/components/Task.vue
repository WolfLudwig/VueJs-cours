<template>
    <div class="task">
        <h2 class="tasks__title">{{title}}</h2>
        <input type="text" v-model="newTask"><button @click="add">Envoyer</button>
        <ul>
            <li :key="task" v-for="(task, index) in tasks" :class="{done: task.completed}">
                <input type="checkbox" v-model="task.completed">
                {{ task.name }}
                <button @click="suppress(index)" >X</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "task",
    data: function(){
        return{
            title:"Liste test",
            newTask: "",
            tasks:[
                {name: "Test",
                completed: false},
                {name: "Test2",
                completed: false}
            ]
        }
    },
    methods:{
        add: function(){
            let ntask = this.newTask.trim();
            this.tasks.push({name: ntask,completed: false});
            this.newTask = " ";
        },
        suppress: function (index) {
            this.tasks.splice(index,1);
        },
    }
}
</script>
<style lang="scss">
.task{
    width: 30%;
    background-color: darkgray;
    border: 1px solid black;
    border-radius: 15px 0;
}
.tasks__title{
    background-color: black;
    color: white;
}
.done{
    text-decoration: line-through;
}
</style>