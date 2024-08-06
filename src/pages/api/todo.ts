import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  if (req.method === "POST") {
    // Db call will go here
    return res.status(200).json({ message: "hii" });
  }
}
