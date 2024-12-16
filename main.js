// 1-10: Obyektlarni tanlash va chiqarish

// Masala: Massivda 3 ta obyekt bor. Har bir obyekt name va age maydoniga ega. Massivdagi birinchi obyektning name qiymatini ekranga chiqaring.
alert("1-vazifa")
let people = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Sami", age: 20 }
];

let res_1 = people.find(value => {
    delete value.age
    return value.name === "Ali"
})

console.log(res_1)
// Masala: Massivda 5 ta obyekt bor. Har bir obyekt id maydoniga ega. Oxirgi obyektning id qiymatini ekranga chiqaring.
alert("2-vazifa")
let items = [
    { id: 101 },
    { id: 102 },
    { id: 103 },
    { id: 104 },
    { id: 105 }
];

let num_1 = items[items.length - 1]

console.log(num_1)

// Masala: 4 ta obyektli massivdagi barcha obyektlarning age qiymatini ekranga chiqaring.
alert("3-vazifa")
let people_2 = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Sami", age: 20 },
    { name: "Karim", age: 35 }
];

let res_2 = people_2.filter(value => {
    delete value.name
    return value.age
})

console.log(res_2)

// Masala: 3 ta obyektli massivning 2-obyektidagi city maydonini konsolga chiqaring.
alert("4-vazifa")
let users = [
    { name: "Ali", city: "Toshkent" },
    { name: "Vali", city: "Samarqand" },
    { name: "Sami", city: "Buxoro" }
];

let res_3 = users.find(value => {
    return value.city === "Samarqand"
})

console.log(res_3)

// Masala: Bir massivda obyektlarning job maydonlari bor. Massivdagi barcha obyektlarning job qiymatlarini chiqaring.
alert("5-vazifa")
let workers = [
    { name: "Ali", job: "Dasturchi" },
    { name: "Vali", job: "O'qituvchi" },
    { name: "Sami", job: "Haydovchi" }
];

let res_4 = workers.filter(value => {
    delete value.name
    return value.job
})

console.log(res_4)

// Masala: 5 ta obyektli massivning 3-obyektidagi salary qiymatini ekranga chiqaring.
alert("6-vazifa")
let employees = [
    { name: "Ali", salary: 1000 },
    { name: "Vali", salary: 1200 },
    { name: "Sami", salary: 900 },
    { name: "Karim", salary: 1500 },
    { name: "Asad", salary: 1100 }
];

let res_5 = employees.find(value => {
    delete value.name
    return value.salary === 900
})

console.log(res_5)

// Masala: 4 ta obyektli massivning birinchi obyektidagi country qiymatini chiqaring.
alert("7-vazifa")
let countries = [
    { country: "Uzbekistan" },
    { country: "Russia" },
    { country: "USA" },
    { country: "China" }
];

let res_6 = countries.find(value => {
    return value.country
})

console.log(res_6)

// Masala: 6 ta obyektli massivdagi 5-obyektning status qiymatini ekranga chiqaring.
alert("8-vazifa")
let orders = [
    { id: 1, status: "New" },
    { id: 2, status: "Pending" },
    { id: 3, status: "Shipped" },
    { id: 4, status: "Delivered" },
    { id: 5, status: "Cancelled" },
    { id: 6, status: "Returned" }
];

let res_7 = orders.find(value => {
    delete value.id
    return value.status === "Cancelled"
})

console.log(res_7)

// Masala: 3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring.
alert("9-vazifa")
let contacts = [
    { name: "Ali", phone: "998901234567" },
    { name: "Vali", phone: "998902345678" },
    { name: "Sami", phone: "998903456789" }
];

let res_8 = contacts.find(value => {
    delete value.name
    return value.phone === "998903456789"
})

console.log(res_8)

// Masala: 4 ta obyektli massivdagi barcha obyektlarning email qiymatlarini ekranga chiqaring
alert("10-vazifa")
let users_2 = [
    { name: "Ali", email: "ali@gmail.com" },
    { name: "Vali", email: "vali@yahoo.com" },
    { name: "Sami", email: "sami@hotmail.com" },
    { name: "Karim", email: "karim@outlook.com" }
];

