import React from 'react';

let man4 = {
    name: "John",
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15,
        },
    },
};

let newMan = {
    ...man4,
    mother: {...man4.mother, work: {...man4.mother.work, experience: 20}}
}
//newMan.mother = {...man4.mother};
//newMan.mother.work = {...man4.mother.work};
//newMan.mother.work.experience = 20;
// сделай новый объект newMan и  поменяй experience  с 15 на 20, чтобы не поменялся основной объект
console.log(man4.mother.work.experience); //15
console.log(newMan.mother.work.experience); //20
console.log(newMan)
console.log(man4)