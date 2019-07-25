function check() {
let intelligenceLevel = ["Awesome","Amazing","Dumb","Fool","Creative" ];
let name =document.querySelector("input").value;

let randomIndex = parseInt(Math.random()*intelligenceLevel .length);

alert(intelligenceLevel[randomIndex])

}












pw1

let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];

//   question no # 1 Print each student in this format:
// Name: Amna
// Gender: Female
// City: Karachi
// Score: 56 marks


// mainy yahan pr sn say pehlay student ka name print kiya.

// agar saray students ka name prit karna ho toh!!!
// console.log(students[0].name);
// console.log(students[1].name);
// console.log(students[2].name);
// console.log(students[3].name);
// console.log(students[4].name);


// agar mujahy value bhi print karwani hai toh!
// console.log("Name:"  + students[0].name);

//   for ( let i = 0 ; i < students.length; i ++) {
//     console.log("Name:"  + students[i].name);
// let gender;


// if (students[i].gender === "f") {
//     console.log("Gender: female")
// }else {console.log("Gender: male")}



//   agar city name print karwana hai toh!1

//   console.log(students[0].address.city);


//   only for female students

// for ( let i = 0; i < students.length; i ++) {
//     if (students[i].gender==="f"){
//         console.log("Name:"  + students[i].name);
//     }

// }
//  queston no 4
// Print names of students who have passed the admission test. Passing marks are 50.

// for ( let i = 0; i < students.length; i ++) {
//     if ( students[i]. admissionTestScore > 50){
//         console.log("Name:"  + students[i].name);
//     }
// }

// question no 5. Print names of eligible students only (students who have internet and live in Karachi are eligible).

// for ( let i = 0; i < students.length; i ++)  {
//     if (students[i].hasInternet==true&&students[i].address.city=="Karachi"){
//     console.log("Name:"  + students[i].name);
// }
// }


// question no 6.Print address of each student in this format:
// Amna's address:
// Gulistan-e-Johar in Karachi, Pakistan

// for (let i = 0; i < students.length; i++) {

//     console.log(students[i].name + "'s" + "address:")
//     console.log(students[i].address.ilaqa + "in" + students[i].address.city + "," + students[i].address.country);
// }


// console.log("Amna'address:" + students[0].address.ilaqa + "in" + students[0].address.city + students[0].address.country);
// console.log("Hadia'address:" + students[1].address.ilaqa + "in" + students[1].address.city + students[1].address.country);
// console.log("Ahmed'address:" + students[2].address.ilaqa + "in" + students[2].address.city + students[2].address.country);
// console.log("Fariha'address:" + students[3].address.ilaqa + "in" + students[3].address.city + students[3].address.country);
// console.log("abdullah'address:" + students[4].address.ilaqa + "in" + students[4].address.city + students[4].address.country);



// question no 7


// for (let i = 0; i < students.length; i++){

//     if(students[i].phoneNo.charAt(2) == "3"){
//         console.log(students[i].name);
//     }


// }

// question no 8

for (let i = 0; i < students.length; i++){

    if (students)
}


