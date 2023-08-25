import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

import prisma from '@/lib/prismadb';
import pageQueryHelper from "@/lib/helpers/pageQueryHelper";
import paginationHelper from "@/lib/helpers/paginationHelper";

export async function GET(req: Request) {
  const session: Session = await serverAuth(req)

  try {
    if (!session.expired) {
      const { page, perPage } = pageQueryHelper(req)

      const count = await prisma.account.aggregate({
        _count: {
          id: true
        }
      })
      
      const pagination = paginationHelper(page, perPage, count._count.id)

      let accounts = await prisma.account.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        where: {
          user_id: session.userId
        },
        include: {
          account_type: true
        },
        orderBy: {
          createdAt: 'asc'
        }
      })

      return NextResponse.json({
        message: "successful",
        data: {
          ...pagination,
          results: accounts
        }
      })
    } else {
      return NextResponse.json({
        error: {
          message: "invalid authorization"
        }
      })
    }
  } catch (error) {
    return NextResponse.json(error, { status: 406 })
  }  
}