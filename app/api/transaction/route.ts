// import Transaction from "@/lib/database/models/transaction.model";
// import { connectToDatabase } from "@/utils/database";

// export async function POST(req: Request) {
//   console.log("🚀 Transaction API fired");

//   try {
//     // Parse incoming request body
//     const data = await req.json().catch((err) => {
//       console.error("❌ Failed to parse request body:", err);
//       throw new Error("Invalid JSON in request body");
//     });

//     console.log("📥 Incoming data:", data);

//     const { id } = data || {};
//     if (!id) {
//       console.warn("⚠️ Missing transaction ID in request body");
//       return new Response("Transaction ID is required", { status: 400 });
//     }

//     console.log("🔎 Searching for transaction with ID:", id);

//     // Connect to the database
//     await connectToDatabase()
//       .then(() => console.log("✅ Database connection successful"))
//       .catch((err) => {
//         console.error("❌ Database connection failed:", err);
//         throw err;
//       });

//     // Find the transaction by ID
//     const transaction = await Transaction.findOne({ transactionId: id })
//       .populate("user", "email")
//       .catch((err) => {
//         console.error("❌ DB query failed:", err);
//         throw err;
//       });

//     if (!transaction) {
//       console.warn("⚠️ Transaction not found in DB for ID:", id);
//       return new Response("Transaction not found", { status: 404 });
//     }

//     console.log("✅ Transaction found:", JSON.stringify(transaction));

//     // Convert to plain object before sending
//     return new Response(JSON.stringify(transaction.toObject()), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error: any) {
//     console.error("🔥 API ERROR:", error?.message || error);
//     return new Response(
//       JSON.stringify({ error: error?.message || "Something went wrong" }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }


import Transaction from "@/lib/database/models/transaction.model";
import { connectToDatabase } from "@/utils/database";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let body: any = null;

    if (contentType.includes("application/json")) {
      body = await req.json().catch(() => null);
    } else {
      const text = await req.text().catch(() => null);
      try { body = text ? JSON.parse(text) : null; } catch { return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: { "Content-Type": "application/json" } }); }
    }

    const lookupId = body?.transactionId ?? body?.id ?? null;
    if (!lookupId) {
      return new Response(JSON.stringify({ error: "Transaction ID is required" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    await connectToDatabase();

    const transaction = await Transaction.findOne({ transactionId: lookupId }).populate("user", "email").exec();

    if (!transaction) {
      return new Response(JSON.stringify({ error: "Transaction not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify(transaction.toObject()), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err: any) {
    console.error("API ERROR /api/transaction:", err);
    return new Response(JSON.stringify({ error: err?.message || "Internal server error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
