import Table from "../../../components/admin/contact-attempt/Table";
import {
  useDeleteContactAttemptMutation,
  useGetAllContactAttemptQuery,
} from "../../../app/services/contactAttemptApi";
import { useDispatch } from "react-redux";
import { toastError, toastSuccess } from "../../../app/features/toastSlice";
import { endLoader, startLoader } from "../../../app/features/loaderSlice";
import { useEffect } from "react";

const ContactAttempts = () => {
  const dispatch = useDispatch();
  const staticData = {
    heading: "Contact Attempt",
    placeHolder: "Search by Name",
  };

  const { data, isFetching, refetch } = useGetAllContactAttemptQuery();

  useEffect(() => {
    isFetching ? dispatch(startLoader()) : dispatch(endLoader());
  }, [isFetching]);
  const [deleteContactAttempt, { error }] = useDeleteContactAttemptMutation();
  const handleDelete = async (id) => {
    try {
      dispatch(startLoader());
      const deleteContact = await deleteContactAttempt(id);
      dispatch(toastSuccess(deleteContact.data.message));
      dispatch(endLoader());
    } catch (err) {
      dispatch(toastError(error));
    }
  };
  return (
    <div className="px-6 my-8 h-[calc(100vh-240px)]">
      <Table
        contactAttemptData={data?.data || []}
        staticData={staticData}
        handleDelete={handleDelete}
        refetch={refetch}
      />
    </div>
  );
};

export default ContactAttempts;
