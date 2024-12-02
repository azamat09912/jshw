let footballer = {
    Aty: "Messi",
    Familia: "Lionel",
    age: 28,
    goals: 843,
    teams: ["Barcelona", "Psg", "Inter MIami"],

    fullName: function() {
        return `${this.Aty} ${this.Familia}`;
    },

    Club: function() {
        return this.teams[this.teams.length - 1];
    }
};

footballer.goals += 2;

let Xabar = `Аты: ${footballer.Aty}\nТегі: ${footballer.Familia}\nЖасы: ${footballer.age}\nЖалпы голдар саны: ${footballer.goals}\nКомандалары: ${footballer.teams.join(", ")}`;
alert(Xabar);
