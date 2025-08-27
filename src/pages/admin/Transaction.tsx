/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { Loader2 } from "lucide-react";
import { useGetAllTransactionsQuery } from "@/redux/features/admin/admin.api";

const Transaction = () => {
  // Local states for filters
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [transactionType, setTransactionType] = useState("");
  const [status, setStatus] = useState("");
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");

  // API Call - removed search from API params, using client-side filtering instead
  const queryParams = {
    page: page.toString(),
    limit: limit.toString(),
    transactionType,
    status,
  };
  
  console.log('API Query Params:', queryParams);
  const { data, isLoading, isError } = useGetAllTransactionsQuery(queryParams);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Loader2 className="animate-spin" size={30} />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">Failed to load transactions</p>
    );
  }

  const allTransactions = data?.data?.data || [];
  const meta = data?.data?.meta;
  
  // Client-side search filtering for userId and transaction ID
  const transactions = allTransactions.filter((txn: any) => {
    if (!search) return true;
    
    const searchLower = search.toLowerCase();
    const txnId = txn._id?.toLowerCase() || '';
    const userId = txn.to?.toLowerCase() || '';
    const fromUser = txn.from?.toLowerCase() || '';
    
    return txnId.includes(searchLower) || 
           userId.includes(searchLower) || 
           fromUser.includes(searchLower);
  });
  
  console.log('All transactions:', allTransactions);
  console.log('Filtered transactions:', transactions);

  const handleTypeChange = (value: string) => {
    setTransactionType(value === "ALL" ? "" : value);
    setPage(1);
  };
  const handleStatusChange = (value: string) => {
    setStatus(value === "ALL" ? "" : value);
    setPage(1);
  };

  return (
    <div className="max-w-7xl w-full mx-auto py-10 px-4">
      {/* Filter Section */}
      <Card className="table-search mb-6 shadow-md">
        <CardContent className="flex flex-wrap gap-4 items-center pt-6">
          <Input
            placeholder="Search by transaction ID, userId, or from user"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSearch(searchText);
                setPage(1);
              }
            }}
            className="w-64"
          />
          <Button
            onClick={() => {
              setSearch(searchText); // now updates API param
              setPage(1);
            }}
          >
            Search
          </Button>
          {search && (
            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setSearchText("");
                setPage(1);
              }}
            >
              Clear
            </Button>
          )}

          <Select
            value={transactionType || "ALL"}
            onValueChange={handleTypeChange}
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

          <Select value={status || "ALL"} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Status</SelectItem>
              <SelectItem value="PENDING">PENDING</SelectItem>
              <SelectItem value="COMPLETED">COMPLETED</SelectItem>
              <SelectItem value="REVERSED">REVERSED</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Table Section */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Txn ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Transaction Type</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.length > 0 ? (
              transactions.map((txn: any) => (
                <TableRow key={txn._id}>
                  <TableCell>{txn._id}</TableCell>
                  <TableCell>{txn.to || "N/A"}</TableCell>
                  <TableCell>{txn.amount}</TableCell>
                  <TableCell>{txn.status}</TableCell>
                  <TableCell>{txn.transactionType}</TableCell>
                  <TableCell>
                    {new Date(txn.createdAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  No transactions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <Select
            onValueChange={(val) => setLimit(Number(val))}
            defaultValue={limit.toString()}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <span>
            Page {page} of {meta?.totalPage || 1}
          </span>
          <Button
            variant="outline"
            disabled={page >= (meta?.totalPage || 1)}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
