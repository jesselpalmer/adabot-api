import { CSInterviewQuestion } from './cs-interview-question'

export class CSInterviewQuestionService {

  quotes:Array<CSInterviewQuestion> = [
    {
      desc: 'Most frequently asked question',
      question: `
        /*
        * Write a function that takes in a string and returns the most frequently used char ignoring whitespace.
        * 
        * Input: 'Today is the greatest day ever!'
        * Output: 'e'
        */
       ` 
      }
  ]

  getRandomCSInterviewQuestion() {
    const randomNum = Math.floor(Math.random() * this.quotes.length)
    return this.quotes[randomNum]
  }
}
