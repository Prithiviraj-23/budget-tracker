import { GetFormatterForCurrency } from "@/lib/helper";
import prisma from "@/lib/prisma";
import { OverviewQuerySchema } from "@/schema/overview";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const { searchParams } = new URL(request.url);

  const from = searchParams.get("from");
  const to = searchParams.get("to");

  const queryParams = OverviewQuerySchema.safeParse({
    from,
    to,
  });
  if (!queryParams.success) {
    return Response.json(queryParams.error.message, {
      status: 400,
    });
  }

  const transaction = await getTransactionHistory(
    user.id,
    queryParams.data.from,
    queryParams.data.to
  );

  return Response.json(transaction);
}

export type GetTransactionHistoryType = Awaited<
  ReturnType<typeof getTransactionHistory>
>;

async function getTransactionHistory(userId: string, from: Date, to: Date) {
  const userSettings = await prisma.userSetting.findUnique({
    where: {
      userId,
    },
  });

  if (!userSettings) {
    throw new Error("User settings not found");
  }

  const formatter = GetFormatterForCurrency(userSettings.currency);

  const transaction = await prisma.transaction.findMany({
    where: {
      userId,
      date: {
        gte: from,
        lte: to,
      },
    },
    orderBy: {
      date: "desc",
    },
  });

  return transaction.map((transaction) => ({
    ...transaction,
    formatterAmount: formatter.format(transaction.amount),
  }));
}
