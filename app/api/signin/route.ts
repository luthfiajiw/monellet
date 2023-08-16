import { NextResponse } from "next/server"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import prisma from '@/lib/prismadb';
import { env } from "process";
import moment from "moment";

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body

  // ERROR HANDLING
  if (!email || !password) {
    let err: any = {
      status_code: 406,
      error: {}
    }

    if (!email) err.error.email = "email is required"

    if (!password) err.error.password = "password is required"
    if (password && password.length < 6) err.error.password = "password should be at least 6 characters"

    return NextResponse.json(err, { status: 406 })
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (user) {
      const isMatch = await bcrypt.compare(password, user.hash)

      if (isMatch) {
        var expired = moment().add(30, 'days').format()
        
        const jwtToken = jwt.sign({
          userId: user.id,
          expired
        }, env.JWT_SECRET as string)

        return NextResponse.json({
          status_code: 200,
          message: 'authentication successful',
          type: 'Bearer',
          access_token: jwtToken
        })
      } else {
        return NextResponse.json({
          status_code: 401,
          error: {
            message: "authentication failed"
          }
        })
      }
    } else {
      return NextResponse.json({
        status_code: 404,
        error: {
          message: "user not found"
        }
      }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json(error, { status: 406 })
  }
}