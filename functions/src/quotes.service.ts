import { Quote } from './quote'

export class QuotesService {

  quotes:Array<Quote> = [
    {
      text: 'The unexamined life is not worth living.', 
      author: 'Socrates'
    },
    {
      text: 'The journey of a thousand miles begins with one step.',
      author: 'Lao Tzu'
    }
  ]

  getRandomQuote() {
    const randomNum = Math.floor(Math.random() * this.quotes.length)
    return this.quotes[randomNum].text
  }
}
