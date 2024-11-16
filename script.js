let fruits = ['яблоко', 'банан'];
let students = ['Алексей', 'Мария'];
fruits.push('апельсин', 'киви');
students.push('Иван', 'Ольга');
console.log(fruits);
console.log(students);

let numbers = [1, 2, 3, 4];
let colors = ['красный', 'синий', 'зеленый'];
let lastNumber = numbers.pop();
let lastColor = colors.pop();
console.log(numbers);
console.log(lastNumber);
console.log(colors);
console.log(lastColor);

let months = ['Январь', 'Февраль', 'Март'];
let cars = ['Toyota', 'BMW', 'Audi'];
let firstMonth = months.shift();
let firstCar = cars.shift();
console.log(months);
console.log(firstMonth);
console.log(cars);
console.log(firstCar);

let vegetables = ['картофель', 'морковь'];
let conferenceMembers = ['Петр', 'Анна'];
vegetables.unshift('огурец', 'помидор');
conferenceMembers.unshift('Дмитрий', 'Елена');
console.log(vegetables);
console.log(conferenceMembers);

let names = ['Алекс', 'Боб', 'Чарли', 'Дэвид', 'Эдвард'];
let numbersForSplice = [1, 2, 3, 4, 5, 6, 7, 8, 9];
names.splice(2, 2, 'Фрэнк', 'Гарри');
numbersForSplice.splice(2, 5, 10, 11, 12);
console.log(names);
console.log(numbersForSplice);

let cities = ['Минск', 'Москва', 'Париж', 'Лондон', 'Берлин', 'Рим'];
let products = ['молоко', 'хлеб', 'сыр', 'масло', 'яйца'];
let selectedCities = cities.slice(1, 4);
let selectedProducts = products.slice(2, 5);
console.log( selectedCities);
console.log(selectedProducts);

let moreFruits = ['яблоко', 'банан'];
let moreVegetables = ['морковь', 'помидор'];
let food = moreFruits.concat(moreVegetables);
let classAStudents = ['Иван', 'Мария'];
let classBStudents = ['Дмитрий', 'Ольга'];
let allStudents = classAStudents.concat(classBStudents);
console.log(food);
console.log(allStudents);

let numbersIndexOf = [1, 3, 7, 8, 7];
let pets = ['собака', 'кошка', 'кот', 'попугай'];
console.log(numbersIndexOf.indexOf(7));
console.log(pets.indexOf('кошка'));

let citiesIncludes = ['Минск', 'Москва', 'Париж'];
let Products = ['хлеб', 'молоко', 'масло'];
console.log(citiesIncludes.includes('Минск'));
console.log(Products.includes('молоко'));

let books = [
  { title: 'Евгений Онегин', author: 'Пушкин' },
  { title: 'Война и мир', author: 'Толстой' }
];
let numbersFind = [4, 9, 16, 25];
console.log(books.find(book => book.author === 'Толстой'));
console.log(numbersFind.find(num => num > 10));

let numbersFilter = [1, 2, 3, 4, 5, 6];
let words = ['яблоко', 'банан', 'киви', 'манго'];
console.log(numbersFilter.filter(num => num > 3));
console.log(words.filter(word => word.length > 5));

let numbersFindIndex = [4, 9, 16, 25];
let strings = ['кошка', 'собака', 'птица', 'крыса'];
console.log(numbersFindIndex.findIndex(num => num > 10));
console.log(strings.findIndex(str => str.length > 5));

let Names = ['Анна', 'Борис', 'Василий'];
let numbersForEach = [1, 2, 3, 4, 5];
names.forEach(Name => console.log(Name));
numbersForEach.forEach(num => console.log(num));

let numbersMap = [1, 2, 3, 4, 5];
let stringsMap = ['яблоко', 'банан', 'киви'];
console.log(numbersMap.map(num => num * num));
console.log(stringsMap.map(str => str.length));

let wordsSort = ['яблоко', 'банан', 'киви', 'манго'];
let numbersSort = [5, 3, 8, 1, 2];
console.log(wordsSort.sort());
console.log(numbersSort.sort((a, b) => a - b));

let numbersReverse = [1, 2, 3, 4, 5];
let stringsReverse = ['яблоко', 'банан', 'киви', 'манго'];
console.log(numbersReverse.reverse());
console.log(stringsReverse.reverse());

let stringToSplit = 'яблоко банан киви манго';
let wordsToJoin = ['яблоко', 'банан', 'киви', 'манго'];
console.log(stringToSplit.split(' '));
console.log(wordsToJoin.join(', '));

let numbersReduce = [1, 2, 3, 4, 5];
let numbersReduce2 = [2, 3, 4];
console.log(numbersReduce.reduce((sum, num) => sum + num, 0));
console.log(numbersReduce2.reduce((prod, num) => prod * num, 1));

let stringsSlice = ['яблоко', 'банан', 'киви', 'манго', 'папайя'];
let citiesSlice = ['Минск', 'Москва', 'Париж', 'Лондон', 'Берлин', 'Рим'];
console.log(stringsSlice.slice(1, 3));
console.log(citiesSlice.slice(2, 5));

let moreFruitsConcat = ['яблоко', 'груша'];
let berries = ['малина', 'черника'];
let animals = ['кошка', 'собака'];
let birds = ['воробей', 'голубь'];
console.log(moreFruitsConcat.concat(berries));
console.log(animals.concat(birds));
