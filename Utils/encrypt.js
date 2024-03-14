const bcrypt = require('bcrypt')
const salt = 10

const encryptePassword = async (password) => {

const hash = await bcrypt.hashSync(password,salt)

return hash
}

const comparePassword = async (password,hash) =>{
     
    const result = await bcrypt.compareSync(password,hash)

    return result
}

module.exports = {
    encryptePassword,
    comparePassword
}