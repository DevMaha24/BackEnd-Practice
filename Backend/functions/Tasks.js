
const home = (req, res) =>{
    res.status(200).send({result:"home"});
};
const signin = (req, res) =>{
    res.status(200).send({result:"signin"});
};

const signup = (req, res) =>{
    res.status(200).send({result:"signup"});
};

export default {home,signin,signup};