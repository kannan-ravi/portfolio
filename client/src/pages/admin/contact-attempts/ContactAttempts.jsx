import { useEffect, useState } from "react";
import Table from "./Table";
import { environment } from "../../../api/apiConfig";

const ContactAttempts = () => {
  const [contactAttemptData, setContactAttemptsData] = useState([]);

  const staticData = {
    heading: "Contact Attempt",
    placeHolder: "Search by Name",
  };
  useEffect(() => {
    const fetchContactAttemptData = async () => {
      try {
        const re = await fetch(`${environment}/api/contact-attempt`);
        const data = await re.json();
        setContactAttemptsData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContactAttemptData();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`${environment}/api/contact-attempt/${id}`, {
      method: "DELETE",
    });

    setContactAttemptsData(contactAttemptData.filter((data) => data._id !== id));
  };
  return (
    <div className="px-6 mt-8">
      <Table
        contactAttemptData={contactAttemptData}
        staticData={staticData}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ContactAttempts;
