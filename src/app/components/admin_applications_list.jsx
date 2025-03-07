"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import client from "../sanityClient.js";
import '../../../i18n';
import { useTranslation } from "react-i18next";

export default function AdminPage() {
  const { t, i18n } = useTranslation();
  const [applications, setApplications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch('*[_type == "application"]');
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-6">
        <br />
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-main to-second'>Liste des candidats</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-main to-second'>Liste des candidats</h1>
        }
        <br />
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-main">
              <th className="border p-2">Prenom</th>
              <th className="border p-2">Nom</th>
              <th className="border p-2">Titre</th>
              <th className="border p-2">Téléphone</th>
              <th className="border p-2">Sexe</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? (
              applications.map((app) => (
                <tr key={app._id} className="border">
                  <td className="bg-white border-2 text-blackColor p-2">{app.first_name}</td>
                  <td className="bg-white border-2 text-blackColor p-2">{app.last_name}</td>
                  <td className="bg-white border-2 text-blackColor p-2">{app.title}</td>
                  <td className="bg-white border-2 text-blackColor p-2">{app.phoneNumber}</td>
                  <td className="bg-white border-2 text-blackColor p-2">{app.sexe || "N/A"}</td>
                  <td className="bg-white border-2 text-blackColor p-2 text-center text-xs  ">
                    <button
                      className="bg-gradient-to-r from-main to-second text-white px-3 py-1 rounded "
                      onClick={() => router.push(`/admin/${app._id}`)}
                    >
                      Voir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  Aucun enregistrement trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
