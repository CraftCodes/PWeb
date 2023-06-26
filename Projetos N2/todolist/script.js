const localStorageName = 'to-do-list-cc'

function validateNewTask(){ // conferir se não há tasks iguais já adicionadas
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
}


function newTask()
{
    let input = document.getElementById('input-new-task') // caixa de preenchimento
    input.style.border = ''

    // validação (da 16 a 36)

    if(!input.value){
        input.style.border = '2px solid red'
        alert('Digite algo para inserir em sua lista') // caso o usuário não tenha preenchido nada
    }

    else if(validateNewTask()){
        input.style.border = '2px solid yellow'
        alert('Já existe uma tarefa com este objetivo.') // caso haja a repetição de algum item (vide função "validateNewTask")
    }

    else{
        //incrementar no armazenamento local
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName,JSON.stringify(values))
        showValues()
    }
    input.value = ''    // limpar a caixa de texto para adicionar mais tarefas
}

function showValues(){ // mmodificar o HTML, adicionando o texto digitado
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++) // laço de repetição para adicionar várias tarefas
    {
        list.innerHTML += `<li>${values[i]['name']}<button id='button-ok' title='Marcar tarefa como concluída' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
      </svg></button></li>`
    }
}

function removeItem(data){ // remover a tarefa que o usuário tenha realizado da lista
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageName,JSON.stringify(values))
    showValues()
}

showValues() // sempre que abrir a página, mostrar a sua lista armazenada