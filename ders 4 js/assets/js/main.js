// 1)Bir array yaradin adlardan ibaret olsun hemin arraya her hansisa bir adi
// arrayin metodlarindan isdifade etmekle daxil edin daha sonra silin


// let names = ["Nicat","Mehman","Metin","Omer"]

// names.push("Eltun")
// console.log(names);
// names.pop("Eltun")
// console.log(names);


// 2)bu arrayde adi n ile baslayanlari loga cixaracaq funksiya qurun
// yasi 20 den boyuk ve 26 den kicik olan objectleri console.loga cixaran funksiya yazin
// yasi cut olan ve suruculuk vesieqesi olanlari loga cixaran funksiya yazin


// let obj = [
//     {
//         name: "Ali",
//         surname: "Aliyev",
//         age: 10,
//         driving: true
//     }, {
//         name: "Veli",
//         surname: "Aliyev",
//         age: 17,
//         driving: false,
//     }, {
//         name: "Mehman",
//         surname: "Aliyev",
//         age: 25,
//         driving: true,
//     },{
//         name: "Nicat",
//         surname: "Aliyev",
//         age:26,
//         driving: false
//     },{
//         name: "Ayxan",
//         surname: "Aliyev",
//         age:15,
//         driving: true
//     },{
//         name: "Nihad",
//         surname: "Aliyev",
//         age:19,
//         driving: true
//     }
// ]



// function names() {
//     for (let i = 0; i < obj.length; i++) {
//         if (obj[i].name[0] === "N") {
//             console.log(obj[i]);
                        
//         }        
//     }    
// }
// names()

// console.log(" ");
// function ages() {
//     for (let i = 0; i < obj.length; i++) {
//         if (obj[i].age > 20 && obj[i].age < 26) {
//             console.log(obj[i]);
//         }
//     }    
// }
// ages()

// console.log(" ");
// function drivingLisance() {
//     for (let i = 0; i < obj.length; i++) {
//         if (obj[i].age %2 ==0 && obj[i].driving == true) {
//             console.log(obj[i]);                   
//         }        
//     }    
// }
// drivingLisance()


// 3)obj arrayini tersine yazdirin yeni baslangic deyer Ali deyil Nihad olsun.


// let obj = [
//     {
//         name: "Ali",
//         surname: "Aliyev",
//         age: 10,
//         driving: true
//     }, {
//         name: "Veli",
//         surname: "Aliyev",
//         age: 17,
//         driving: false,
//     }, {
//         name: "Mehman",
//         surname: "Aliyev",
//         age: 25,
//         driving: true,
//     },{
//         name: "Nicat",
//         surname: "Aliyev",
//         age:26,
//         driving: false
//     },{
//         name: "Ayxan",
//         surname: "Aliyev",
//         age:15,
//         driving: true
//     },{
//         name: "Nihad",
//         surname: "Aliyev",
//         age:19,
//         driving: true
//     }
// ]

// console.log(obj.reverse());
