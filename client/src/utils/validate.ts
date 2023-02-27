// input validation 

// regex check
export const regex : RegExp = /[a-zA-Z]/;

// check if email is valid
export const isValidEmail : (email: string) => boolean = (email : string) => {
    let regex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}

// check if password is valid
export const isStrongPassword : (password : string) => boolean = (password : string) => {
    const lowerCaseLetters : RegExp = /[a-z]/g;
    const upperCaseLetters : RegExp = /[A-Z]/g;
    const numbers : RegExp = /[0-9]/g;

  // if true return boolean true or otherwise if false
    if (
      password.length >= 8 &&
      password.match(lowerCaseLetters) &&
      password.match(upperCaseLetters) &&
      password.match(numbers) 
    ) {
      return true;
    } else {
      return false;
    }
}

// contains space or symbol
export const containsSpaceOrSymbol : (str: string) => boolean = (str : string) => {
    const regex = /[\\?~,;:|!.*^()%@#&$\-+={}[\]/\s]/g;
    return regex.test(str);
}