
<html>
 
<head>
    <meta name="viewport" content=
        "width=device-width, initial-scale=1" />
    <script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
    </script>
</head>
 
<body>
    <div id="background">
        <div class="background-Right"></div>
        <div class="background-Left"></div>
    </div>
 
    <div id="slide">
        <div class="top">
            <div class="left">
                <div class="content">
                    <h2>Sign Up</h2>
                    <form method="post"
                        onsubmit="return false;">
                        <div>
                            <input type="text"
                                placeholder="email" />
                             
                            <br />
                            <input type="password"
                                placeholder="password" />
                        </div>
                    </form>
 
                    <button id="LeftToRight"
                        class="on-off">Login
                    </button>
                     
                    <button>Register</button>
                </div>
            </div>
 
            <div class="right">
                <div class="content">
                    <h2>Login</h2>
                    <form method="post"
                        onsubmit="return false;">
                        <div>
                            <input type="text"
                                placeholder="email" />
                             
                            <br />
                            <input type="password"
                                placeholder="password" />
                        </div>
 
                        <button id="RightToLeft"
                            class="on-off">Register
                        </button>
                         
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
 
</html>