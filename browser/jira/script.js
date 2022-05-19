let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modelcount = document.querySelector(".model-cont");
let maincont = document.querySelector(".main-cont");
let textareacont = document.querySelector(".textarea-cont");

let AllPriorityColor = document.querySelectorAll(".priority-color");
let colors = ["lightpink","lightgreen","lightblue",'black'];
let modelPrioritycolor = colors[colors.length - 1];

let lockElem = document.querySelector(".ticket-lock");
let toolBoxColor = document.querySelectorAll(".color");

//listener for model priority color
AllPriorityColor.forEach((colorElem, idx)=>{
    colorElem.addEventListener("click",(e)=>{
        AllPriorityColor.forEach((prioritycolorElem,idx)=>{
            prioritycolorElem.classList.remove("border");
        })
        colorElem.classList.add("border")
        modelPrioritycolor = colorElem.classList[0];
    })
})

//add btn
let addFlag = false;
let removeFlag = false;

//lock and unlock btn
let lockClass = "fa-lock"
let unLockClass = "fa-lock-open"



//feltering
let ticketsArr = [];

if(localStorage.getItem("jira-ticket")){
    ticketsArr = JSON.parse(localStorage.getItem("jira-ticket"));
    ticketsArr.forEach((ticketsObj)=>{
        createTicket(ticketsObj.ticketColor,ticketsObj.ticketTask,ticketsObj.ticketID)
    })
}

for(let i = 0;i<toolBoxColor.length;i++){
    toolBoxColor[i].addEventListener("click",(e)=>{
        let currentToolBoxColor = toolBoxColor[i].classList[0];

        let filterTickets = ticketsArr.filter((ticketsObj,idx)=>{
            return currentToolBoxColor === ticketsObj.ticketColor;
        })

        //remove previous ticket
        let allTicketCont = document.querySelectorAll(".ticket-cont");
        for(let i = 0;i<allTicketCont.length;i++){
            allTicketCont[i].remove();
        }

        //display new filter ticket
        filterTickets.forEach((ticketsObj,idx)=>{
            createTicket(ticketsObj.ticketColor,ticketsObj.ticketTask,ticketsObj.ticketID)
        })
    })

    toolBoxColor[i].addEventListener("dblclick",(e)=>{
        let allTicketCont = document.querySelectorAll(".ticket-cont");
        for(let i = 0;i<allTicketCont.length;i++){
            allTicketCont[i].remove();
        }

        ticketsArr.forEach((ticketsObj,idx)=>{
            createTicket(ticketsObj.ticketColor,ticketsObj.ticketTask,ticketsObj.ticketID)
        })
    })
}

//add btn event
addBtn.addEventListener("click",(e)=>{
    addFlag = !addFlag;
    if(addFlag){
        modelcount.style.display = "flex";
    }else{
        modelcount.style.display = "none";
    }
})

// removebtn
removeBtn.addEventListener("click",(e)=>{
    removeFlag = !removeFlag;
})

//use shift key to enter ticket data...
modelcount.addEventListener("keydown",(e)=>{
    let key = e.key;
    if(key === "Shift"){
        createTicket(modelPrioritycolor,textareacont.value);
        // modelcount.style.display = "none";
        addFlag = false;
        // textareacont.value = "";
        setModelToDefault();
    }
})


//create a ticket
function createTicket(ticketColor,ticketTask,ticketID){
    let id = ticketID || shortid();
    let ticketcout = document.createElement("div");
    ticketcout.setAttribute("class","ticket-cont");
    ticketcout.innerHTML = `
        <div class = "ticket-color ${ticketColor}"></div>  
        <div class = "ticket-id">Ticket Id:- #${id}</div>  
        <div class = "task-area">${ticketTask}</div>  
        <div class = "ticket-lock">
            <i class = "fas fa-lock"></i>
        </div>
    `;
    maincont.appendChild(ticketcout);
    
    //create object of ticket and add to array
    if(!ticketID) {
        ticketsArr.push({ticketColor,ticketTask,ticketID:id})
        localStorage.setItem("jira-ticket",JSON.stringify(ticketsArr))
    }    

    handleRemoval(ticketcout,id);
    handlelock(ticketcout,id);
    handleColor(ticketcout,id);
}

//remove ticket
function handleRemoval(ticket,id){
    //removeFlag = true -> remove
    ticket.addEventListener("click",(e)=>{
        if(!removeFlag) return ;
        let idx = getTicketIdx(id);

        // DB removal
        ticketsArr.splice(idx,1)

        let strTicketArr = JSON.stringify(ticketsArr);
        localStorage.setItem("jira-ticket",strTicketArr);

        ticket.remove(); //UI removal
    })
}

//lock and unlock function
function handlelock(ticket,id){
    let ticketlockElem = ticket.querySelector(".ticket-lock");
    let ticketLock = ticketlockElem.children[0];
    let ticketTaskArea = ticket.querySelector(".task-area")
    ticketLock.addEventListener("click", (e) => {
        let ticketIdx = getTicketIdx(id);
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unLockClass);
            ticketTaskArea.setAttribute("contenteditable","true");
        }else{
            ticketLock.classList.remove(unLockClass); 
            ticketLock.classList.add(lockClass);
            ticketTaskArea.setAttribute("contenteditable","false");
        }

        //modify data in local storage (ticket task)
        ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
        localStorage.setItem("jira-ticket",JSON.stringify(ticketsArr));
    })
}

//color handle in ticket
function handleColor(ticket,id){
    let ticketColor = ticket.querySelector(".ticket-color");
    ticketColor.addEventListener("click",(e)=>{
        let ticketIdx = getTicketIdx(id);
        let currentTicketColor = ticketColor.classList[1];
        //get ticket color id
        let currentTicketColorIdx = colors.findIndex((color)=>{
            return currentTicketColor === color;
        })
        currentTicketColorIdx++;
        let newTicketColorIdx = currentTicketColorIdx % colors.length;
        let newTicketColor = colors[newTicketColorIdx];
        ticketColor.classList.remove(currentTicketColor);
        ticketColor.classList.add(newTicketColor);

        //modify data in local storage (priority color)
        ticketsArr[ticketIdx].ticketColor = newTicketColor;
        localStorage.setItem("jira-ticket",JSON.stringify(ticketsArr));
    })
}

function getTicketIdx(id){
    let ticketIdx = ticketsArr.findIndex((ticketObj)=>{
        return ticketObj.ticketID === id;
    })
    return ticketIdx;
}

function setModelToDefault(){
    modelcount.style.display = "none";
    textareacont.value = "";
    modelPrioritycolor = colors[colors.length-1];

    AllPriorityColor.forEach((prioritycolorElem,idx)=>{
        prioritycolorElem.classList.remove("border")
    })

    AllPriorityColor[AllPriorityColor.length-1].classList.add("border");
}


