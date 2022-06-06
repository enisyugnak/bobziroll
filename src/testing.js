
/**
 * array of objects
 * spread and add another object
 */

const arrObj =  [
    {"a":"hasan","b":"huseyin"},
    {"a":"ikinci h asan","b":"besler"}
]
const productsData = [
    {
        "id": 20,
        "category": "Meşrubat",
        "name": "Süt",
        "price": 10
      },
      {
        "id": 33,
        "category": "Çay / Kahve",
        "name": "Americano",
        "price": 25
      },
      {
        "id": 22,
        "category": "Çay / Kahve",
        "name": "Bitki çayları",
        "price": 15
      },
      {
        "id": 34,
        "category": "Çay / Kahve",
        "name": "Cappucino",
        "price": 30
      },
      {
        "id": 23,
        "category": "Çay / Kahve",
        "name": "Çay (büyük)",
        "price": 8
      },    {
        "id": 46,
        "category": "Biralar",
        "name": "Bud 50cl",
        "price": 65
      },
      {
        "id": 48,
        "category": "Biralar",
        "name": "Corona 33cl",
        "price": 90
      },
      {
        "id": 39,
        "category": "Biralar",
        "name": "Efes 30cl (Serçe)",
        "price": 35
      },
      {
        "id": 40,
        "category": "Biralar",
        "name": "Efes Malt 50cl",
        "price": 50
      }
]

function getUniqItems(arr,key){
    return arr.filter(
        (item,i,a)=>a.findIndex(
            item2=>(item2[key]===item[key]))===i)
            .map((item) =>item[key])       
}

console.log(getUniqItems(productsData,"category"))
console.log('oldProducts', productsData)
/*const newProducts = getUniqItems(productsData);
newProducts[0].name="acıbadem";

let  newArr = [...arrObj,{"a":"yeni","b":"biri"}]
console.log('newProducts', newProducts)
console.log('oldProducts', productsData)*/