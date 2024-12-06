import { useEffect } from "react";
import { MdError, MdCheckCircle, MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeToast } from "../../app/features/toastSlice";

const Toast = () => {
  const { isToastVisible, toastMessage, isToastSuccess, isToastError } =
    useSelector((state) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId;

    if (isToastVisible) {
      timeoutId = setTimeout(() => {
        dispatch(removeToast());
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isToastVisible]);

  return (
    <div
      className={`fixed left-2/4 -translate-x-2/4 min-w-max duration-200 bg-darkblue z-20 border-2 ${
        isToastVisible ? "top-6" : "-top-10"
      } ${
        isToastSuccess
          ? "border-green-500"
          : isToastError
          ? "border-red-500"
          : "border-transparent"
      }`}
    >
      <div className="flex items-center gap-4 px-4 py-2 bg-lightblue">
        {isToastError ? (
          <MdError className="text-red-500" />
        ) : isToastSuccess ? (
          <MdCheckCircle className="text-green-500" />
        ) : null}
        <p className="text-slate-200">{toastMessage}</p>
        <MdCancel
          onClick={() => dispatch(removeToast())}
          type="button"
          className={`cursor-pointer ${
            isToastSuccess
              ? "text-green-500"
              : isToastError
              ? "text-red-500"
              : "text-transparent"
          }`}
        />
      </div>
    </div>
  );
};

export default Toast;
