let app = new Vue({
    el: "#app",
    data: {
        newTask: "",
        title: "La to do list for WAAAAAAAAAAAAGH!",
        todos: [
            { 
                name:"Suit up",
                completed: false
            }, 
            {
                name: "Arm up",
                completed: false
            }, 
            {
                name: "Waaaaaaaaaagh",
                completed: false
            },
            {
                name: "Die",
                completed: false
            }
        ],
    },
    methods: {
        suppress: function (index) {
            this.todos.splice(index,1);
        },
        add: function(){
            let task = this.newTask.trim();
            this.todos.push({name: task, completed: false});
            this.newTask = " ";
        }
    }
})