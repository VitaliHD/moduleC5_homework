const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDom = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDom.querySelector("list");
const nameOneNode = listNode.getElementsByTagName("name")[0];
const nameFirstOneNode = xmlDom.getElementsByTagName("first")[0].innerHTML;
const nameSecondOneNode = xmlDom.getElementsByTagName("second")[0].innerHTML;
const ageOneNode = xmlDom.getElementsByTagName("age")[0].innerHTML;
const profOneNode = xmlDom.getElementsByTagName("prof")[0].innerHTML;
const langOneAttr = nameOneNode.getAttribute("lang");
const nameFirstTwoNode = xmlDom.getElementsByTagName("first")[1].innerHTML;
const nameSecondTwoNode = xmlDom.getElementsByTagName("second")[1].innerHTML;
const ageTwoNode = xmlDom.getElementsByTagName("age")[1].innerHTML;
const profTwoNode = xmlDom.getElementsByTagName("prof")[1].innerHTML;
const nameTwoNode = listNode.getElementsByTagName("name")[1];
const langTwoAttr = nameTwoNode.getAttribute("lang");   



const categoryAttr = listNode.getAttribute("category");
const langAttr = nameOneNode.getAttribute("lang");

const result = [{name: nameFirstOneNode + ' ' + nameSecondOneNode, age: ageOneNode, prof: profOneNode, lang: langOneAttr},
                      {name: nameFirstTwoNode + ' ' + nameSecondTwoNode, age: ageTwoNode, prof: profTwoNode, lang: langTwoAttr}];
console.log("result", result);