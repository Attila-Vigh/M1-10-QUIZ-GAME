window.onload = function () {
    
    displayQuiz()
    
}

const getQuziData = async function() {
    
    let quiz = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=hard")
    .then( result => result.json())
    .then( result => result.results)
    // .then( result => console.log(result))
    .catch( err => console.log(err));                   console.log("getQuziData: quiz ", quiz) // TODO: delete

    return quiz
}

const getRandomAnwers = ( incorrect_answers, correct_answer) => {
    
    const answers = incorrect_answers.concat(correct_answer)
    
    return answers.sort(() => Math.random() - 0.5)
}

const displayQuiz = async function(){
    
    const quizData = await getQuziData();                   console.log("displayQuiz: quizData ", quizData) // TODO: delete
    const ol   = document.querySelector("ol")
    
    for( const q of quizData ){
        
        const { category, correct_answer, difficulty, incorrect_answers, question, type } = q

        const randomAnwers = getRandomAnwers( incorrect_answers, correct_answer)

        let radioInput = []        
        for (const randomAnwer of randomAnwers) {
            radioInput 
            += `
                <input  
                    type="radio" 
                    id=${randomAnwer}
                    name=${correct_answer}
                >
                <label for=${randomAnwer}>${randomAnwer}</label>
                `
                                    console.log( randomAnwer);// TODO:
                                    console.log(radioInput); // TODO:
        }
        
        ol.innerHTML
        +=  `
                <li>
                    <p>${question}</p>
                    ${radioInput}
                </li>
            `       
            
    }
}
