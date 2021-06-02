class Student {
  fullName: string
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName
}

let user = new Student("Jane", "User")

document.body.textContent = greeter(user)