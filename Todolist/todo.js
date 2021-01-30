const addform = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};

const filtertodos = term => {
    //add filered class
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    //removing filtered class
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));

};

//add element to list
addform.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addform.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addform.reset();
    }
});

//delete todos

list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});


//keyup events
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filtertodos(term);
});