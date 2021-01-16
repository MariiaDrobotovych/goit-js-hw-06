class Storage {
    constructor(items) {
        this.items = items; 
    }

    getItems() {
        return this.items;
    }

    addItem(newItem) {
        return this.items.push(newItem);
    } 

    removeItem(itemToRemove) {
        const index = this.items.indexOf(itemToRemove);

        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]