let res_9 = users_2.filter(value => {
    delete value.name
    return value.email
})

console.log(res_9)

// 11-20: Obyektlar qiymatini o'zgartirish

// Masala: Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.
alert("11-vazifa")
let users_3 = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Sami", age: 20 }
];

users_3[0].name = "Alisher"

console.log(users_3)

// Masala: Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring.
alert("12-vazifa")
let tasks = [
    { id: 1, status: "New" },
    { id: 2, status: "In Progress" },
    { id: 3, status: "Pending" }
];

tasks[2].status = "Updated"

console.log(tasks)

// Masala: 3-obyektning salary qiymatini 2000 ga tenglashtiring.
alert("13-vazifa")
let employees_2 = [
    { name: "Ali", salary: 1000 },
    { name: "Vali", salary: 1200 },
    { name: "Sami", salary: 1500 }
];

employees_2[2].salary = 2000

console.log(employees_2)

// Masala: Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.
alert("14-vazifa")
let cities = [
    { id: 1, city: "Toshkent" },
    { id: 2, city: "Namangan" },
    { id: 3, city: "Samarqand" }
];

cities[1].city = "Farg'ona"

console.log(cities)

// Masala: 4-obyektning email qiymatini yangi qiymat bilan almashtiring.
alert("15-vazifa")
let clients = [
    { name: "Ali", email: "ali@mail.com" },
    { name: "Vali", email: "vali@mail.com" },
    { name: "Sami", email: "sami@mail.com" },
    { name: "Karim", email: "karim@mail.com" }
];

clients[3].email = "karim_new@mail.com"

console.log(clients)

// 21-30: Yangi maydon qo'shish va qiymatni yangilash

// Masala: Massivning birinchi obyektiga yangi status maydonini qo'shing va qiymatini "active" deb belgilang.
alert("16-vazifa")
let users_4 = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Sami", age: 20 }
];

users_4[0].status = "Active"

console.log(users_4)

// Masala: Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.
alert("17-vazifa")
let people_3 = [
    { name: "Ali" },
    { name: "Vali" },
    { name: "Sami" }
];

people_3[2].role = "admin"

console.log(people_3)

// Masala: Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang.
alert("18-vazifa")
let users_5 = [
    { name: "Ali" },
    { name: "Vali" },
    { name: "Sami" }
];

users_5.forEach(value => {
    value.isActive = "false"
})

console.log(users_5)

// Masala: 2-obyektning salary qiymatini 500 ga oshiring.
alert("19-vazifa")
let workers_2 = [
    { name: "Ali", salary: 1000 },
    { name: "Vali", salary: 1200 },
    { name: "Sami", salary: 900 }
];

workers_2[1].salary += 500

console.log(workers_2)

// Masala: 4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing.
alert("20-vazifa")
let contacts_2 = [
    { name: "Ali", phone: "998901234567" },
    { name: "Vali", phone: "998902345678" },
    { name: "Sami", phone: "998903456789" },
    { name: "Karim", phone: "998904567890" }
];

contacts_2[3].phone += "(updated)"

console.log(contacts_2)

// Masala: Massivning ikkinchi obyektidagi age qiymatini ikki barobar oshiring.
alert("21-vazifa")
let people_4 = [
    { name: "Ali", age: 20 },
    { name: "Vali", age: 25 },
    { name: "Sami", age: 30 }
];

people_4[1].age *= 2

console.log(people_4)

// Masala: Oxirgi obyektga yangi joinedAt maydonini qo'shing va qiymatini "2024-07-01" qilib belgilang.
alert("22-vazifa")
let employees_3 = [
    { name: "Ali" },
    { name: "Vali" },
    { name: "Sami" }
];

employees_3[2].joinedAt = "2024-07-01"

console.log(employees_3)

