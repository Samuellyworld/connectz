// verifyCode types
export interface verificationTypes {
    VERIFICATION_CODE_LENGTH : number,
    username : string,
    password : string
}

// verifyQuery types 
export interface verifyQueryTypes {
    text : string,
    values : string[]
}


// mail options types
export interface mailOptionstypes {
    from : string,
    to : string,
    subject: string,
    html : string,
}