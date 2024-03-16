import { useEffect, useState } from "react";
import DashboardTable from "../dashboard/DashboardTable";
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
  return (
    <div className="px-6 mt-8">
      <DashboardTable
        contactAttemptData={contactAttemptData}
        staticData={staticData}
      />
    </div>
  );
};

export default ContactAttempts;
