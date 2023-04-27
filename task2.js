const jsonString = `{
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }   
    ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;

const result = {
 name: list.name,
 age: list.age,
 prof: list.prof
};
const listResult = [{name: list[0].name + '', age: list[0].age + '', prof: list[0].prof},
                    {name: list[1].name + '', age: list[1].age + '', prof: list[1].prof}]
console.log(listResult);                 