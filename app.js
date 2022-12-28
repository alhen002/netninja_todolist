const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const  search = document.querySelector('.search input');
// adding todos
const generateTemplate = todo => { // html template, das eingefügt wird mit der todo
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html; // fügt das template der liste hinzu als letztes item
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); // entfernt gleichzeitig leerzeichen. dot notation ist hier möglich weil form und add der name des input fields ist
    if(todo.length){ // check ob das todo einen inhalt hat, damit keine nullwerte hinzugefügt werden können
        generateTemplate(todo);
        addForm.reset(); // resettet alle input fields des forms
    }
    
})

// deleting items

list.addEventListener('click', e => {
    // console.log(e.target);
    if (e.target.classList.contains('delete')) { // check ob das angeklickte element die class delete hat
        e.target.parentElement.remove();
    }
})

// filtering items

const filterToDos = (term) => {

    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term)) // filtert nach allen inhalten des arrays die den inhalt NICHT haben
    .forEach(todo => todo.classList.add('filter')) // fügt all jenen inhalten eine klasse hinzu

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term)) // filtert nach allen inhalten des arrays die den inhalt haben
    .forEach(todo => todo.classList.remove('filter')) // fügt all jenen inhalten eine klasse hinzu
};

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase().trim(); // der aktuelle inhalt bei jedem keyup event
    filterToDos(term);
});

