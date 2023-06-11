"use client"

import DataTable from "@/components/Table/DataTable";
import useStore from '@/lib/useStore'
import { useEmployeeStore } from '@/lib/useEmployeeStore'
import { tableColumns } from "@/components/Table/tableColumns";

export default function Employees() {
	const employees = useStore(useEmployeeStore, (state) => state.employees)

	return (
		<section className={"mx-auto px-4 max-w-7xl"}>
			<h2 className="text-3xl font-medium text-center">Current Employees</h2>
			{employees &&
				<DataTable data={employees} columns={tableColumns} />}
		</section>
	);
}
