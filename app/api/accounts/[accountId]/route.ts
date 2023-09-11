import { invalidAuthResponse } from "@/lib/helpers/responseHelpers";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

import prisma from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { accountId: string } }
) {
  const session: Session = await serverAuth(req)

  try {
    if (!session.expired && session.userId) {
      let account = await prisma.account.findUnique({
        select: {
          id: true,
          name: true,
          icon: true,
          color: true,
          balance: true,
          account_type: {
            select: {
              id: true,
              name: true,
              icon: true,
              createdAt: true
            }
          },
          createdAt: true
        },
        where: {
          id: params.accountId
        }
      })
  
      if (account) {
        return NextResponse.json({
          message: "successful",
          data: account
        })
      } else {
        return NextResponse.json({
          error: {
            message: `account with id '${params.accountId}' not found`
          }
        }, { status: 404 })
      }
      
    } else {
      return invalidAuthResponse()
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
export async function DELETE(
  req: Request,
  params: { params: { accountId: string } }
) {
  
}