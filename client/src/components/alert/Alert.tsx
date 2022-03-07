import { useSelector } from "react-redux"
import { RootStore } from "../../utils/TypeScript"
import Loading from "./Loading"
import Toast from "./Toast"

export const Alert = () => {
  const { alertReducer } = useSelector((state: RootStore) => state)
  return (
    <div>
      { alertReducer.loading && <Loading />}
      { alertReducer.error && <Toast title="Errors" body={alertReducer.error} bgColor="bg-danger" />}
      { alertReducer.success && <Toast title="Success" body={alertReducer.success} bgColor="bg-success" />}
    </div>
  )
}

export const showErrMsg = (msg: string) => {
  return <div className="errMsg"> {msg} </div>
}

export const showSuccessMsg = (msg: string) => {
  return <div className="successMsg"> {msg} </div>
}