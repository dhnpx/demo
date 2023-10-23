document.getElementById("login-form-submit").addEventListener("click", (e) => {
    e.preventDefault;
    let login  = {
        username: document.getElementById("login-form").username.value,
        password: document.getElementById("login-form").password.value,
    };
    axios({
        method: 'post',
        url: 'http://localhost:3000/api/login',
        data: login,
    })
        .then(response => {
            if (response.status == 200) {
                alert("You have logged in successfully!");
                location.reload;
            } 
        }).catch(e => {
            alert("Login Failed!")
            location.reload;
        });
});

