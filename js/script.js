const milestonesData = JSON.parse(data).data;

// lode course mailesrones data 

function loseMilestone(){
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestonesData.map(function(milestone){
        
        return `<div class="milestone border-b" id="${milestone._id}">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${milestone._id} )"/></div>
          <div onclick = "openMilestone(this, ${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>

        <div class="hidden_panel ">

        ${milestone.modules.map(function(module){
            
          return`<div class="module border-b">
            <p>${module.name}</p>
            </div>`;

        })
        .join("")}
            


        </div>


      </div>`;

    }).join("")}`;
}


function openMilestone(milestoneElement, id){
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");
    const active = document.querySelector(".active");

    //first remove precious active if any [other than the clicked one]

    if( active && !milestoneElement.classList.contains("active")){
        active.classList.remove("active");
    }
    //toggle current clicked one
    milestoneElement.classList.toggle("active");
    //first hide previous panel if open [other then the clicked element]
    if (!currentPanel.classList.contains("show") && shownPanel)
    shownPanel.classList.remove("show");

    //toggle current element 
    currentPanel.classList.toggle('show');

    showMilestone(id);
}

function showMilestone(id){
  const milestoneImage = document.querySelector(".milestoneImage");
  const title = document.querySelector(".title");
  const description = document.querySelector(".details");

    title.innerText = milestonesData[id].name;
    description.innerText = milestonesData[id].description;
    milestoneImage.style.opacity = "0";
    milestoneImage.src = milestonesData[id].image;
    
}

const milestoneImage = document.querySelector(".milestoneImage");

milestoneImage.onload = function() {
    this.style.opacity = "1";
}

function markMileStone(checkbox, id){
  const doneList = document.querySelector(".doneList");
  const milestoneList = document.querySelector(".milestones");
  const item = document.getElementById(id);

  if(checkbox.checked){
    milestoneList.removeChild(item);
    doneList.appendChild(item);
  }else{
    milestoneList.appendChild(item);
    doneList.removeChild(item);
  }


}

loseMilestone();