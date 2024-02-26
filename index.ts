// console.log('Hello, world!');

// // const nameInput1: HTMLElement | null = document.getElementById('user-name');  // pirmas sperndimas, kaip sutvarkyti null

// const nameInput2: HTMLElement = document.getElementById('user-name')!; // antras sprendimas, kaip sutvarkyti null


// const nameInput3: HTMLElement = document.getElementById('user-name') as HTMLElement; // trecias sprendimas, kaip sutvarkyti null

// const nameInput4: HTMLInputElement = document.getElementById('user-name') as HTMLInputElement; // ketvirtas sprendimas, kaip sutvarkyti null


// //==============================================================

// const nameInput5: HTMLInputElement = document.querySelector('input[id="user-name"]')!; // penktas sprendimas, kaip sutvarkyti null

// console.log(nameInput5);

// const button: HTMLElement = document.getElementById('main-btn')!;
// const button2: HTMLElement = document.querySelector('button[id="main-btn"]')!;


type UserLogin ={
    email: string;
    password: string;
};

const emailInput: HTMLInputElement = document.getElementById('user-email') as HTMLInputElement;
const passwordInput: HTMLInputElement = document.getElementById('user-password') as HTMLInputElement;
const mainButton: HTMLButtonElement = document.getElementById('main-btn') as HTMLButtonElement;

mainButton.addEventListener('click', () => {
    console.log('Button was clicked');
    
    const userLoginData = {
        email: emailInput.value,
        password: passwordInput.value
    };

    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// sauktukas pakeicia verte ir true i false: codas vykdomas jeigu reiksme yra bloga, false. priesingu atveju cokas nebus paleidziamas
    if ( !emailRegex.test(userLoginData.email) === false){
        console.log('email is not valid');
        return;
    };
if (userLoginData.password.length <=8){
    console.log('password must be 8+ characters long');
    return;
};
console.log('all good')



    });
