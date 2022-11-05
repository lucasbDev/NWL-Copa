import { PrismaClient } from "@prisma/client"
import { userInfo } from "os"
import { isErrored } from "stream"
import { isBooleanObject } from "util/types"

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'jao',
            avatar: 'https://github.com.br/lucasbDev.png',
            email: 'jao.silva@gmail.com'
        }
    })

    await prisma.bolao.create({
        data: {
            title: '2022 Dechamps',
            code:'290132',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id,
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            date:'2022-11-04T13:00:00.201Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',
        }
    })

    await prisma.game.create({
        data: {
            date:'2022-11-08T13:00:00.201Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'SZ',

            // guesses: {
            //     create: {
            //         firstTeamPoint: 1,
            //         secondTeamPoint: 3,

            //         participant: {
            //             connect: {
            //                 userId_bolaoId: {
            //                     bolaoId: bo
            //                 }
            //             }
            //         }  
            //     }
            // }
        }
    })
}

main()