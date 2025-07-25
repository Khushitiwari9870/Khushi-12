const cards = document.getElementById("cards");

const createCards = (user) =>{


let card = document.createElement("div");
cards.appendChild(card);
card.classList = "user-card"
let heading = document.createElement("h1");
heading.innerText = "user profile card"
card.appendChild(heading);

const imageDiv = document.createElement("div");
const image = document.createElement("img");
image.src=user.profilePic;
image.alt="user Profile picture";

imageDiv.appendChild(image);
card.appendChild(imageDiv);

const span = document.createElement("span");
span.innerText = `Name : ${user.name}`
card.appendChild(span)
const role = document.createElement("span");
role.innerText = `Role : ${user.role}`;
card.appendChild(role);
const lko = document.createElement("span");
lko.innerText = `Location : ${user.location}`;
card.appendChild(lko);
const skillsBtn = document.createElement("div");
skillsBtn.classList = "skills";
user?.skills?.map((skill,index) => { 
    const btn = document.createElement("button");
    btn.innerText = skill;
    skillsBtn.appendChild(btn);

card.appendChild(skillsBtn);
}

);
}
const user = {
    name:"Khushi",
    role:"Student",
    location:"Lucknow",
    profilePic:"kh.jpg",
    skills:["php","Mysql","bootstrap"]
    }

    const user2 = {
    name:"muskan",
    role:"Student",
    location:"Delhi",
    profilePic:"kg.jpg",
    skills:["html","css","java"]
    }
   const user3 = {
    name:"amrita",
    role:"Student",
    location:"Lucknow",
    profilePic:"amrita.jpg",
    skills:["python","javascript","database"]
    }
    const user4 = {
    name:"urja",
    role:"Student",
    location:"Lucknow",
    profilePic:"bestie.jpg",
    skills:["python","javascript","database"]
    }
    const user5 = {
    name:"Divayanshi",
    role:"Student",
    location:"Lucknow",
    profilePic:"divya.jpg",
    skills:["python","javascript","database"]
    }
    const users = [user, user2,user3,user4,user5]


    users.forEach(user=>createCards(user));














