import { prisma } from '../../utils/prisma'

export default async function handle(req, res) {
  switch (req.method) {
    case 'GET':
      const labels = await prisma.topic.findMany({
        select: {
          name: true,
        },
      })

      res
        .status(200)
        .json(
          labels
            .map((el) => el.name)
            .filter(
              (el) => !['scripture-open-components', 'scripture-open-apps'].includes(el)
            )
        )
      return true
    default:
      res.status(404).end('Error')
      return false
  }
}
