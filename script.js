window.onload = function () {
    
    displayQuiz()
    
}

const getQuziData = async function() {
    
    let quiz = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=hard")
    .then( result => result.json())
    .then( result => result.results)
    // .then( result => console.log(result))
    .catch( err => console.log(err))
                                                        console.log("quiz ", quiz) // TODO: delete
    return quiz
}
                                                    
const displayQuiz = async function(){
        
    const quiz = await getQuziData()
                                                        console.log("quiz ", quiz) // TODO: delete
    let ol = document.querySelector("ol")
    for( const q of quiz ){
        
        const {
            category,
            correct_answer,
            difficulty,
            incorrect_answers,
            question,
            type
        } = q

        const answers = incorrect_answers.concat(correct_answer)
        
        const randomAnwers = answers.sort(() => Math.random() - 0.5)
        let radioInput = []        
        for (const answer of randomAnwers) {
            radioInput 
            += `
                <input  
                    type="radio" 
                    id=${answer}
                    name=${correct_answer}
                >
                <label for=${answer}>${answer}</label>
                `
                                    console.log( answer);
                                    console.log(radioInput); // TODO: check
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
