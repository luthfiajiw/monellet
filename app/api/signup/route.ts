import { NextResponse } from "next/server"

import bcrypt from 'bcrypt';
import prisma from '@/lib/prismadb';

export async function GET(request: Request) {
  return new Response("Signup API")
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, password } = body

  const isEmailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email)

  // ERROR HANDLING
  if (!email || !password || !isEmailValid || !name) {
    let err: any = {
      status_code: 406,
      error: {}
    }

    if (!name) err.error.name = "is required"

    if (!isEmailValid) err.error.email = "is invalid"
    else if (!email) err.error.email = "is required"

    if (!password) err.error.password = "is required"
    if (password && password.length < 6) err.error.password = "should be at least 6 characters"

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
        status_code: 409,
        message: "email is already registered"
      })
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

      return NextResponse.json(newUser, { status: 201 })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(error, { status: 406 })
  }
}