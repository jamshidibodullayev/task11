



export const employeesData=[
    {id:1, firstName:"Jamshid", lastName:"Ibodullayev", phoneNumber:"+998972651100", role:"Director", description:"lorem ipsum hkhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhh"},
    {id:2, firstName:"Jasur", lastName:"Rahmonov", phoneNumber:"+998972651101", role:"Director", description:"lorem ipsum"},
    {id:3, firstName:"Azamat", lastName:"Ubaydullayev", phoneNumber:"+998972651102", role:"Director", description:"lorem ipsum"},
    {id:4, firstName:"Muhriddin", lastName:"Rahimov", phoneNumber:"+998972651103", role:"Director", description:"lorem ipsum"},
    {id:5, firstName:"Alisa", lastName:"Eshchanova", phoneNumber:"+998972651104", role:"Director", description:"lorem ipsum"},
    {id:6, firstName:"Humoyun", lastName:"Karimov", phoneNumber:"+998972651105", role:"Director", description:"lorem ipsum"},
];



export const teamsData=[
    {id:1, name:"Best Team 1", directorId:1, employees:[2,5,6]},
    {id:2, name:"Best Team 2", directorId:2, employees:[1,6]},
    {id:3, name:"Best Team 3", directorId:2, employees:[6,5]},
    {id:4, name:"Best Team 4", directorId:1, employees:[5,3,6]},
    {id:5, name:"Best Team 5", directorId:2, employees:[2,4,6]},
    {id:6, name:"Best Team 6", directorId:1, employees:[4,5,6]}
];


export const projectsData =[
    {id:1, name:"Best project 1", teamId:6, description:"lorem Ipsum"},
    {id:2, name:"Best project 2", teamId:5, description:"lorem Ipsum"},
    {id:3, name:"Best project 3", teamId:4, description:"lorem Ipsum"},
    {id:4, name:"Best project 4", teamId:2, description:"lorem Ipsum"},
    {id:5, name:"Best project 5", teamId:3, description:"lorem Ipsum"},
    {id:6, name:"Best project 6", teamId:1, description:"lorem Ipsum"},
];

