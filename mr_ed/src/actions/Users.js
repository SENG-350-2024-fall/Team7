class User {
    constructor(Username, Password, Name, Email, PhoneNumber, UserRole) {
        this.Username = Username;
        this.Password = Password;
        this.Name = Name;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.UserRole = UserRole;
    }

    publicInfoDescribe() {
        return `Username: ${this.Username}, Name: ${this.Name}, Role: ${this.UserRole}`;
    }

    privateInfoDescribe() {
        return `Email: ${this.Email}, Phone: ${this.PhoneNumber}`;
    }
}


//Patient Decorater
class Patient extends User {
    constructor(Username, Password, Name, Email, PhoneNumber, UserRole, HealthNumber, Gender, Address, Birthdate){
        super(Username, Password, Name, Email, PhoneNumber, UserRole);
        this.HealthNumber = HealthNumber;
        this.Gender = Gender;
        this.Address = Address;
        this.Birthdate = Birthdate;
    }

    publicInfoDescribe() {
        return `${super.publicInfoDescribe()}, Gender: ${this.Gender}`;
    }

    privateInfoDescribe() {
        return `${super.privateInfoDescribe()}, Health Number: ${this.HealthNumber}, Address: ${this.Address}, Birthdate: ${this.Birthdate}`;
    }

}

class Admin extends User{
    constructor(Username, Password, Name, Email, PhoneNumber, UserRole){
        super(Username, Password, Name, Email, PhoneNumber, UserRole);
    }
}

class MedicalStaff extends User{
    constructor(Username, Password, Name, Email, PhoneNumber, UserRole, Certification, ED){
        super(Username, Password, Name, Email, PhoneNumber, UserRole);
        this.Certification = Certification;
        this.ED = ED;
    }
    publicInfoDescribe() {
        return `${super.publicInfoDescribe()}, Certification: ${this.Certification}, Emergency Department: ${this.ED}`;
    }

}

class Caller extends User{
    constructor(Username, Password, Name, Email, PhoneNumber, UserRole){
        super(Username, Password, Name, Email, PhoneNumber, UserRole);
    }
}

export {Patient, Admin, MedicalStaff, Caller}