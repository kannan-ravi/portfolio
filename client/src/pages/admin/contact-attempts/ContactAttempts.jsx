import Table from "./Table";
import {
  useDeleteContactAttemptMutation,
  useGetAllContactAttemptQuery,
} from "../../../app/services/contactAttemptApi";

const ContactAttempts = () => {
  const staticData = {
    heading: "Contact Attempt",
    placeHolder: "Search by Name",
  };

  const { data } = useGetAllContactAttemptQuery();
  const [deleteContactAttempt] = useDeleteContactAttemptMutation();
  const handleDelete = async (id) => {
    await deleteContactAttempt(id);
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
