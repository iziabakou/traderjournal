'use client';

import useOState from "./components/ostate";
import DayFilter, { LIMIT_DAY_FILTER_LIST } from "./components/home/DayFilter";
import OverviewItem from "./components/home/OverviewItem";
import Th from "./components/datatable/Th";
import Link from "next/link";


export default function Home() {

  const day_filter = useOState("D1");

  return (
    <>
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">Welcome Abakou</h1>
      <div className="mt-8 flex  justify-between">
        <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6  bg-  dark:text-white">Overview</h2>
        <div>
          <DayFilter value={day_filter.value} onChange={day_filter.change} />
        </div>
      </div>

      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 dark:text-white">
        <OverviewItem title={"Total Trade"} info={"$0"} nanoInfo={LIMIT_DAY_FILTER_LIST[day_filter.value]} badgeText={"+4.5%"} badgeStyle="lime" />
        <OverviewItem title={"Total Loss"} info={"$0"} nanoInfo={LIMIT_DAY_FILTER_LIST[day_filter.value]} badgeText={"+4.5%"} badgeStyle="pink" />
        <OverviewItem title={"Total Win"} info={"$0"} nanoInfo={LIMIT_DAY_FILTER_LIST[day_filter.value]} badgeText={"+4.5%"} badgeStyle="lime" />
        <OverviewItem title={"Profit"} info={"$0"} nanoInfo={LIMIT_DAY_FILTER_LIST[day_filter.value]} badgeText={"+4.5%"} badgeStyle="lime" />
      </div>

      <h2 className="mt-14 text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">Recent orders</h2>

      <div className="flow-root">
        <div className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)] -mx-[--gutter] overflow-x-auto whitespace-nowrap">
          <div className="inline-block min-w-full align-middle sm:px-[--gutter]">
            <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
              <thead className="text-zinc-500 dark:text-zinc-400">
                <tr>
                  <Th>Date</Th>
                  <Th>Position</Th>
                  <Th>Symbol</Th>
                  <Th>Volume</Th>
                  <Th>Event</Th>
                  <Th>Profit</Th>
                </tr>
              </thead>
            </table>

            <div className="py-9 flex">
            <Link href="/journals" className="ms-auto text-sm/6 text-gray-600 hover:text-white/45 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5">View more <span>→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
