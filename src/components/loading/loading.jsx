import { usePromiseTracker } from "react-promise-tracker";
import "./loading.scss";

export const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    )
  );
};
