"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import client from "../sanityClient";
import Link from "next/link";

export default function ApplicationDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [application, setApplication] = useState(null);

  useEffect(() => {
    async function fetchApplication() {
      try {
        const data = await client.fetch(
          `*[_type == "application" && _id == $id][0] {
            first_name, last_name, phoneNumber, sexe, currentCity, nationality,
            university, qualification, subject, degreeTitle, debutDate, endDate,
            frenchLevel, englishLevel, arabicLevel, readyToMove, reasonToJoin, opportunityVision,
            "cvURL": cv.asset->url,
            "cv_id": cv.asset->_id,
            "diplomeURL": diplome.asset->url,
            "diplome_id": diplome.asset->_id
          }`,
          { id }
        );
        setApplication(data);
      } catch (error) {
        console.error("Error fetching application details:", error);
      }
    }

    if (id) {
      fetchApplication();
    }
  }, [id]);

  if (!application) {
    return <div className="p-6 text-center text-main">Chargement...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-main text-center my-5">
        Détails de la candidature
      </h1>

      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">

        <br />
        {/* Section: Personal Info */}
        <h2 className="text-xl font-semibold text-main mb-4">Informations Personnelles</h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-blackColor"><strong>Prénom:</strong> {application.first_name}</p>
          <p className="text-blackColor"><strong>Nom:</strong> {application.last_name}</p>
          <p className="text-blackColor"><strong>Téléphone:</strong> {application.phoneNumber}</p>
          <p className="text-blackColor"><strong>Sexe:</strong> {application.sexe}</p>
          <p className="text-blackColor"><strong>Ville Actuelle:</strong> {application.currentCity}</p>
          <p className="text-blackColor"><strong>Nationalité:</strong> {application.nationality}</p>
        </div>

        <br />
        {/* Section: Education */}
        <h2 className="text-xl font-semibold text-main mt-6 mb-4">Éducation</h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-blackColor"><strong>Université:</strong> {application.university}</p>
          <p className="text-blackColor"><strong>Qualification:</strong> {application.qualification}</p>
          <p className="text-blackColor"><strong>Sujet:</strong> {application.subject}</p>
          <p className="text-blackColor"><strong>Diplôme:</strong> {application.degreeTitle}</p>
          <p className="text-blackColor"><strong>Date de Début:</strong> {application.debutDate}</p>
          <p className="text-blackColor"><strong>Date de Fin:</strong> {application.endDate}</p>
        </div>
        
        <br />
        {/* Section: Skills */}
        <h2 className="text-xl font-semibold text-main mt-6 mb-4">Compétences Linguistiques</h2>
        <div className="grid grid-cols-3 gap-4">
          <p className="text-blackColor"><strong>Français:</strong> {application.frenchLevel}</p>
          <p className="text-blackColor"><strong>Anglais:</strong> {application.englishLevel}</p>
          <p className="text-blackColor"><strong>Arabe:</strong> {application.arabicLevel}</p>
        </div>


        <br />
        {/* Section: Motivation */}
        <h2 className="text-xl font-semibold text-main mt-6 mb-4">Motivation</h2>
        <p className="text-blackColor mb-2"><strong>Raison de rejoindre:</strong> {application.reasonToJoin}</p>
        <p className="text-blackColor"><strong>Vision:</strong> {application.opportunityVision}</p>



        <br />
        {/* Section: Documents */}
        <h2 className="text-xl font-semibold text-main mt-6 mb-4">Documents</h2>
        <div className="flex flex-col gap-4">
          {application.cvURL ? (
            <Link
              href={`${application.cvURL}?dl=`}
              target="_blank"
              className="bg-gradient-to-r from-main to-second text-white py-2 px-4 rounded text-center"
            >
              📄 Télécharger le CV
            </Link>
          ) : (
            <p className="text-blackColor">Aucun CV disponible</p>
          )}

          {application.diplomeURL ? (
            <Link
              href={`${application.diplomeURL}?dl=`}
              target="_blank"
              className="bg-gradient-to-r from-main to-second text-white py-2 px-4 rounded text-center"
            >
              🎓 Télécharger le Diplôme
            </Link>
          ) : (
            <p className="text-blackColor">Aucun Diplôme disponible</p>
          )}
        </div>

        {/* Return Button */}
        <div className="text-center mt-6">
          <button
            className="bg-gradient-to-r from-main to-second text-white px-6 py-2 rounded"
            onClick={() => router.push("/admin")}
          >
            ⬅ Retour à la liste
          </button>
        </div>
      </div>
    </div>
  );
}
