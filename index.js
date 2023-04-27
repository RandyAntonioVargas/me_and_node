console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Randy",
    hometown: "The Black Meca - Harlem 🙅🏾‍♂️",
    favoriteColors: ["Gold", "Emerald Green", "forest green", "Black 2.0"]
}


function introduceMe (personObj){
   console.log( `Hi, my name is ${personObj.name}', and I'm from ${personObj.hometown}`)

   console.log (`My favorite colors are ${personObj.favoriteColors}`)
}
introduceMe (meObj)