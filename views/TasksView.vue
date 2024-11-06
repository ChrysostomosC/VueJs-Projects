<template>
    <h1>Todo List</h1>

    <!-- Input for adding new tasks -->
    <!-- v-model is used for two-way data binding between the input and the 'newTodo' data property -->
    <input type="text" v-model="newTodo" placeholder="Add a new task" />

    <!-- Button to trigger the addTodo method when clicked -->
    <button @click="addTodo">Save Task</button>

    <!-- List of tasks -->
    <!-- v-for is used to loop through the 'todos' array and display each task -->
    <!-- :key is used to help Vue efficiently update the list when items change -->
    <!-- :class dynamically binds the 'completed' class based on the 'completed' property of each todo -->
    <p v-for="(todo, index) in todos" :key="index" :class="{ completed: todo.completed, 'active-task': !todo.completed }">
        
        <!-- Checkbox to mark a task as completed -->
        <!-- v-model is used to bind the checkbox to the 'completed' property of the todo -->
        <input type="checkbox" v-model="todo.completed">
        
        <!-- Display the title of the todo -->
        {{ todo.title }}
        
        <!-- Button to delete the task, triggering the deleteTodo method -->
        <button @click="deleteTodo(index)">Delete</button>
    </p>
</template>

<script>
// Exporting the Vue component
export default {
    // Data properties for the component
    data() {
        return {
            newTodo: '', // Holds the value of the new task to be added
            todos: [
                {title: "Walk the dog"},
                {title: "Cook meal"},
                {title: "Feed the fish"},
                {title: "Water the plants"},
                {title: "Do the grosseries"},
            ] // Array to store the list of todos
        }
    },
    methods: {
        // Method to add a new todo
        addTodo() {
            // Check if the input is not empty
            if (this.newTodo.trim() !== '') {
                
                // Add the new todo to the list with 'completed' initially set to false
                this.todos.push({ title: this.newTodo, completed: false });
                
                // Clear the input field
                this.newTodo = '';
            }
        },
        // Method to delete a todo by its index
        deleteTodo(index) {
            
            // Remove the todo from the array
            this.todos.splice(index, 1);
        }
    }
}
</script>

<style>

/* Style for completed tasks */
.completed {
    text-decoration: line-through; /* Strikethrough text */
    color: rgb(236, 26, 26); /* Change the text color to red */
}

/* Style for active (incomplete) tasks */
.active-task {
    color: rgb(2, 142, 2); /* Green color for active tasks */
}

</style>