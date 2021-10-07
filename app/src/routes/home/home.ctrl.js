"use strict";

const output = {
    main: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["admin1", "admin2", "admin3"],
    password: ["1234", "1234" ,"1234"],
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;
        console.log(id, password);

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인실패",
        });
    },
};

module.exports = {
    output,
    process,
};