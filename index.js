// Write your solution in this file!
const employee = {
    name:"Juliet",
    streetAddress:"002-587"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const myNewObject = { ...obj };
    myNewObject[key] = value;

    return myNewObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}


// deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
// does not modify the original employee (it is non-destructive)
function deleteFromEmployeeByKey(obj, key){

    // need to do spread operator
    const myNewObject = { ...obj };
    delete myNewObject[key]

    return myNewObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

