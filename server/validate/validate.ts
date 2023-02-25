// validate email;
export const validateEmail : (email: string) => boolean = (email : string) => {
   const emailRegex : RegExp =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}

// validate phone number
export const validatePhoneNumber : (phone : string)=> boolean = (phone : string) => {
    const phoneRegex : RegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    return phoneRegex.test(phone)
}