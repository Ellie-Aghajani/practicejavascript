const person = {
    firstName: 'Ellie',
    lastName: 'Aghajani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    /**
     * @param {string} value
     */
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
//getters => access properties
// setters => change (mutate) them
person.fullName ='John Smith';
console.log(person);