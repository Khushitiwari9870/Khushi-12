const createUserCard=(user)=>{
let name = document.getElementById("name");
let role = document.getElementById("role");
let lk = document.getElementById("location");
let skills = document.getElementById("skills");
let profilePic = document.getElementById("profilePic");
console.log(profilePic);
name.innerText = `Name : ${user.name}`
role.innerText = `Role : ${user.role}`
console.log(user.location);
lk.innerText = `Location : ${user.location}`
profilePic.src = user.profilePic;
profilePic.alt = "user profile image";
user.skills.map((skill, index) => {
    const btn = document.createElement("button");
    btn.key=index;
    btn.innerText = skill
    skills.appendChild(btn);
}
);
}

const user = {
    name: "Khushi",
    role: "mern developer",
    location: "Sitapur",
    profilePic: "kh.jpg",
    skills: ["php","Mysql","bootstrap"],
    tech: {
        frontend: "html",
        backend: "php",
    }
}
const user2 = {
    name: "K.t",
    role: "Laravel developer",
    location: "Sitapur",
    profilePic: "https://blog.pincel.app/wp-content/uploads/2023/09/0-add-hidden-text-or-symbol-into-AI-photo.jpg",
    skills: ["php","Mysql","bootstrap"],
    tech: {
        frontend: "html",
        backend: "php",
    }
}

// createUserCard(user2)
// createUserCard(user2)
createUserCard(user);