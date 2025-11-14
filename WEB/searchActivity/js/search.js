const list = document.getElementById('fruitList');
/*this variable will hold any element with the list item tag*/
const items = list.getElementsByTagName('li');
/*this variable will hold the user input*/
const input = document.getElementById('searchBox');

document.getElementById('searchButton').addEventListener('click', () => {
    //converting whatever the user inputted to lowercase to make it easier to search the list
    // so that case sensitivity is not an issue
    const filter = input.value.toLowerCase();

    for(let counter = 0; counter < items.length; counter++){
        // converting the items to lowercase to make it easier for searching
const itemText = items[counter].textContent.toLowerCase();

//check if the current item from the list id the same as the searched item
if (itemText.includes(filter)) {
    // if it is the fruit we just show the fruit
    items[counter].style.display = '';
} else{
    // otherwise if it is not it just shoes nothing
    items[counter].style.display = 'none';
}

    }
});