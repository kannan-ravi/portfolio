import { Link, useParams } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { useGetContactAttemptQuery } from "../../../app/services/contactAttemptApi";

const ViewContactAttempts = () => {
  const { id } = useParams();

  const { data } = useGetContactAttemptQuery(id);

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
          <p className="text-slate-300">{data?.data?.name}</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="mb-1 font-semibold text-slate-200">Email:</p>
          <p className="text-slate-300">{data?.data?.email}</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="mb-1 font-semibold text-slate-200">Message:</p>
          <p className="text-slate-300">{data?.data?.message}</p>
        </div>
      </section>
    </main>
  );
};

export default ViewContactAttempts;
