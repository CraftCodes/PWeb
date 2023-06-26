const localStorageName = 'to-do-list-cc'

function newTask()
{
    let input = document.getElementById('input-new-task')

    // validação

    if(!input.value){
        alert('Digite algo para inserir em sua lista')
    }
    //else if(){}
    else{
        //incrementar no armazenamento local
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName,JSON.stringify(values))
    }
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++){
        list.innerHTML = <li>${values[i]['name']}</li>
    }
}