let usersList = []

// function getUsers() {
//     let promise = fetch('https://jsonplaceholder.typicode.com/users')
//     let response = await promise;
//     let data = await response.json()
//     usersList = data
//     console.log(usersList)
// }

async function populateTable() {

    let promise = fetch('https://jsonplaceholder.typicode.com/users')
    let response = await promise;
    let data = await response.json()
    usersList = data
    console.log(usersList)

    const keys = ["id", "name", "username", "email", "phone", "website"]
    let tableBody = document.querySelector('#table-body')
    
    for (user of usersList) {
        let tr = document.createElement('tr')
        tableBody.append(tr)

        for (key of keys) {
            let td = document.createElement('td')
            console.log(user)
            td.innerText = user[key]
            console.log(user[key])
            tr.append(td)
        }
    }
}

populateTable()