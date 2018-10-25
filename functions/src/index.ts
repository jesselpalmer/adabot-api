import * as functions from 'firebase-functions'

import { CSQuotesService } from './cs-quotes'
import { CSFactsService } from './cs-facts'
import { CSInterviewQuestionService } from './cs-interview-question'

export const csQuotes = functions.https.onRequest((request, response) => {
  const quote = new CSQuotesService().getRandomCsQuote()
  response.send(quote)
});

export const csFacts = functions.https.onRequest((request, response) => {
  const quote = new CSFactsService().getRandomCSFact()
  response.send(quote)
});

export const csInterviewQuestion = functions.https.onRequest((request, response) => {
  const quote = new CSInterviewQuestionService().getRandomCSInterviewQuestion().question
  response.send(quote)
});
