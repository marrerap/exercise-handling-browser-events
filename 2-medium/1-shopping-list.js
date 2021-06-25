const newItemForm = document.getElementById("newItemForm")
newItemForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const item = document.getElementById('item')
    const shoppingList = document.getElementById("shoppingList")
    const listItem = document.createElement('li')
    shoppingList.appendChild(listItem)
    listItem.textContent = item.value
    
})