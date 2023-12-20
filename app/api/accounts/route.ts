import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

import prisma from '@/lib/prismadb';
import pageQueryHelper from "@/lib/helpers/pageQueryHelper";
import paginationHelper from "@/lib/helpers/paginationHelper";
import { invalidAuthResponse } from "@/lib/helpers/responseHelpers";

export async function GET(req: Request) {
  const session: Session = await serverAuth(req)

  try {
    if (!session.expired && session.userId) {
      const count = await prisma.account.aggregate({
        _count: {
          _all: true
        }
      })

      const { page, perPage } = pageQueryHelper(req)
      const pagination = paginationHelper(page, perPage, count._count._all)

      let accounts = await prisma.account.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        select: {
          id: true,
          name: true,
          color: true,
          balance: true,
          account_type: {
            select: {
              id: true,
              name: true,
              icon: true,
            }
          },
        },
        where: {
          user_id: session.userId
        },
        orderBy: {
          createdAt: 'asc'
        }
      })

      return NextResponse.json({
        message: "successful",
        data: {
          count: count._count._all,
          ...pagination,
          results: accounts
        }
      })
    } else {
      return invalidAuthResponse()
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }  
}

export async function POST(req: Request) {
  const session: Session = await serverAuth(req)

  try {
    if (!session.expired && session.userId) {
      const body = await req.json()
      const { name, color, account_type, balance } = body
      
      // ERROR HANDLING
      if (
        !name ||
        !account_type ||
        !account_type?.id ||
        !color
      ) {
        let err: any = {
          error: {}
        }

        if (!name)
          err.error.name = "account name is required"
        if (!account_type || !account_type?.id) 
          err.error.account_type = "account_type.id is required"
        if (!color)
          err.error.color = "account color is required"

        return NextResponse.json(err, { status: 406 })
      }

      let data: any = {
        name,
        color,
        balance,
        account_type_id: account_type.id,
        user_id: session.userId
      }
      
      const newAccount = await prisma.account.create({
        data
      })

      return NextResponse.json({
        message: "account created",
        data: newAccount
      })
    } else {
      return invalidAuthResponse()
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}