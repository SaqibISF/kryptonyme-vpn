"use client";

import React, { FC, useMemo, useState } from "react";
import {
  getKeyValue,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { GET_PURCHASE_HISTORY_ROUTE } from "@/lib/constants";
import useSWR from "swr";
import { PurchasedPlan } from "@/types/plan";
import { formatDate } from "@/lib/utils";
import { useSession } from "next-auth/react";

const PaymentHistoryTable: FC = () => {
  const { data: session } = useSession();

  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    }).then((res) => res.json());

  const [page, setPage] = useState(1);

  const { data: history, isLoading } = useSWR<{
    purchases: PurchasedPlan[];
    meta: { total: number; per_page: number };
  }>(GET_PURCHASE_HISTORY_ROUTE(page), fetcher, {
    keepPreviousData: true,
  });

  const rowsPerPage = history?.meta?.per_page ?? 5;

  const pages = useMemo(() => {
    return history?.meta?.total
      ? Math.ceil(history.meta?.total / rowsPerPage)
      : 0;
  }, [history?.meta?.total, rowsPerPage]);

  const loadingState = isLoading ? "loading" : "idle";

  return (
    <Table
      aria-label="VPN Servers"
      bottomContent={
        pages > 1 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : null
      }
      className="max-w-[calc(100vw-3rem)]"
      classNames={{
        th: "text-white bg-primary",
        wrapper: "bg-opacity-60 shadow-none",
      }}
    >
      <TableHeader>
        <TableColumn key="name">Plan Name</TableColumn>
        <TableColumn key="duration">Duration</TableColumn>
        <TableColumn key="amount_paid">Amount Paid</TableColumn>
        <TableColumn key="start_date">Start Date</TableColumn>
        <TableColumn key="end_date">End Date</TableColumn>
        <TableColumn key="status">Status</TableColumn>
      </TableHeader>
      <TableBody
        items={history?.purchases ?? []}
        loadingContent={<Spinner />}
        loadingState={loadingState}
        emptyContent="No Purchase History"
      >
        {(item) => (
          <TableRow key={item?.id}>
            {(columnKey) => (
              <TableCell className="capitalize whitespace-nowrap">
                {columnKey === "name"
                  ? item.plan.name
                  : columnKey === "duration"
                  ? item.plan.duration + " " + item.plan.duration_unit
                  : columnKey === "amount_paid"
                  ? "$" + item.amount_paid
                  : columnKey === "start_date" || columnKey === "end_date"
                  ? formatDate(getKeyValue(item, columnKey))
                  : getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default PaymentHistoryTable;
