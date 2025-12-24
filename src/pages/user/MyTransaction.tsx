/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useMyTransactionQuery } from "@/redux/features/user/user.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { TransactionBarChart } from "./BarChart";
import { TransactionPieChart } from "./PieChart";

export default function MyTransaction() {
  const [page, setPage] = useState(1);
  const [transactionType, setTransactionType] = useState("");
  const limit = 10;

  const { data, isLoading, isError } = useMyTransactionQuery({
    page,
    limit,
    transactionType,
  });

  const handleFilterChange = (value: string) => {
    setTransactionType(value === "ALL" ? "" : value);
    setPage(1);
  };

  const transactions = data?.data || [];
  const meta = data?.meta;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        <Loader2 className="h-6 w-6 animate-spin mr-2" />
        Loading transactions...
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Failed to load transactions. Please try again.
      </p>
    );
  }
  const chartData = transactions.reduce((acc: any[], tx: any) => {
    const existing = acc.find((item) => item.name === tx.transactionType);

    if (existing) {
      existing.value += tx.amount;
    } else {
      acc.push({
        name: tx.transactionType,
        value: tx.amount,
      });
    }

    return acc;
  }, []);
  return (
    <div className="container mx-auto">
      {chartData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Transactions (Bar Chart)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionBarChart data={chartData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Transactions (Pie Chart)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionPieChart data={chartData} />
            </CardContent>
          </Card>
        </div>
      )}
      <Card className="p-4 shadow-sm w-full mx-auto mt-8">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl font-semibold">
            My Transactions
          </CardTitle>
          <Select
            value={transactionType || "ALL"}
            onValueChange={handleFilterChange}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Transaction Type</SelectItem>
              <SelectItem value="ADD_MONEY">ADD_MONEY</SelectItem>
              <SelectItem value="SEND_MONEY">SEND_MONEY</SelectItem>
              <SelectItem value="WITHDRAW">WITHDRAW</SelectItem>
              <SelectItem value="CASH_IN">CASH_IN</SelectItem>
              <SelectItem value="CASH_OUT">CASH_OUT</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent>
          {transactions.length > 0 ? (
            <div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>Transaction Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((tx: any, idx: number) => (
                      <TableRow key={tx._id}>
                        <TableCell>{(page - 1) * limit + idx + 1}</TableCell>
                        <TableCell className="font-medium">
                          {tx.transactionType}
                        </TableCell>
                        <TableCell className="text-green-600 font-semibold">
                          {tx.amount} ৳
                        </TableCell>
                        <TableCell>
                          {new Date(tx.createdAt).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              {meta && meta.totalPage > 1 && (
                <div className="flex justify-between items-center mt-4">
                  <Button
                    variant="outline"
                    disabled={meta.page <= 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    Previous
                  </Button>
                  <span>
                    Page {meta.page} of {meta.totalPage}
                  </span>
                  <Button
                    variant="outline"
                    disabled={meta.page >= meta.totalPage}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No transactions found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
