import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

import prisma from '@/lib/prismadb';
import paginationHelper from "@/lib/helpers/paginationHelper";
import pageQueryHelper from "@/lib/helpers/pageQueryHelper";
import { invalidAuthResponse } from "@/lib/helpers/responseHelpers";

export async function GET(req: Request) {
  const session: Session = await serverAuth(req)

  try {
    if (!session.expired && session.userId) {
      const count = await prisma.accountType.aggregate({
        _count: {
          _all: true
        }
      })

      const { page, perPage } = pageQueryHelper(req)
      const pagination = paginationHelper(page, perPage, count._count._all)

      let types = await prisma.accountType.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        select: {
          id: true,
          name: true,
          icon: true,
          createdAt: true
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
          results: types
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
      if (!body.name) {
        return NextResponse.json({
          error: {
            name: "account type name is required"
          }
        }, { status: 406 })
      } else {
        const newAccountType = await prisma.accountType.create({
          data: {
            name: body.name,
            user_id: session.userId
          }
        })
    
        return NextResponse.json({
          message: "account type created",
          data: newAccountType
        }, { status: 201 })
      }
    } else {
      return invalidAuthResponse()
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}