export const validateData = (email, password) =>{
    const isEmailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


    if(!isEmailvalid) return "Email Id Is Not Valid"
    if(!isPasswordValid) return "Password Id Is Not Valid"
    return null
}