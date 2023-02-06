// поменяй у "Jennifer" "favoriteDish" c 'sushi' на 'vodka'

let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let newMan6 = {
    ...man6,
    mother: {...man6.mother, parents: [...man6.mother.parents.map(parent => parent.name === "Jennifer"
            ? {...parent, favoriteDish: {...parent.favoriteDish, title: "vodka"}} : parent)]
    }
}
// console.log(newMan6)
// console.log(man6)
// console.log(newMan6.mother.parents)
console.log(man6.mother.parents[1].favoriteDish.title)
console.log(newMan6.mother.parents[1].favoriteDish.title)