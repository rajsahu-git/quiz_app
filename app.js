const quiz_data = [
    {
        question:"1. What is full form is API",
        a:'Appcation programing interface',
        b:'Apple Paiapple Iceland',
        c:'Apple Programing Leanguage',
        d:'Nothing',
        CorrectAnswer:'a',
    },
    {
        question:"2. Javascript is an _______ language?",
        a:'Object oriented programming language',
        b:"Object based",
        c:"Procedural",
        d:"None of the above",
        CorrectAnswer:"a",
    },
    {
        question:"3. Which of the following keywords is used to define a variable in Javascript?",
        a:'var',
        b:'let',
        c:'Both A and B',
        d:'None of the above',
        CorrectAnswer:"c"
    },
    {
        question:"4. Which of the following methods is used to access HTML elements using Javascript?",
        a:"getElementbyId()",
        b:"getElementByClassName()",
        c:"Both A and B",
        d:"None of the above",
        CorrectAnswer:"c",
    },
    {
        question:"5. Upon encountering empty statements, what does the Javascript Interpreter do?",
        a:"Throws an  error",
        b:"Ignores the statements",
        c:"Gives a warning",
        d:"None of above",
        CorrectAnswer:"b",
    },
    {
        question:"6. Which of the following methods can be used to display data in some form using Javascript?",
        a:"document.write()",
        b:"console.log()",
        c:"window.alter()",
        d:"All of the Above",
        CorrectAnswer:"d",
    },
    {
        question:"7. How can a datatype be declared to be a constant type?",
        a:"const",
        b:"var",
        c:"let",
        d:"constant",
        CorrectAnswer:"a",

    },
    {
        question:"8. What keyword is used to check whether a given property is valid or not?",
        a:"in",
        b:"is in",
        c:"exists",
        d:"lies",
       CorrectAnswer:"a"
    },
    {
        question:"9. What is the use of the <noscript> tag in Javascript?",
        a:"The content are displayed by non-js-based browser",
        b:"Clear all the cookies and cache",
        c:"Both A and B",
        d:"None of the above",
        CorrectAnswer:"a",
    },
    {
        question:"10. When an operatos value is NULL, the typeof returned by the unary operator is",
        a:"Boolean",
        b:"Undefined",
        c:"Object",
        d:"integer",
        CorrectAnswer:"c"
    }

]

const questions=document.getElementById("question");
const option_a=document.getElementById("text_a");
const option_b=document.getElementById("text_b");
const option_c=document.getElementById("text_c");
const option_d=document.getElementById("text_d");
const btn=document.getElementById("btn-1");


let nomber=0
const currentQuizdata = quiz_data[nomber];
questions.innerHTML=currentQuizdata.question;
option_a.innerHTML=currentQuizdata.a;
option_b.innerHTML=currentQuizdata.b;
option_c.innerHTML=currentQuizdata.c;
option_d.innerHTML=currentQuizdata.d;

let i=1;
function add(){
    const currentQuizdata = quiz_data[i];
    questions.innerHTML=currentQuizdata.question;
    option_a.innerHTML=currentQuizdata.a;
    option_b.innerHTML=currentQuizdata.b;
    option_c.innerHTML=currentQuizdata.c;
    option_d.innerHTML=currentQuizdata.d;
    i++;
}

btn.addEventListener('click',()=>{
    if (i<quiz_data.length){
        add()
        fn()
        // if(getChecked()==quiz_data[i].CorrectAnswer){
        //     console.log("right")
        //     i++
        // }else{
        //     console.log("left")
        // }
        
    } 
    else{
        window.alert(k,"You finished")

    }
    
})

const ans = document.getElementsByName("answer")

const getChecked=()=>{
    let answer;
    ans.forEach(curAnsElem => {
        if (curAnsElem.checked){
            answer = curAnsElem.id
        }      
    });
    return answer
}
let k=0;
let l=0;

const fn=()=>{    
    const currentQuizdata = quiz_data[k]
    const ck = getChecked()
    if (ck == currentQuizdata.CorrectAnswer){
        console.log("right")
        console.log(k)
        
    }
    else{
        console.log("wrong")
        console.log(l)
        l++
    }
    k++
    
}

