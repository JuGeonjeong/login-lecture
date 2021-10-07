"use strict";

const id  = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

// const login = () => {
//     console.log("1123");
// }

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };

    console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Conetent-Type": "application/json",
        },
        body: JSON.stringify(req)
    });
}
