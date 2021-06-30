let checkbox = document.getElementById('checkboxs')
let nav_ul = document.getElementById('nav-ul')
let ham_icon = document.getElementById("ham-icon")
let modal_button = document.getElementById("modal-close")
let modal_open = document.getElementsByClassName('select-reward')

let second_half = document.getElementsByClassName('second-half')
let first_half = document.getElementsByClassName('first-half')
let radio_buttons = document.getElementsByName('pledge-option')

let moneyinput = document.getElementsByClassName('money')
let donate_button = document.getElementsByClassName("continue")
let bookmark = document.getElementById('bookmark-button')
let buttonarray = []

let bookmarked = false;
function assignModal() {
    let array = []

    for (i=0; i< modal_open.length; i++) {
        array.push(modal_open[i])
    }

    array.forEach(function(item) {
        item.addEventListener('click', function() {
            document.querySelector('.popupspace').style.display = "flex"

        })
    })
}

function updateStats(event) {
    item = event.target;
    inputs = item.previousElementSibling;
    totalbackers = parseInt(document.getElementById('totalbackers').innerHTML)
    if(inputs != null) {
        if (inputs.value < parseInt(inputs.min) || inputs.value > parseInt(inputs.max)) {
            alert("donation value out of bounds")
        }
        else{
         
            totalmoney = document.getElementById('totalmoney')
            newtotal = parseInt(totalmoney.innerHTML) + parseInt(inputs.value);
            totalmoney.innerHTML = newtotal.toString();
        

        }
    }
    totalbackers += 1

    document.querySelector('.popup').style.display = "none";                
    document.querySelector('.secondpopup').style.display = "flex";
    document.getElementById('totalbackers').innerHTML = totalbackers.toString()
    
    
}


function displayPledge() {
    for(j=0;j<radio_buttons.length; j++) {
       
        if (radio_buttons[j].checked) {
            first_half[j].style.borderStyle = "none";
            second_half[j].style.display = "flex";
    
        }
        else {
            second_half[j].style.display = "none";
            first_half[j].style.borderStyle = "solid";
           
    
    
        }
        

    }

}



// Event Listeners

for(i=0;i<donate_button.length; i++) {
    buttonarray.push(donate_button[i])
}

buttonarray.forEach(function(el) {
    el.addEventListener('click', updateStats)
})

checkboxs.addEventListener('click', function() {
    if (checkbox.checked) {
        nav_ul.style.top = "100px"
        nav_ul.style.zIndex = "2"
        ham_icon.src = "crowdfunding-product-page-main/images/icon-close-menu.svg"
        
    }
    else {
        nav_ul.style.top = "-300px"
        nav_ul.style.zIndex = "0"
        ham_icon.src = "crowdfunding-product-page-main/images/icon-hamburger.svg"



    }
})
bookmark.addEventListener('click', function() {
    if (!bookmarked)  {
        bookmark.style.backgroundColor = "hsl(176, 50%, 47%)";
        bookmark.children[1].innerHTML = "bookmarked"
        bookmarked = true;
    }
    else {
        bookmark.style.color = "black"
        bookmark.children[1].innerHTML = "bookmark"
        bookmarked = false;


    }
    

})

modal_button.addEventListener('click', function() {
    document.querySelector('.popupspace').style.display = "none"
})

document.querySelector('.got-it').addEventListener('click',function() {
    document.querySelector('.popupspace').style.display = "none";
    document.querySelector('.popup').style.display = "flex";
    document.querySelector('.secondpopup').style.display = "none";

})


window.setInterval(displayPledge,10)
assignModal()
