import * as functions from 'firebase-functions'

import { CSQuotesService } from './cs-quotes'
import { CSFactsService } from './cs-facts'
import { CodingProblemsService } from './coding-problems'

export const csQuote = functions.https.onRequest((request, response) => {
  const quote = new CSQuotesService().getCSQuote()
  response.send(quote)
});

export const csFact = functions.https.onRequest((request, response) => {
  const fact = new CSFactsService().getCSFact()
  response.send(fact)
});

export const codingProblem = functions.https.onRequest((request, response) => {
  const problem = new CodingProblemsService().getCodingProblem()
  response.send(problem)
});
