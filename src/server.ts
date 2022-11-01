import Fastify from 'fastify'
//import cors from '@fastify/cors
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query'],
})

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    /* await fastify.register(cors, {
        origin: true
    }) */


    fastify.get('/bolao/count', () => {
        return { count: 0 }
    })

    await fastify.listen({ port: 3000, host: '0.0.0.0' })
}

bootstrap()