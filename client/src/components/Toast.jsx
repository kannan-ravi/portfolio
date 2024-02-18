import { useEffect } from "react";
import { MdError, MdCheckCircle, MdCancel } from "react-icons/md";
const Toast = ({
  message,
  isError,
  isSuccess,
  toastVisible,
  setToastVisible,
}) => {
  useEffect(() => {
    let timeoutId;

    if (toastVisible) {
      timeoutId = setTimeout(() => {
        setToastVisible(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [toastVisible]);

  return (
    <div
      className={`absolute  left-2/4 -translate-x-2/4 min-w-max duration-200 ${
        toastVisible ? "top-6" : "-top-10"
      }`}
    >
      <div className="flex items-center gap-4 px-4 py-2 bg-lightblue">
        {isError ? (
          <MdError className="text-red-500" />
        ) : isSuccess ? (
          <MdCheckCircle className="text-green-500" />
        ) : null}
        <p>{message}</p>
        <MdCancel onClick={() => setToastVisible(false)} type="button" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Toast;
