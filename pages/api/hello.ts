// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponse, NextApiRequest } from "next";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.status(200).end("Hello world!!!");
}
