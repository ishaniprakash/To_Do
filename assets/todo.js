const button = document.querySelector('i#add_button')
const input = document.querySelector('input#add_item')
const toggle = document.querySelector('input#switch-1')
const list = document.querySelector('ol')
const body = document.querySelector('body')


input.addEventListener('keydown', e => {
    const key = e.key
    if (key === 'Enter') {
        handleAdd()
    }
})



const handleAdd = (e) => {
        list.style.visibility = "visible"
        const textToAdd = input.value
        if(textToAdd.length>0){
            const ele = document.createElement('li')
            const text_node = document.createTextNode(textToAdd)
            ele.appendChild(text_node)
            list.appendChild(ele)
            input.value = ''

            // Delete a task
            const button = document.createElement('button');
            button.innerHTML = "Delete";
            ele.appendChild(button);
            ele.style.display = "flex"
            ele.style.justifyContent = "space-between"
            ele.style.backgroundColor = "#f1f1f1"
            ele.style.marginTop = "5px"
            ele.style.padding = "3px"
            ele.style.borderRadius = "5px"
            button.style.position = "relative"
            button.style.right = "2px";

            button.addEventListener('click',(e) => {
                ele.remove();
            })
        }
        else{
            window.alert("Add something to add");
        }
        
    
    }
   
    // const itemToAdd = input


button.addEventListener('click', handleAdd)

toggle.addEventListener('click',e =>{
    body.style.backgroundColor =  "#000000";
})
