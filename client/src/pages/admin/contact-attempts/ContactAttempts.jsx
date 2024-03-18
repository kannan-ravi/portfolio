import Table from "./Table";
import {
  useDeleteContactAttemptMutation,
  useGetAllContactAttemptQuery,
} from "../../../app/services/contactAttemptApi";
import { useDispatch } from "react-redux";
import { toastError, toastSuccess } from "../../../app/features/toastSlice";
import { endLoader, startLoader } from "../../../app/features/loaderSlice";

const ContactAttempts = () => {
  const dispatch = useDispatch();
  const staticData = {
    heading: "Contact Attempt",
    placeHolder: "Search by Name",
  };

  const { data } = useGetAllContactAttemptQuery();
  const [deleteContactAttempt, { error }] = useDeleteContactAttemptMutation();
  const handleDelete = async (id) => {
    try {
      dispatch(startLoader());
      const deleteContact = await deleteContactAttempt(id);
      dispatch(toastSuccess(deleteContact.data.data));
      dispatch(endLoader());
    } catch (err) {
      dispatch(toastError(error));
    }
  };
  return (
    <div className="px-6 mt-8">
      <Table
        contactAttemptData={data?.data || []}
        staticData={staticData}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ContactAttempts;
