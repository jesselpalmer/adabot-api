import { CSQuote } from './cs-quote'

export class CSQuotesService {

  quotes:Array<CSQuote> = [
    {
      text: 'The unexamined life is not worth living.', 
      author: 'Socrates'
    },
    {
      text: 'The journey of a thousand miles begins with one step.',
      author: 'Lao Tzu'
    }
  ]

  getRandomCsQuote() {
    const randomNum = Math.floor(Math.random() * this.quotes.length)
    return this.quotes[randomNum].text
  }
}
