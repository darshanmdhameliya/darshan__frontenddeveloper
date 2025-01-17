/* Example of this KeyWord in JavaScrip */
{
    let profile = {
        firstname: 'darshan',
        lastname: 'dhameliya',
        age: 19,
        
        innerfunc: function () {
            console.log(`my first name ${this.firstname} and my last name ${this.lastname} and age ${this.age}`);
        }
    }
    profile.innerfunc()
}
