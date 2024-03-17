import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { environment } from "../../../api/apiConfig";
import { FaBackward } from "react-icons/fa";

const ViewContactAttempts = () => {
  const { id } = useParams();
  const [singleContactAttempts, setSingleContactAttempts] = useState([]);

  const fetchSingleContactAttempts = async () => {
    try {
      const re = await fetch(`${environment}/api/contact-attempt/${id}`);
      const data = await re.json();
      setSingleContactAttempts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleContactAttempts();
  }, []);
  return (
    <main className="px-8 my-10">
      <Link
        to="/admin/contact-attempts"
        className="flex items-center gap-3 px-4 py-2 mb-10 duration-200 border rounded hover:text-lightblue hover:bg-slate-300 w-fit text-slate-300 border-slate-300"
      >
        <FaBackward />
        Back
      </Link>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col items-start justify-start">
          <p className="mb-1 font-semibold text-slate-200">Name:</p>
          <p className="text-slate-300">{singleContactAttempts?.name}</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="mb-1 font-semibold text-slate-200">Email:</p>
          <p className="text-slate-300">{singleContactAttempts?.email}</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="mb-1 font-semibold text-slate-200">Message:</p>
          <p className="text-slate-300">{singleContactAttempts?.message}</p>
        </div>
      </section>
    </main>
  );
};

export default ViewContactAttempts;
