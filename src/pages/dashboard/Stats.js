import { useDispatch, useSelector } from "react-redux"
import { showStats } from "../../features/allJobs/allJobsSlice"
import { useEffect } from "react"
import { ChartsContainer, StatsContainer } from "../../components"

const Stats = () => {
  const dispatch = useDispatch()
  const { isLoading, monthlyApplications } = useSelector(store => store.allJobs)

  useEffect(() => {
    dispatch(showStats())

  }, [])

  return (
    <>
      {monthlyApplications.length > 0 && <StatsContainer />}
      <ChartsContainer />
    </>
  )
}
export default Stats