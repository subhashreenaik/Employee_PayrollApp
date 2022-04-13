class Employee_payroll{


// id
getid() { return this._id; }
setid(id) { this._id = id; }

// name
getname() { return this._name; }
setname(Name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z ]{2,}$');
    if (nameRegex.test(Name))
        this._name = Name;
    else textError.textContent = "Name is incorrect";
}

//profilePic
getprofilePic() { return this._profilePic; }
setprofilePic(profilePic) { this._profilePic = profilePic; }

// gender
getgender() { return this._gender; }
setgender(gender) { this._gender = gender; }

//department
getdepartment() { return this._department; }
setdepartment(department) { this._department = department; }

// salary
getsalary() { return this._salary; }
setsalary(salary) { this._salary = salary; }

// note
getnote() { return this._note; }
setnote(note) { this._note = note; }

//startDate
getstartDate() { return this._startDate; }
setstartDate(startDate) { this._startDate = startDate; }


toString() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = !this._startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
    return "id=" + this._id + "\nname=" + this._name + "\ngender=" + this._gender + "\nprofilePic=" + this._profilePic + "\ndepartment=" + this._department + "\nsalary=" + this._salary + "\nstartDate=" + empDate + "\nnote=" + this._note;
}
}
