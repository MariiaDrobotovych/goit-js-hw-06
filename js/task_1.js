// const Account = function ({login, email}) {
//   this.login = login;
//   this.email = email;
// }

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`)
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    const index = this.pizzas.indexOf(pizzaName);
    if (index === -1) {
      onError(pizzaName);
      return;
    }
    onSuccess(pizzaName);
  }
}
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName){
  console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
}

// Колбэк для onError
function onOrderError(pizzaName) {
  console.log( `Ошибка! В ассортименте нет пиццы с названием ${pizzaName}.`);
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);

