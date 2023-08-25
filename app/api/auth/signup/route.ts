import { NextResponse } from "next/server"

import bcrypt from 'bcrypt';
import prisma from '@/lib/prismadb';

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, password } = body

  const isEmailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email)

  // ERROR HANDLING
  if (!email || !password || !isEmailValid || !name) {
    let err: any = {
      error: {}
    }

    if (!name) err.error.name = "name is required"

    if (!isEmailValid) err.error.email = "email is invalid"
    else if (!email) err.error.email = "email is required"

    if (!password) err.error.password = "password is required"
    if (password && password.length < 6) err.error.password = "password should be at least 6 characters"

    return NextResponse.json(err, { status: 406 })
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })
  
    if (existingUser) {
      return NextResponse.json({
        error: {
          message: "email is already registered"
        }
      }, { status: 409 })
    } else {
      const salt = await bcrypt.genSalt()
      const hash = await bcrypt.hash(password, salt)

      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          hash
        }
      })

      return NextResponse.json({
        message: "user created",
        data: newUser
      }, { status: 201 })
    }
  } catch (error) {
    return NextResponse.json(error, { status: 406 })
  }
}