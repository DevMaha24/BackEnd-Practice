import express from "express";
const app = express();

app.use(express.json());

let users = [];

function binarySearchUsername(username) {
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

function binarySearchEmail(email) {
    let start = 0;
    let end = users.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (users[mid].email === email) {
            return mid;
        } else if (users[mid].email < email) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

function validatePassword(password) {
    if (!/(?=.*[a-z])/.test(password)) {
        return 'Password must have  lowercase letter.';
    }

    if (!/(?=.*[A-Z])/.test(password)) {
        return 'Password must have uppercase letter.';
    }

    if (!/(?=.*\d)/.test(password)) {
        return 'Password must have number.';
    }

    if (!/(?=.*[@$!%*?&])/.test(password)) {
        return 'Password must have special character.';
    }

    if (password.length < 8) {
        return 'Password must be 8 characters .';
    }

    return true;
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (!username|| !email ||!password) {
        return res.status(200).
            send({ message: 'Invalid details. Username, email, and password are required.' });
    }

    if (!validateEmail(email)) {
        return res.status(200).send
            ({ message: 'Invalid email format. Please enter a valid email address.' });
    }

    const passwordValidation = validatePassword(password);
    
    if (passwordValidation !==true) {
        return res.status(200).send({ message: passwordValidation });
    }

    const existingUsername = binarySearchUsername(username);
    const existingEmail = binarySearchEmail(email);

    if (existingUsername> -1) {
        return res.status(200).send({ message: 'Username already exists' });
    }

    if (existingEmail> -1) {
        return res.status(200).send({ message: 'Email already exists' });
    }

    users.push({ username, email, password });
    res.status(200).send({ message: 'User created successfully' });
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const index = binarySearchEmail(email);

    if (index === -1 || password !== users[index].password) {
        return res.status(200).send({ error: 'Invalid email or password' });
    }

    return res.status(200).send({ message: 'Sign-in successful' });
});

app.get('/users', (req, res) => {
    res.send({ users });
});

app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