// Masala: Massivdagi 1-obyektning name qiymatiga " (CEO)" qo'shimchasini qo'shing.
alert("23-vazifa")
let team = [
    { name: "Ali" },
    { name: "Vali" },
    { name: "Sami" }
];

team[0].name += "(CEO)"

console.log(team)

// Masala: 3-obyektning price qiymatini 10% kamaytiring.
alert("24-vazifa")
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

products[2].price *= 0.9

console.log(products)

// Masala: Barcha obyektlarning isActive qiymatini true qilib o'zgartiring.
alert("25-vazifa")
let users_6 = [
    { name: "Ali", isActive: false },
    { name: "Vali", isActive: false },
    { name: "Sami", isActive: false }
];

users_6.forEach(value => {
    value.isActive = "true"
})

console.log(users_6)

// 31-40: Shartli tekshirish va qiymatlar o'zgarishi
// 31. Shartli tekshirish va qiymatlar o'zgarishi

// Masala: Agar 2-obyektning status qiymati "Pending" bo'lsa, uni "Completed" qilib belgilang.
alert("26-vazifa")
let data = [
    { id: 1, name: "Ali", status: "Completed" },
    { id: 2, name: "Vali", status: "Pending" },
    { id: 3, name: "Sami", status: "Completed" }
];

if (data[1].status === "Pending") {
    data[1].status = "Completed"
}

console.log(data)

// 32. Masala: 1-obyektning age qiymati 30 dan katta bo'lsa, "Senior" degan yangi maydon qo'shing va qiymatini true qiling.
alert("27-vazifa")
let data_2 = [
    { id: 1, name: "Ali", age: 35 },
    { id: 2, name: "Vali", age: 25 },
    { id: 3, name: "Sami", age: 28 }
];

if (data_2[0].age > 30) {
    data_2[0].Senior = "true"
}

console.log(data_2)

// 33. Masala: Oxirgi obyektning price qiymati 100 dan kichik bo'lsa, uni 100 ga tenglashtiring.
alert("28-vazifa")
let data_3 = [
    { id: 1, name: "Product1", price: 150 },
    { id: 2, name: "Product2", price: 80 },
    { id: 3, name: "Product3", price: 60 }
];

if (data_3[2].price < 100) {
    data_3[2].price = 100
}

console.log(data_3)

// 34. Masala: Barcha obyektlarning role qiymatini "user" qilib yangilang, lekin oxirgi obyektning role qiymatini "admin" qilib qo'ying.
alert("29-vazifa")
let data_4 = [
    { id: 1, name: "Ali", role: "manager" },
    { id: 2, name: "Vali", role: "guest" },
    { id: 3, name: "Sami", role: "supervisor" }
];

let res_10 = data_4.filter(value => {
    return value.role = "user"
})

data_4[2].role = "admin"

console.log(data_4)

// 35. Masala: 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Samarqand" qilib o'zgartiring.
alert("30-vazifa")
let data_5 = [
    { id: 1, name: "Ali", city: "Buxoro" },
    { id: 2, name: "Vali", city: "Namangan" },
    { id: 3, name: "Sami", city: "Toshkent" }
];

if (data_5[2].city === "Toshkent") {
    data_5[2].city = "Samarqand"
}

console.log(data_5)

// 36. Masala: Massivdagi obyektlarning salary qiymati 1000 dan kichik bo'lgan obyektlarga "low" degan yangi maydon qo'shing.
alert("31-vazifa")
let data_6 = [
    { id: 1, name: "Ali", salary: 900 },
    { id: 2, name: "Vali", salary: 1200 },
    { id: 3, name: "Sami", salary: 800 }
];

let res_11 = data_6.filter(value => {
    if (value.salary < 1000) {
        value.low = "salom"
    }
    return value
})

console.log(res_11)

