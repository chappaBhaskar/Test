 arr =[
    {
brand: "SAMSUNG",
price : 10000,
ram: "4gb"
 },
 {
    brand: "HONER",
    price : 17000,
    ram: "6gb"
     },
     {
        brand: "SAMSUNG F23",
        price : 100000,
        ram: "16gb"
         },
         {
            brand: "MOTO",
            price : 12000,
            ram: "8gb"
             },
             {
                brand: "vivo",
                price : 15000,
                ram: "16gb"
                 },
                 {
                    brand: "mi",
                    price : 10000,
                    ram: "8gb"
                     },
                     {
                        brand: "poco",
                        price : 13000,
                        ram: "8gb"
                         }
]

var details = arr.filter(function(e){
    return e.price >=12000 && e.ram >= "4gb"
})


// console.log(arr);
console.log(details)