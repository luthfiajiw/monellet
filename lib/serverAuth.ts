import jwt from 'jsonwebtoken';
import { env } from 'process';

import moment from 'moment';

async function serverAuth(req: Request) {
  const auth = req.headers.get("authorization");

  try {
    if (auth) {
      const token = auth.split(" ")[1]
      const decoded: any = jwt.verify(token, env.JWT_SECRET as string)
  
      const now = moment()
      const expired = moment(decoded.expired)
      const diffInDays = expired.diff(now, "days")
      
      if (diffInDays > 0) {
        return Promise.resolve({
          userId: decoded.userId,
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
  } catch (error) {
    throw new Error("Invalid Auth");
  }
}

export default serverAuth