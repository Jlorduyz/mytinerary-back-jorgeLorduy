import 'dotenv/config.js'
import '../../Config/dataBase.js'
import User from '../User.js'
import bcryptjs from "bcryptjs";

let users = [
    {
        name: "Juan",
        lastname: "Pérez",
        email: "juan.perez@example.com",
        password: "securePass123",
        photoURL: "https://i.pinimg.com/236x/a3/ea/1b/a3ea1bbdcc4e540a2d6d3436aae6517c.jpg",
        country: "Colombia",
        online: false
    },
    {
        name: "Emily",
        lastname: "Smith",
        email: "emily.smith@example.com",
        password: "pass123Emily",
        photoURL: "https://i.pinimg.com/474x/35/f6/71/35f6716adc65383508eca7cfda5b5594.jpg",
        country: "United States",
        online: false
    },
    {
        name: "Carlos",
        lastname: "Ramírez",
        email: "carlos.ramirez@example.com",
        password: "Ramirez2023!",
        photoURL: "https://i.pinimg.com/originals/ca/22/e1/ca22e1e2e8e154110ed3a841247a1790.jpg",
        country: "Mexico",
        online: false
    },
    {
        name: "Aiko",
        lastname: "Tanaka",
        email: "aiko.tanaka@example.com",
        password: "Tanaka#567",
        photoURL: "https://i.pinimg.com/236x/6c/d1/b4/6cd1b48e3add4e72762898e77df0fe18.jpg",
        country: "Japan",
        online: false
    },
    {
        name: "Fatima",
        lastname: "Khan",
        email: "fatima.khan@example.com",
        password: "F@tima2024",
        photoURL: "https://i.pinimg.com/236x/a4/4a/6d/a44a6dcb281f73a187d68f42d09a0c96.jpg",
        country: "Pakistan",
        online: false
    }
];

async function hashPasswords(data) {
    let hashes
    hashes = await data.map(res=>
    {
        let passwordH = bcryptjs.hashSync(res.password, 10);
        return{...res, password: passwordH}
    })
    return hashes;
}
let usersHashes = await hashPasswords(users)

User.insertMany(usersHashes);