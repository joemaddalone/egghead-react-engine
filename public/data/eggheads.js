var eggheads = {
    data: [
        {id: 1,  fname: "Simon",  lname: "Bailey", g: "newtriks"},
        {id: 2,  fname: "Thomas", lname: "Burleson", g: "ThomasBurleson"},
        {id: 4,  fname: "Ben",    lname: "Clinkinbeard", g: "bclinkinbeard"},
        {id: 5,  fname: "Kent",   lname: "Dodds", g: "kentcdodds"},
        {id: 6,  fname: "Trevor", lname: "Ewen", g: "tewen"},
        {id: 7,  fname: "Aaron",  lname: "Frost", g: "aaronfrost"},
        {id: 8,  fname: "Joel",   lname: "Hooks", g: "joelhooks"},
        {id: 9,  fname: "Jafar",  lname: "Husain", g: "jhusain"},
        {id: 10, fname: "Tim",    lname: "Kindberg", g: "timkindberg"},
        {id: 11, fname: "John",   lname: "Lindquist", g: "johnlindquist"},
        {id: 12, fname: "Joe",    lname: "Maddalone", g: "joemaddalone"},
        {id: 13, fname: "Tyler",  lname: "McGinnis", g: "tylermcginnis"},
        {id: 14, fname: "Scott",  lname: "Moss", g: "Hendrixer"},
        {id: 15, fname: "Robert", lname: "Penner", g: "robertpenner"},
        {id: 16, fname: "Keith",  lname: "Peters", g: "bit101"},
        {id: 17, fname: "Lukas",  lname: "Ruebbelke", g: "simpulton"},
        {id: 18, fname: "Brett",  lname: "Shollenberger", g: "brettshollenberger"}
    ],
    egghead: function(id){
        var egghead = this.data.filter(function(item){
            return item.id === +id
        });
        return egghead.length ? egghead[0] : null;
    }
}

module.exports = eggheads;
