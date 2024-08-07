// Imports
import jwt from 'jsonwebtoken';

// Token Manager functionality
const createToken = (id: string, email: string, expiresIn: string) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn});

    return token;
};


// Export the functions
export { createToken }