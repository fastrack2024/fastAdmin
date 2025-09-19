"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import TransactionDetails from "@/components/TransactionDetails";
import { getTransactionById } from "@/lib/actions/transaction.actions";
import { fetchTransaction } from "@/utils/services";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

function Transaction() {
  const { id } = useParams();
  const router = useRouter();

  console.log(id, "from transaction page");

  const {
isPending,
isError,
data: transaction,
error,
} = useQuery({
queryKey: ["transaction"],
queryFn: () => getTransactionById(id as string),
});

  if (!id) {
    router.push("/dashboard");
  }

  if (isPending) {
    return <LoadingSpinner />;
  }

  return <TransactionDetails transaction={transaction} />;
}

export default Transaction;

// "use client";

// import LoadingSpinner from "@/components/LoadingSpinner";
// import TransactionDetails from "@/components/TransactionDetails";
// import { getTransactionById } from "@/lib/actions/transaction.actions";
// import { fetchTransaction } from "@/utils/services";
// import { useQuery } from "@tanstack/react-query";
// import { useParams, useRouter } from "next/navigation";

// export default function TransactionPage() {
//   const { id } = useParams();
//   const router = useRouter();

//   if (!id) {
//     router.push("/dashboard");
//     return null;
//   }

  

//   const { isLoading, isError, data, error } = useQuery({
//     queryKey: ["transaction", id],
//     queryFn: () => fetchTransaction(id as string),
//     retry: 1,
//   });

//   if (isLoading) return <LoadingSpinner />;

//   if (isError) {
//     return (
//       <div className="p-8 text-center text-red-600">
//         Failed to load transaction: {String((error as any)?.message ?? "Unknown error")}
//       </div>
//     );
//   }

//   return <TransactionDetails transaction={data} />;
// }