// 37. Masala: 2-obyektning email qiymati "@gmail.com" bilan tugasa, " (verified)" qo'shimchasini kiriting.
alert("32-vazifa")
let data_7 = [
    { id: 1, name: "Ali", email: "ali@yahoo.com" },
    { id: 2, name: "Vali", email: "vali@gmail.com" },
    { id: 3, name: "Sami", email: "sami@mail.com" }
];

if (data_7[1].email.endsWith('@gmail.com')) {
    data_7[1].email += "(verified)"
}

console.log(data_7)

// 38. Masala: Oxirgi obyektga yangi lastLogin maydonini qo'shing va qiymatini hozirgi sanaga tenglashtiring.
alert("33-vazifa")
let data_8 = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Vali" },
    { id: 3, name: "Sami" }
];

let num_2 = data_8[data_8.length - 1]

num_2.lastLogin = "2024.12.16 - 17 : 24"

console.log(data_8)

// 39. Masala: Agar 1-obyektning stock qiymati 0 bo'lsa, "isAvailable" maydonini false qilib belgilang.
alert("34-vazifa")
let data_9 = [
    { id: 1, name: "Product1", stock: 0 },
    { id: 2, name: "Product2", stock: 5 },
    { id: 3, name: "Product3", stock: 10 }
];

if (data_9[0].stock === 0) {
    data_9[0].isAvailable = "false"
}

console.log(data_9)

// 40. Masala: Massivdagi har bir obyektning status qiymatini "Inactive" qilib yangilang, lekin birinchi obyektni "Active" qoldiring.
alert("35-vazifa")
let data_10 = [
    { id: 1, name: "Ali", status: "Pending" },
    { id: 2, name: "Vali", status: "Active" },
    { id: 3, name: "Sami", status: "Completed" }
];

let res_12 = data_10.filter(value => {
    return value.status = "Inactive"
})

data_10[0].status = "Active"

console.log(data_10)

// 41-50: Obyektni saralash, tanlash va qiymatlarni tekshirish

// 41. Masala: Massivdagi obyektlarning price qiymati 500 dan katta bo'lgan obyektlarning isExpensive qiymatini true qilib belgilang.
alert("36-vazifa")
let data_11 = [
    { id: 1, name: "Product1", price: 600 },
    { id: 2, name: "Product2", price: 400 },
    { id: 3, name: "Product3", price: 800 }
];

let res_13 = data_11.filter(value => {
    if (value.price > 500) {
        value.isExpensive = "true"
    }
    return value
})

console.log(res_13)

// 42. Masala: 2-obyektning salary qiymati >= 1000 bo'lsa, "High salary" degan yangi maydon qo'shing va qiymatini true qilib belgilang.
alert("37-vazifa")
let data_12 = [
    { id: 1, name: "Ali", salary: 900 },
    { id: 2, name: "Vali", salary: 1000 },
    { id: 3, name: "Sami", salary: 800 }
];

if (data_12[1].salary >= 1000) {
    data_12[1].highSalary = "true"
}

console.log(data_12)

// 43. Masala: Agar 3-obyektning name qiymati "Ali" bo'lsa, "isManager" degan maydon qo'shib, true deb belgilang.
alert("38-vazifa") // pastdagida name qiymatidan birortasi Ali bolsa isManager property qoshib qiymatini true qiladigan qilib kordim
let data_13 = [
    { id: 1, name: "Vali", role: "user" },
    { id: 2, name: "Sami", role: "user" },
    { id: 3, name: "Ali", role: "guest" }
];

if (data_13[2].name === "Ali") {
    data_13[2].isManager = "true"
}

console.log(data_13)

// let data_14 = [
//     { id: 1, name: "Vali", role: "user" },
//     { id: 2, name: "Sami", role: "user" },
//     { id: 3, name: "Ali", role: "guest" }
// ];

// let res_14 = data_14.filter(value => {
//     if (value.name === "Ali") {
//         value.isManager = "true"
//     }
//     return value
// })

// console.log(res_14)

