import React from "react";

function Login() {
    module.exports = {
        login: (req, res) => {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(async function (userData) {
                if (!userData) {
                    res.send({ user: false, message: "Incorrect user email" });
                    return
                }
                if (await brcrypt.compare(req.body.password, userData.password)) {
                    res.send({ user: userData.id, message: "Welcome" })
                } else {
                    res.send({ user: false, message: "Incorrect password" });
                }
            }).catch(err => {
                res.sent(err);
                console.log(err)
            })
        }
    }


    return (
        <form id="login-form" class="needs-validation" novalidate onSubmit={this.loginUser}>
            <div class="form-group">
                <label for="email">E-mail Address</label>
                <input type="text"
                    class="form-control"
                    id="email-input"
                    required value={this.state.value}
                    onChange={this.handleChange} />
            </div>
            <div class="form-group">
                <label for="Password">Password </label>
                <input type="password"
                    class="form-control"
                    id="password-input"
                    required value={this.state.value}
                    onChange={this.handleChange} />
                <div id="alert"></div>
            </div>
            <div class="form-group">
                <button type="submit" class="button is-light" id="logInBtn">Log In</button>
            </div>
            <br />
            <div>
                <p class="subtitle">Don't have an Account yet?</p>
                <a class="button is-light" href="/signup">Sign Up</a>
            </div>
        </form>

    )
};

export default Login;