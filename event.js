//DOM elememts
const form = document.querySelector('#guest-form');
const guestInput = document.querySelector('#guest-name');
const guestCategory = document.querySelector('#guest-category');
const guestList = document.querySelector('#guest-list');

// Form Submission --> Event LIstener 
form.addEventListener('submit', function (event) {
    event.preventDefault();

    //why is my event striked through?
    //depreceated? I had placed the closure bracket at the wrong point 

    //1. input values and selection
    const name = guestInput.value;
    const category = guestCategory.value;

    //2 word input + capitalize 
    const words = name.trim().split(" ");

    if (words.length !== 2) {
        alert("Please enter a first and last name.");
        return;
    }

    // Capitalize
    const formattedName = words
       .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
       .join(" ");

    //guest limit
    if (guestList.children.length >= 10) {
        alert("Guest limit reached (10");
        return;
    }

    //step 2: li elements= names, buttons,categories,timestamp
    const li = document.createElement("li");
    const row = document.createElement("div");
    row.classList.add("guest-row");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = formattedName;
    li.appendChild(nameSpan);

    const tag = document.createElement("span");
    tag.textContent = `[${category}]`;
    tag.classList.add(category.toLowerCase());
    li.appendChild(tag);

    //REVIEW!!!step 3: appending new guest items to the list
    guestList.appendChild(li);

    //step 4: reset input field
    guestInput.value =""; //intentional blank quotes

// function: create "remove" and "RSVP" buttons, WITH event listeners

// Edit Button
   const editBtn = document.createElement("button");
   editBtn.textContent = "Edit";

   let isEditing = false;

   editBtn.addEventListener("click", function(){
   
     if (editBtn.textContent === "Edit") {
        //edit
        const input = document.createElement("input");
        input.type = "text";
        input.value = nameSpan.textContent;
       
        row.replaceChild(input, nameSpan);
        editBtn.textContent = "Save";
        isEditing = true;
     } else {
        //save
      const input = row.querySelector("input");
      if (!input) {
        alert("Input field not found!");
        return;
      }
      const updatedName = input.value.trim();
      const nameParts = updatedName.split(" ");
      
      if (nameParts.length !== 2) {
        alert("Please enter a first and last name.");
        return;
      }
      const formattedName = updatedName
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

      nameSpan.textContent = formattedName;
      row.replaceChild(nameSpan, row.querySelector("input"));
      editBtn.textContent = "Edit";
      isEditing = false;
     }
   });

//Delete Button for each guest
   const deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Remove";
   deleteBtn.addEventListener("click", function () {
      li.remove();
   });
   li.appendChild(deleteBtn);

//RSVP button
   const rsvpBtn = document.createElement("button");
   rsvpBtn.textContent = "Not Attending";
   rsvpBtn.addEventListener("click", function (){
      if (rsvpBtn.textContent === "Not Attending") {
        rsvpBtn.textContent = "Attending";
        li.classList.add("attending");
      } else {
        rsvpBtn.textContent = "Not Attending";
        li.classList.remove("attending");
      }
   });
   li.appendChild(rsvpBtn);

//Timestamp
const time = document.createElement("small");
const now = new Date();
time.style.color = "green";
time.textContent = `Added: ${now.toLocaleTimeString()}`;
li.appendChild(time);

// Append items to row container 
row.classList.add("guest-row");

row.appendChild(nameSpan);
row.appendChild(tag);
row.appendChild(editBtn);
row.appendChild(deleteBtn);
row.appendChild(rsvpBtn);
row.appendChild(time);

li.appendChild(row);
guestList.appendChild(li);

guestInput.value = "";

});

// function: edit guest name*
//Important:limit guest count to 10
//should i remove internal appends if there's a bottom append block?
//how to style timestamp in css*
//set default case to accomodate different submissions(capitalize the first letter of both names and make the rest lowercase)