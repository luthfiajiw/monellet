import { invalidAuthResponse } from "@/lib/helpers/responseHelpers";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

import prisma from '@/lib/prismadb';

export async function PATCH(
  req: Request,
  { params }: { params: { accountTypeId: string } }
) {
  const session: Session = await serverAuth(req)
  
  try {
    if (!session.expired && session.userId) {
      const body = await req.json()
      const { name, icon } = body

      if (!name) {
        return NextResponse.json({
          error: {
            name: "account type name is required"
          }
        }, { status: 406 })
      } else {
        let data: any = { name }
        if (icon) data.icon = icon

        let updatedAccountType = await prisma.accountType.update({
          where: {
            id: params.accountTypeId
          },
          data
        })

        return NextResponse.json({
          message: "account type updated",
          data: updatedAccountType
        })
      }
    } else {
      return invalidAuthResponse()
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}