// 44. Masala: Massivda age maydoni 18 dan kichik bo'lgan obyektlar uchun "isUnderage" qiymatini true qilib qo'shing.
alert("39-vazifa")
let data_15 = [
    { id: 1, name: "Ali", age: 17 },
    { id: 2, name: "Vali", age: 20 },
    { id: 3, name: "Sami", age: 16 }
];

let res_15 = data_15.filter(value => {
    if (value.age < 18) {
        value.isUnderage = "true"
    }
    return value
})

console.log(res_15)

// 45. Masala: Massivdagi obyektlar ichidan stock qiymati < 10 bo'lgan obyektlarni aniqlab, "lowStock" qiymatini true qilib qo'shing.
alert("40-vazifa")
let data_16 = [
    { id: 1, name: "Product1", stock: 5 },
    { id: 2, name: "Product2", stock: 15 },
    { id: 3, name: "Product3", stock: 8 }
];

let res_16 = data_16.filter(value => {
    if (value.stock < 10) {
        value.lowStock = "true"
    }
    return value
})

console.log(res_16)

// 46. Masala: 1-obyekt va oxirgi obyektning role qiymatini "guest" qilib o'zgartiring.
alert("41-vazifa")
let data_17 = [
    { id: 1, name: "Ali", role: "admin" },
    { id: 2, name: "Vali", role: "user" },
    { id: 3, name: "Sami", role: "supervisor" }
];

data_17[0].role = "guest"

let num_3 = data_17[data_17.length - 1]

num_3.role = "guest"

console.log(data_17)

// 47. Masala: Agar biror obyektning status qiymati "Pending" bo'lsa, "isPending" degan maydon qo'shib, true qilib belgilang.
alert("42-vazifa")
let data_18 = [
    { id: 1, name: "Ali", status: "Pending" },
    { id: 2, name: "Vali", status: "Completed" },
    { id: 3, name: "Sami", status: "Pending" }
];

let res_17 = data_18.filter(value => {
    if (value.status === "Pending") {
        value.isPending = "true"
    }
    return value
})

console.log(res_17)

// 48. Masala: Massivdagi 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Buxoro" qilib almashtiring.
alert("43-vazifa")
let data_19 = [
    { id: 1, name: "Ali", city: "Samarqand" },
    { id: 2, name: "Vali", city: "Namangan" },
    { id: 3, name: "Sami", city: "Toshkent" }
];

if (data_19[2].city === "Toshkent") {
    data_19[2].city = "Buxoro"
}

console.log(data_19)

// 49. Masala: Oxirgi obyektning score qiymati < 50 bo'lsa, "failed" maydonini qo'shib, qiymatini true qilib belgilang.
alert("44-vazifa")
let data_20 = [
    { id: 1, name: "Ali", score: 70 },
    { id: 2, name: "Vali", score: 90 },
    { id: 3, name: "Sami", score: 40 }
];

let num_4 = data_20[data_20.length - 1]

if (num_4.score < 50) {
    num_4.failed = "true"
}

console.log(data_20)

// 50. Masala: Barcha obyektlarning discount qiymatini 0 qilib belgilang, lekin price qiymati > 1000 bo'lgan obyektlarda "discount" qiymatini 20 qilib belgilang.
alert("45-vazifa")
let data_21 = [
    { id: 1, name: "Product1", price: 1200 },
    { id: 2, name: "Product2", price: 800 },
    { id: 3, name: "Product3", price: 1500 }
];

let res_18 = data_21.filter(value => {
    value.discount = 0
    if (value.price > 1000) {
        value.discount = 20
    }
    return value
})

console.log(res_18)

// 51-60: Obyektlarni o'zgartirish va murakkabroq amallar

// 51. Masala: Massivdagi obyektlarning salary qiymatini 10% ga oshiring.
alert("46-vazifa")
let data_22 = [
    { id: 1, name: "Ali", salary: 1000 },
    { id: 2, name: "Vali", salary: 1500 },
    { id: 3, name: "Sami", salary: 2000 }
];

let res_19 = data_22.filter(value => {
    return Math.trunc(value.salary *= 1.1)
})

