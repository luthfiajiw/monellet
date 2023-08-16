import jwt from 'jsonwebtoken';
import { env } from 'process';

import prisma from "@/lib/prismadb"
import moment from 'moment';

async function serverAuth(req: Request) {
  const auth = req.headers.get("authorization");

  if (auth) {
    const token = auth.split(" ")[1]
    const decoded: any = jwt.verify(token, env.JWT_SECRET as string)

    const now = moment()
    const expired = moment(decoded.expired)
    const diffInDays = expired.diff(now, "days")
    
    if (diffInDays > 0) {
      console.log(decoded.userId);
      
      const user = await prisma.user.findUnique({
        where: {
          id: decoded.userId
        }
      })

      console.log(user);
      

      if (user) {
        return Promise.resolve({
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          expired: false
        })
      } else {
        return Promise.resolve({
          expired: true
        })
      }
    } else {
      return Promise.resolve({
        expired: true
      })
    }
    
  } else {
    return Promise.resolve({
      expired: true
    })
  }
}

export default serverAuth