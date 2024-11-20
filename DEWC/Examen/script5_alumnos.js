// Selección de elementos del DOM

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Cargar tareas desde localStorage al cargar la página

window.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);

// 1.- MAKE: Escuchar Evento click para añadir tareas
document.getElementById('addTaskBtn').addEventListener('click',function(){
    addTaskToList(document.getElementById('taskInput').value, false);
    saveTaskToLocalStorage(document.getElementById('taskInput').value, false)
});


/*document.getElementById('chek')[0].addEventListener('change',function(){
    updateTaskStatusInLocalStorage("hola");
    console.log(this);
})*/




// 2.- MAKE: Evento para reducir el tamaño del input al hacer clic
taskInput.addEventListener('click', () => {
    // Aplicar la animación: hacer
    // Quitar la animación después
    setTimeout(() => {
        taskInput.style.animation = ''; 
    }, 500);
});

// 3.- MAKE: Función para añadir una tarea a la lista
function addTaskToList(taskText, completed) {
    // Crear el elemento de tarea
    tarea=document.createElement('li');
    if(completed){// Crear el checkbox
        row ="<input type='checkbox' checked id='chek'>";
    }else{
         row ="<input type='checkbox' id='chek' >";
    }
    row+= "<p id='text'>"+taskText+"</p>";
    row+= "<input type='button' id='dlt' value='❌' class='delete-btn' >";
    tarea.innerHTML=row;
    tarea.classList.add('task-item');
    document.getElementById('taskList').appendChild(tarea);
    
   



    // Si la tarea está marcada como completada, se escucha el change sobre el checkbox
    //para cambiar el color a azul del checkbox, si no a blancos y 
    //para modificar en LocalStorage el valor del checkbos a checked
 

    // Crear el elemento de texto de la tarea
   

    // Crear el botón de eliminar
   
     // Emoji de "Eliminar"
    
    //añadir la clase delete-btn
    //Escuchar sobre el boton deleteBtn el click y
   
        // Verificar si la casilla está marcada antes de eliminar y sacar
        // un mensaje indicativo en el caso de que no esté chequeada, "no se puede borrar"
        

    // Agregar los elementos al `taskItem`

    // Agregar taskItem a taskLis
    }



//4.- MAKE: Función para eliminar una tarea con animación
function fadeOutAndRemove(taskItem, taskText) {
    // Añadir la clase de animación
  
    
    // Esperar a que la animación termine 500ms antes de eliminar del DOM
    setTimeout(() => {
        taskList.removeChild(taskItem); // Eliminar del DOM
        removeTaskFromLocalStorage(taskText); // Eliminar de localStorage
    }, 500); // Duración de la animación en milisegundos
}

// Guardar tarea en localStorage
function saveTaskToLocalStorage(taskText, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskText, completed });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Actualizar el estado de una tarea en localStorage
function updateTaskStatusInLocalStorage(taskText, completed) {

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex(task => task.text === taskText);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

// Eliminar una tarea de localStorage
function removeTaskFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}

// Cargar tareas desde localStorage
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task.text, task.completed));
}
