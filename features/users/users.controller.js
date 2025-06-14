
const register = async (req, res) => {
    req.json({message: 'User registered successfully!'});
};

const login = async (req, res) => {
    req.json({message: 'User logged in successfully!'});
}


export {
    register,
    login
}