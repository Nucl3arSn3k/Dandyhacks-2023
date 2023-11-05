// import { getSession } from "next-auth/react";
// import { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const session = await getSession({ req });

//   if (!session) {
//     res.status(401).json({ error: "You are not authenticated" });
//     return;
//   }

//   const userId = session.user.e// Assuming your user object has an "id" field

//   try {
//     const quests = await prisma.quest.findMany({
//       where: {
//         userId: userId,
//       },
//     });

//     res.status(200).json(quests);
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred while fetching quests." });
//   }
// }
