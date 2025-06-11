import express from 'express'
import { creatBook , getbook , updateBook , deleteBook } from '../controller/book.controller.js'

const router = express.Router()

router.route('/')
.post(creatBook)
.get(getbook)

router.route('/:id')
.put(updateBook)
.delete(deleteBook)

export default router