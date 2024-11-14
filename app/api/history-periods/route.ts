import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET() {
  const user = await currentUser();

  if (!user) {
    redirect("/sigin-in");
  }
  const periods = await getHistoryPeriods(user.id);
  console.log("periods", periods);

  return Response.json(periods);
}
export type getHistoryPeriodsResponseType = Awaited<
  ReturnType<typeof getHistoryPeriods>
>;

async function getHistoryPeriods(userId: string) {
  const result = await prisma.monthHistory.findMany({
    where: {
      userId,
    },
    select: {
      year: true,
    },
    distinct: ["year"],
    orderBy: [
      {
        year: "asc",
      },
    ],
  });

  const year = result.map((el) => el.year);
  if (year.length === 0) {
    console.log("empty");
    return [new Date().getFullYear()];
  }
  return year;
}
