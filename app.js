const addForm = document.querySelector(".add");//reference to form
const list = document.querySelector(".todos"); //reference to ul





//Adding todos
const generateTemplate = (todo) => {
  const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fa fa-trash-o delete"></i>
    </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  // console.log(todo);

  //check - for true if the todo lenght is greater than 1 it return true to if condition
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); //to reset the input
  }
});





// Deleting todos - we are using event delegation
//we already had reference for ul
list.addEventListener("click", (e) => {
  //  if (e.target.tagName === "I")
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});




//Filter and Searching - keyup event
//cont search = document.querySelector('.search input');
const search = document.querySelector(".input-field"); //reference to search input

const filterTodos = (term) => {
    Array.from(list.children)
      .filter((todo) => !todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.add("filtered"));
    
    
    
    Array.from(list.children)
      .filter((todo) => todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.remove("filtered"));
    
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

// Sample data for initial todos
const todos = [
  { text: 'Create a Javascript Project', date: '2022-01-01' },
  { text: 'Learn Programming', date: '2022-01-02' }
];

const todoList = document.getElementById('todoList');
const addTodoForm = document.getElementById('addTodoForm');
const newTodoInput = document.getElementById('newTodoInput');

// Function to render todos
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

      listItem.innerHTML = `
          <div>
              <span class="sr-no">${index + 1}.</span>
              <span>${todo.text}</span>
              <span class="date">${todo.date}</span>
          </div>
          <div>
              <i class="fa fa-edit edit" onclick="editTodo(${index})"></i>
              <i class="fa fa-trash-o delete" onclick="deleteTodo(${index})"></i>
          </div>
      `;

      todoList.appendChild(listItem);
  });
}

// Function to add a new todo
function addTodo() {
  const newText = newTodoInput.value.trim();
  if (newText !== '') {
      const newTodo = { text: newText, date: getCurrentDate() };
      todos.push(newTodo);
      renderTodos();
      newTodoInput.value = '';
  }
}

// Function to get the current date in the format YYYY-MM-DD
function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Function to edit a todo
function editTodo(index) {
  const newText = prompt('Edit Todo:', todos[index].text);
  if (newText !== null) {
      todos[index].text = newText;
      renderTodos();
  }
}

// Function to delete a todo
function deleteTodo(index) {
  const confirmDelete = confirm('Are you sure you want to delete this todo?');
  if (confirmDelete) {
      todos.splice(index, 1);
      renderTodos();
  }
}

// Event listener for adding a new todo
addTodoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addTodo();
});

// Initial rendering of todos
renderTodos();

// ... (your existing code)

// Function to add a new todo
function addTodo() {
  const newText = document.getElementById('newTodoInput').value.trim();
  if (newText !== '') {
      const newTodo = { text: newText, date: getCurrentDate() };
      todos.push(newTodo);
      renderTodos();
      document.getElementById('newTodoInput').value = '';
  }
}

// ... (your existing code)

