const targetDiv = document.querySelector('.target')
const list = document.querySelector('.list')


const newP = document.createElement('p')
newP.textContent = "Этот текст был создан в JS файле"
//targetDiv.append(newP)
targetDiv.insertAdjacentHTML('afterend','<li>new li</li>')

function createList() {
    for (let i=0; i<5; i+=1) {
        const newLi = document.createElement('li')
        newLi.textContent = '№' + (i+1)
        list.append(newLi)
    }
}
createList()

