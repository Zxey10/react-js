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

app.use(cors());

dotenv.config();

function generateToken(data) {
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

app.use(express.json());

//! Middleware

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
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
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const token = generateToken({role: user.role, email: user.email, name: user.name});
        console.log(token)

        res.json({
            accessToken: token,
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

app.get('/token', (req,res) => {
    res.status(200).json({
        token: generateToken(users[0])
    })
})

app.get('/', (req, res) => {    
    res.json({msg:'HI'})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))