console.log(res_19)

// 52. Masala: 2-obyektning name qiymatiga " - employee" qo'shimchasini qo'shing.
alert("47-vazifa")
let data_23 = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Vali" },
    { id: 3, name: "Sami" }
];

data_23[1].name += " - employee"

console.log(data_23)

// 53. Masala: Massivdagi obyektlarning isAvailable maydonini o'zgartirib, stock qiymati > 0 bo'lganlarga true, qolganlarga false qilib belgilang.
alert("48-vazifa")
let data_24 = [
    { id: 1, name: "Product1", stock: 5 },
    { id: 2, name: "Product2", stock: 0 },
    { id: 3, name: "Product3", stock: 10 }
];

let res_20 = data_24.filter(value => {
    value.isAvailable = "changed"
    if (value.stock > 0) {
        value.isAvailable = "true"
    } else {
        value.isAvailable = "false"
    }
    return value
})

console.log(res_20)

// 54. Masala: Agar birinchi obyektning price qiymati 1000 dan katta bo'lsa, uni 900 ga tushiring.
alert("49-vazifa")
let data_25 = [
    { id: 1, name: "Product1", price: 1200 },
    { id: 2, name: "Product2", price: 800 },
    { id: 3, name: "Product3", price: 1000 }
];

if (data_25[0].price > 1000) {
    data_25[0].price = 900
}

console.log(data_25)

// 55. Masala: Oxirgi obyektga yangi updatedAt maydonini qo'shing va qiymatini "2024-07-10" qilib belgilang.
alert("50-vazifa")
let data_26 = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Vali" },
    { id: 3, name: "Sami" }
];

let num_5 = data_26[data_26.length - 1]

num_5.updatedAt = "2024-07-10"

console.log(data_26)

// 56. Masala: 3-obyektning level qiymatini "Intermediate" deb o'zgartiring, agar mavjud bo'lmasa, qo'shing.
alert("51-vazifa")
let data_27 = [
    { id: 1, name: "Ali", level: "Beginner" },
    { id: 2, name: "Vali" },
    { id: 3, name: "Sami" }
];

data_27[2].level = "Intermediate"

console.log(data_27)

// 57. Masala: Agar biror obyektning score qiymati 80 dan katta bo'lsa, "isTop" qiymatini true qilib belgilang.
alert("52-vazifa")
let data_28 = [
    { id: 1, name: "Ali", score: 75 },
    { id: 2, name: "Vali", score: 85 },
    { id: 3, name: "Sami", score: 90 }
];

let res_21 = data_28.filter(value => {
    if (value.score > 80) {
        value.isTop = "true"
    }
    return value
})

console.log(res_21)

// 58. Masala: Massivdagi obyektlardan role qiymati "admin" bo'lgan obyektlarni topib, ularning privileges qiymatini "full" qilib belgilang.
alert("53-vazifa")
let data_29 = [
    { id: 1, name: "Ali", role: "admin" },
    { id: 2, name: "Vali", role: "user" },
    { id: 3, name: "Sami", role: "admin" }
];

let res_22 = data_29.filter(value => {
    if (value.role === "admin") {
        value.privileges = "full"
    }
    return value
})

console.log(res_22)

// 59. Masala: Oxirgi obyektning name qiymatiga " (completed)" qo'shimchasini qo'shing.
alert("54-vazifa")
let data_30 = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Vali" },
    { id: 3, name: "Sami" }
];

let num_6 = data_30[data_30.length - 1]

num_6.name += " completed"

console.log(data_30)

// 60. Masala: Agar birinchi obyektning isVerified qiymati false bo'lsa, uni true qilib belgilang.
alert("55-vazifa")
let data_31 = [
    { id: 1, name: "Ali", isVerified: false },
    { id: 2, name: "Vali", isVerified: true },
    { id: 3, name: "Sami", isVerified: false }
];

if (data_31[0].isVerified === false) {
    data_31[0].isVerified = true
}

console.log(data_31)