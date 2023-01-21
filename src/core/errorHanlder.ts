import Fastify from "fastify"
import app from "../app"

app.setErrorHandler(function (error, request, reply) {
  if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
    // Log error
    this.log.error(error)
    // Send error response
    reply.status(500).send({ ok: false })
  } else {
    // fastify will use parent error handler to handle this
    reply.send(error)
  }
})