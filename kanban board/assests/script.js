document.getElementById('saveButton').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText) {
        var newTask = document.createElement('div');
        newTask.classList.add('card-item');
        newTask.setAttribute('draggable', true);
        newTask.textContent = taskText;
        
        // Add drag event listeners
        newTask.addEventListener('dragstart', dragStart);
        newTask.addEventListener('dragend', dragEnd);

        document.getElementById('todo').appendChild(newTask);
        taskInput.value = '';
    }
});

var cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('dragover', dragOver);
    card.addEventListener('drop', drop);
});

var draggedItem = null;

function dragStart(event) {
    draggedItem = event.target;
    setTimeout(() => event.target.style.display = 'none', 0); // Hide element while dragging
}

function dragEnd(event) {
    setTimeout(() => event.target.style.display = 'block', 0); // Show element after drop
    draggedItem = null;
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var card = event.target.closest('.card');
    if (card && draggedItem) {
        card.appendChild(draggedItem);
    }
}
