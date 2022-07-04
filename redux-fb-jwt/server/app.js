const express = require('express')
const app = express()
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = 3001

const users = [
    {
        name: "Zaphod 1",
        password: "parola1",
        role: "user",
        email: "zaphod@gmail.com"
    },  
    {
        name: "Zaphod 2",
        password: "parola2",
        role: "admin",
        email: "zaphod2@gmail.com"
    },
    {
        name: "Zaphod 3",
        password: "parola3",
        role: "staff",
        email: "zaphod3@gmail.com"
    },
    {
        name: "Zaphod 4",
        password: "parola4",
        role: "user",
        email: "zaphod4@gmail.com"
    },
    {
        name: "Zaphod 5",
        password: "parola5",
        role: "user",
        email: "zaphod5@gmail.com"
    },
    
];

app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );

dotenv.config();

function generateToken(data) {
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '120s' });
}
let refreshTokens = [];
const generateRefreshToken = (user) => {
    return jwt.sign({ role: user.role, email: user.email, name: user.name }, "myRefreshSecretKey");
  };

app.use(express.json());

//! Middleware

const authenticateJWT = (req, res, next) => {
    console.log(process.env.TOKEN_SECRET)
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    
    console.log(authHeader)

    if (authHeader) {

        console.log(token)

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                console.log(err)
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

//! Get Req

app.get('/user', authenticateJWT,(req, res) => {
    console.log("user req")
    const {email} = req.user;

    console.log(email)

    const user = users.find(u => u.email === email);

    if(user){
        res.json({
            user: {
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    }else{
        res.status(401).send('Account does not exist');
    }
});

app.post('/login', (req, res) => {
    console.log("login req")

    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const token = generateToken({role: user.role, email: user.email, name: user.name});
        const refreshToken = generateRefreshToken(user)
        refreshTokens.push(refreshToken)
        res.json({
            accessToken: token,
            refreshToken: refreshToken,
            user: {
                email: user.email,  
                name: user.name,
                role: user.role
            }
        });
    } else {
        res.status(401).send('Username or password incorrect');
    }
});

app.post('/refresh', (req, res) => {
    console.log("refresh req")

    //take the refresh token from the user
    const refreshToken = req.body.token;
  
    //send error if there is no token or it's invalid
    if (!refreshToken) return res.status(401).json("You are not authenticated!");
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid!");
    }
    jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
      err && console.log(err);
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  
      const newAccessToken = generateToken({role: user.role, email: user.email, name: user.name});
      const newRefreshToken = generateRefreshToken(user);
  
      refreshTokens.push(newRefreshToken);
  
      res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    });
  
    //if everything is ok, create new access token, refresh token and send to user
  });

//   app.post("/logout", verify, (req, res) => {
//     const refreshToken = req.body.token;
//     refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
//     res.status(200).json("You logged out successfully.");
//   });

app.get('/', (req, res) => {    
    res.json({msg:'HI'})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))