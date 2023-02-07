import { DashboardType } from "./dashboard"
import * as listService from "./service"

export async function getData(date: Date): Promise<DashboardType> {
  const data = await listService.getDataService(date)

  return data
}