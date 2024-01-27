import express from "express";
const app = express();

app.use(express.json());

let users = [];

function binarySearch(username) {
    let start = 0;
    let end = users.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (users[mid].username === username) {
            return mid;
        } else if (users[mid].username < username) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    const existingUsername = binarySearch(username);
    const existingEmail = binarySearch(email);

    if (existingUsername > -1) {
        return res.status(200).send({ message: 'Username already exists' });
    }

    if (existingEmail > -1) {
        return res.status(200).send({ message: 'Email already exists' });
    }

    users.push({ username, email, password });
    res.status(200).send({ message: 'User created successfully' });
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const index = binarySearch(email);

    if (users[index] && password === password) 
    {
        return res.status(200).send({ message: 'Sign-in successful' });
    }

    return res.status(200).send({ error: 'Invalid email or password' });
});

app.get('/users', (req, res) => {
    res.send({ users });
});

app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
