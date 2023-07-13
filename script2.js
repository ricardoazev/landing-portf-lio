
const ul = document.querySelector('ul')

function getApiGitHub() {
  fetch('https://api.github.com/users/ricardoazev/repos')
    .then(async response => {

        if(!response.ok){
            throw new Error(response.status)
        }

        var data = await response.json()

        data.map( item => {
            let li = document.createElement('li')

            li.innerHTML = `
            <strong>${item.name.toUpperCase()}</sstrong><br>
            <span>URL: ${item.url}</span><br>
           <span>Data Criação:
            ${Intl.DateTimeFormat('pt-br')
             .format(new Date(item.created_at))}
            </span><br>
            `

            ul.appendChild(li)
        })

    }).catch(e => console.log(e))
}

getApiGitHub()

