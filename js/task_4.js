class StringBuilder{
    constructor (...string){
        this._value = string;
    }

    get value() {
        return this._value.join('');
    } 
    
    append(str) {
        this._value.push(str);
        return this._value;
    }

    prepend(str) {
        return this._value.unshift(str);
    }

    pad(str) {
        this._value.unshift(str);
        return this._value.push(str);
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
