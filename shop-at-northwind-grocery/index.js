// Products page:
function getAllProducts() {
    fetch('http://localhost:8081/api/products')
    .then(response => response.json())
    .then(products => {
        console.log(products)
        for (product of products) {
            showCard(product)
        }
    })
}

function selectHandler() {
    let select = document.querySelector('#select')
    if (select.value === "view-all") {
        getAllProducts()
    } else if (select.value === "s-by-cat") {
        getAllCategories()
    } else {
        null
    }
}

function getAllCategories() {
    fetch('http://localhost:8081/api/categories')
    .then(response => response.json())
    .then(categories => {
        console.log(categories)
        showSecondDropdown(categories)
    })
}

function showSecondDropdown(categories) {
    let main = document.querySelector('main')
    let select2 = document.createElement('select')
    select2.id = 'select-2'
    select2.onchange = filterByCategories
    main.append(select2)
    
    let option = new Option('Select...', 0) //Initial option "Select..."
    select2.append(option)
    for (let category of categories) {
        let option = new Option(category.name, category.categoryId)
        select2.append(option)
    }
}

function filterByCategories() {
    let select2 = document.querySelector('#select-2')
    let productCategoryId = select2.value 
    fetch('http://localhost:8081/api/products')
    .then(response => response.json())
    .then(products => {
        return products.forEach(product => {
            if (product.categoryId === productCategoryId) {
                showCard(product)
            }
        })
    })
}

function showCard(product) {
    let main = document.querySelector('main')
    let anchor = document.createElement('a')
    anchor.href = `http://127.0.0.1:5500/shop-at-northwind-grocery/details_page.html?productId=${product.productId}`
    anchor.target = '_blank'

    let cardContainer = document.createElement('div')
    cardContainer.style.width = '18rem'
    cardContainer.className = 'card'
    anchor.append(cardContainer)
    main.append(anchor)

    
    let ui = document.createElement('ui')
    ui.className = 'list-group list-group-flush'
    cardContainer.append(ui)

    for (key in product) {
        let li = document.createElement('li')
        li.className = 'list-group-item'
        li.textContent = `${key}: ${product[key]}`
        ui.append(li)
    }
}

