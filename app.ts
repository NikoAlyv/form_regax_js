

let phoneNumber:string= "+994775329507"
let email:string = "neliyev23@std.com";
let age:string= "90";
let password:string = "Nihad2004";
let username:string = "Nihad";

//phone number

const validateNumber = (phoneNumber:string) => {
  const regax:RegExp=/^\+994\d{9}$|^\+994[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}$/;
  return regax.test(phoneNumber);
};


//email
const validateEmail = (email:string) => {
  const regax:RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return regax.test(email);
};



//password

const validatePassword = (pass:string) => {
  const regax:RegExp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;

  return regax.test(pass);
};


//age
const validateAge = (age:string) => {
  const regax:RegExp = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

  return regax.test(age);
};


//name
const validateName = (user:string) => {
  const regax:RegExp= /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;

  return regax.test(user);
};

interface ICheckOut{
  function: boolean;
  success: string;
  error: string;
}

const checkOut:ICheckOut[] = [
  {
    function: validateName(username),
    success:"username successful",
    error:"Error: use alphabetic characters"
  },
  {
    function: validateAge(age),
    success:"age successful",
    error:"Error:use numeric characters"
  },
  {
    function: validateNumber(phoneNumber),
    success:"number successful",
    error:"Error:Start with +994***** and have 13 characters"
  },
  {
    function: validatePassword(password),
    success:"password successful",
    error:"Error:Use at least 8 alphanumeric characters "
  },
  {
    function: validateEmail(email),
    success:"email successful",
    error:"Error:@ sign and '.' write"
  },

  
];

 checkOut.forEach((check:ICheckOut)=>check.function===true?console.log(check.success):console.log(check.error))

