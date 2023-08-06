
const person = { 
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName (value) {
        if (typeof value !== 'string') //check if user entered string
            throw new Error('Value is not a string.');
            //the lines after the exception are not executed
        const parts = value.split(' ');
        if (parts.length < 2) //check if user entered two words
            throw new Error('Enter valid first name and last name.') //throw an exception
        this.firstName = parts [0];
        this.lastName = parts [1];
    }
}
try {
    person.fullName = 'ela';
} //between try and catch no commas or semicolon
catch(e){
    alert(e);
}
console.log(person);