'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import client from '../sanityClient';

// --- Step Components ---
const PersonalInformation = ({ formData, setFormData, errors, t }) => {
  const getInputClassName = (fieldName) => {
    return `bg-fieldColor w-full px-4 py-3 text-sm placeholder-fieldText outline-none rounded-md ${
      errors[fieldName] ? 'border-2 border-red-500' : ''
    }`;
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-lg mb-2">
        {t('Informations personnelles')}
      </h3>
      <div className="w-full flex flex-row gap-4">
        <input
          type="text"
          name="first_name"
          placeholder={t('first_name')}
          value={formData.first_name}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
          className={getInputClassName('first_name')}
        />
        <input
          type="text"
          name="last_name"
          placeholder={t('last_name')}
          value={formData.last_name}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
          className={getInputClassName('last_name')}
        />
      </div>
      <div className="w-full flex flex-row gap-4">
        <input
          type="text"
          name="title"
          placeholder={t('title')}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={getInputClassName('title')}
        />
        <input
          type="date"
          name="birthday"
          placeholder={t('bithday')}
          value={formData.birthday}
          onChange={(e) =>
            setFormData({ ...formData, birthday: e.target.value })
          }
          className={getInputClassName('birthday')}
        />
      </div>
      <div className="w-full flex flex-row gap-4">
        <select
          name="sexe"
          value={formData.sexe}
          onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
          className={getInputClassName('sexe')}
        >
          <option value="" disabled>
            {t('sexe')}
          </option>
          <option value="Male">{t('male')}</option>
          <option value="Female">{t('female')}</option>
        </select>
        <input
          type="text"
          name="familial_situation"
          placeholder={t('familial_situation')}
          value={formData.familialSituation}
          onChange={(e) =>
            setFormData({ ...formData, familialSituation: e.target.value })
          }
          className={getInputClassName('familialSituation')}
        />
      </div>
      <div className="w-full flex flex-row gap-4">
        <input
          type="text"
          name="nationality"
          placeholder={t('nationality')}
          value={formData.nationality}
          onChange={(e) =>
            setFormData({ ...formData, nationality: e.target.value })
          }
          className={getInputClassName('nationality')}
        />
        <input
          type="text"
          name="current_city"
          placeholder={t('current_city')}
          value={formData.currentCity}
          onChange={(e) =>
            setFormData({ ...formData, currentCity: e.target.value })
          }
          className={getInputClassName('currentCity')}
        />
      </div>
      <div className="w-full flex flex-row gap-4">
        <input
          type="tel"
          name="phone_number"
          placeholder={t('phone_number')}
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          className={getInputClassName('phoneNumber')}
        />
        <input
          type="tel"
          name="alternative_phone_number"
          placeholder={t('alternative_phone_number')}
          value={formData.alternativePhoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, alternativePhoneNumber: e.target.value })
          }
          className={getInputClassName('alternativePhoneNumber')}
        />
      </div>
      <p>{t('apply_p_2')}</p>
      <div>
        <div className="flex flex-row flex-wrap gap-4">
          {[
            { id: 'facebook', label: t('Facebook') },
            { id: 'instagram', label: t('Instagram') },
            { id: 'linkedin', label: t('LinkedIn') },
            {
              id: 'evenement',
              label: t('Evenement Teach for Mauritania'),
            },
            { id: 'alumni', label: t('Alumni') },
            { id: 'autres', label: t('Autres') },
          ].map((option) => (
            <label key={option.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="source"
                value={option.id}
                checked={formData.heareOption === option.id}
                onChange={(e) =>
                  setFormData({ ...formData, heareOption: e.target.value })
                }
                className="form-radio h-4 w-4 text-main focus:ring-main"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationAndTraining = ({ formData, setFormData, errors, t }) => {
  const getInputClassName = (fieldName) => {
    return `bg-fieldColor w-full px-4 py-3 text-sm placeholder-fieldText outline-none rounded-md ${
      errors[fieldName] ? 'border-2 border-red-500' : ''
    }`;
  };

  const handleCvChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleDiplomeChange = (e) => {
    setFormData({ ...formData, diplome: e.target.files[0] });
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-lg mb-2">{t('formation_education')}</h3>
      <div className="w-full flex flex-row gap-4">
        <input
          type="text"
          name="university"
          placeholder={t('university')}
          value={formData.university}
          onChange={(e) =>
            setFormData({ ...formData, university: e.target.value })
          }
          className={getInputClassName('university')}
        />
        <input
          type="text"
          name="qualification"
          placeholder={t('qualification')}
          value={formData.qualification}
          onChange={(e) =>
            setFormData({ ...formData, qualification: e.target.value })
          }
          className={getInputClassName('qualification')}
        />
      </div>
      <div className="w-full flex flex-row gap-4">
        <input
          type="text"
          name="subject"
          placeholder={t('subject')}
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className={getInputClassName('subject')}
        />
        <input
          type="text"
          name="degree_title"
          placeholder={t('degree_title')}
          value={formData.degreeTitle}
          onChange={(e) =>
            setFormData({ ...formData, degreeTitle: e.target.value })
          }
          className={getInputClassName('degreeTitle')}
        />
      </div>
      <div className="w-full flex flex-row gap-4">
        <input
          type="date"
          name="debut_date"
          placeholder={t('debut_date')}
          value={formData.debutDate}
          onChange={(e) =>
            setFormData({ ...formData, debutDate: e.target.value })
          }
          className={getInputClassName('debutDate')}
        />
        <input
          type="date"
          name="end_date"
          placeholder={t('end_date')}
          value={formData.endDate}
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
          className={getInputClassName('endDate')}
        />
      </div>
      <div className="w-full flex flex-row gap-4 ">
        <label className={`custom-file-upload ${errors['cv'] ? " border-red-600 border-2" : ""}`}>
          {formData.cv ? formData.cv.name : t('Upload CV')}
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleCvChange}
            className={`actual-file-input text-start`}
          />
        </label>

        <label className={`custom-file-upload ${errors['diplome'] ? " border-red-600 border-2" : ""}`}>
          {formData.diplome ? formData.diplome.name : t('Upload Diplome')}
          <input
            type="file"
            name="diplome"
            accept=".pdf"
            onChange={handleDiplomeChange}
            className={"actual-file-input text-start "}
          />
        </label>
      </div>
    </div>
  );
};

const SuccessMessage = ({t, submissionSuccess}) => {

  return (
    <div className="flex flex-col gap-2 min-h-64 items-center justify-center align-center">
        <h1 className='text-3xl text-blackColor font-bold text-center'>{t('apply_success_tile')}</h1>
        
        <div className="bg-green-200 text-green-800 p-4 rounded-md">
          {t(
            'apply_success_desc',
          )}
        </div>
        <br />
        <a href="/" className=' w-fit  text-white  bg-gradient-to-r from-main to-second px-4 py-2 rounded-md'>{t('back_to_home')}</a>
    </div>
  );
};

const AdditionalInformation = ({ formData, setFormData, errors, t }) => {
  const getInputClassName = (fieldName) => {
    return `bg-fieldColor w-full px-4 py-3 text-sm placeholder-fieldText outline-none rounded-md ${
      errors[fieldName] ? 'border-2 border-red-500' : ''
    }`;
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Language Levels Section */}
      <div className="flex flex-col gap-2 mt-8">
        <h4 className="font-semibold text-md">{t('niveau_francais')}</h4>
        <div className="flex flex-row flex-wrap gap-4">
          {[
            { id: 'nu', label: t('Null') },
            { id: 'de_base', label: t('De Base') },
            { id: 'intermediaire', label: t('Intermediaire') },
            { id: 'avance', label: t('Avancé') },
          ].map((option) => (
            <label key={option.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="french_level"
                value={option.id}
                checked={formData.frenchLevel === option.id}
                onChange={(e) =>
                  setFormData({ ...formData, frenchLevel: e.target.value })
                }
                className="form-radio h-4 w-4 text-main focus:ring-main"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
        <h4 className="font-semibold text-md">{t('niveau_arabe')}</h4>
        <div className="flex flex-row flex-wrap gap-4">
          {[
            { id: 'nu', label: t('Null') },
            { id: 'de_base', label: t('De Base') },
            { id: 'intermediaire', label: t('Intermediaire') },
            { id: 'avance', label: t('Avancé') },
          ].map((option) => (
            <label key={option.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="arabic_level"
                value={option.id}
                checked={formData.arabicLevel === option.id}
                onChange={(e) =>
                  setFormData({ ...formData, arabicLevel: e.target.value })
                }
                className="form-radio h-4 w-4 text-main focus:ring-main"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
        <h4 className="font-semibold text-md">{t('niveau_anglais')}</h4>
        <div className="flex flex-row  flex-wrap gap-4">
          {[
            { id: 'nu', label: t('Null') },
            { id: 'de_base', label: t('De Base') },
            { id: 'intermediaire', label: t('Intermediaire') },
            { id: 'avance', label: t('Avancé') },
          ].map((option) => (
            <label key={option.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="english_level"
                value={option.id}
                checked={formData.englishLevel === option.id}
                onChange={(e) =>
                  setFormData({ ...formData, englishLevel: e.target.value })
                }
                className="form-radio h-4 w-4 text-main focus:ring-main"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      <br />

      {/* Additional Information Section */}
      <div className="flex flex-col gap-2 mt-8">
        <h3 className="font-semibold text-lg mb-2">{t('additional_info')}</h3>
        <div className="w-full flex flex-col gap-2">
          <h4 className="font-medium text-md">{t('ready_to_move')}</h4>
          <div className="flex flex-row gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="ready_to_move"
                value="oui"
                checked={formData.readyToMove === 'oui'}
                onChange={(e) =>
                  setFormData({ ...formData, readyToMove: e.target.value })
                }
                className="form-radio h-4 w-4 text-main focus:ring-main"
              />
              <span className="text-sm">{t('oui')}</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="ready_to_move"
                value="non"
                checked={formData.readyToMove === 'non'}
                onChange={(e) =>
                  setFormData({ ...formData, readyToMove: e.target.value })
                }
                className="form-radio h-4 w-4 text-main focus:ring-main"
              />
              <span className="text-sm">{t('non')}</span>
            </label>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h4 className="font-medium text-md">{t('reason_to_join')}</h4>
          <select
            name="reason_to_join"
            value={formData.reasonToJoin}
            onChange={(e) =>
              setFormData({ ...formData, reasonToJoin: e.target.value })
            }
            className={getInputClassName('reasonToJoin')}
          >
            <option value="" disabled>
              {t('select_reason')}
            </option>
            {[
              { id: 'enseigner', label: t('Enseigner') },
              { id: 'impact_social', label: t('Impact social') },
              { id: 'formation', label: t('Formation') },
              { id: 'autre', label: t('Autre') },
            ].map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h4 className="font-medium text-md">{t('opportunity_vision')}</h4>
          <textarea
            name="opportunity_vision"
            placeholder={t('opportunity_vision_placeholder')}
            value={formData.opportunityVision}
            onChange={(e) =>
              setFormData({ ...formData, opportunityVision: e.target.value })
            }
            className={getInputClassName('opportunityVision')}
            rows={10}
          />
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
export const ApplyPage = () => {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    title: '',
    birthday: '',
    sexe: '',
    familialSituation: '',
    nationality: '',
    currentCity: '',
    phoneNumber: '',
    alternativePhoneNumber: '',
    heareOption: '',
    university: '',
    qualification: '',
    subject: '',
    degreeTitle: '',
    debutDate: '',
    endDate: '',
    cv: null,
    diplome: null,
    frenchLevel: '',
    arabicLevel: '',
    englishLevel: '',
    readyToMove: '',
    reasonToJoin: '',
    opportunityVision: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // State for success message
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const steps = [
    'personal',
    'education',
    'additional',
  ]; // Define steps for easy reference

  const validateStep = (step) => {
    console.log("The currentStep is "+step)
    const newErrors = {};
    switch (step) {
      case 0: // Personal Information
        if (!formData.first_name) newErrors.first_name = true;
        if (!formData.last_name) newErrors.last_name = true;
        if (!formData.title) newErrors.title = true;
        if (!formData.birthday) newErrors.birthday = true;
        if (!formData.sexe) newErrors.sexe = true;
        if (!formData.familialSituation) newErrors.familialSituation = true;
        if (!formData.nationality) newErrors.nationality = true;
        if (!formData.currentCity) newErrors.currentCity = true;
        if (!formData.phoneNumber) newErrors.phoneNumber = true;
        if (!formData.alternativePhoneNumber)
          newErrors.alternativePhoneNumber = true;
        if (!formData.heareOption) newErrors.heareOption = true;
        break;
      case 1: // Education and Training
        if (!formData.university) newErrors.university = true;
        if (!formData.qualification) newErrors.qualification = true;
        if (!formData.subject) newErrors.subject = true;
        if (!formData.degreeTitle) newErrors.degreeTitle = true;
        if (!formData.debutDate) newErrors.debutDate = true;
        if (!formData.endDate) newErrors.endDate = true;
        if (!formData.cv) newErrors.cv = true;
        if (!formData.diplome) newErrors.diplome = true;
        break;
      case 2: // Additional Information
        console.log(currentStep)
        console.log(newErrors)
        if (!formData.frenchLevel) newErrors.frenchLevel = true;
        if (!formData.arabicLevel) newErrors.arabicLevel = true;
        if (!formData.englishLevel) newErrors.englishLevel = true;
        if (!formData.readyToMove) newErrors.readyToMove = true;
        if (!formData.reasonToJoin) newErrors.reasonToJoin = true;
        if (!formData.opportunityVision) newErrors.opportunityVision = true;
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const nextStep = (e) => {
    e.preventDefault()
    console.log(currentStep)
    if (validateStep(currentStep)) {
        setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e)
    setSubmitted(true)

    console.log("We are in submit")

    // Validate all fields before submitting
    if (!validateStep(2)) {
      // Assuming step 2 is the last step and all validations are done there
      return;
    }

    try {
      // Upload files to Sanity and get their asset references
      console.log('We are here');
      const cvAsset = await uploadFileToSanity(formData.cv);
      const diplomeAsset = await uploadFileToSanity(formData.diplome);

      // Prepare the data to send to Sanity
      const applicationData = {
        _type: 'application', // Schema type name
        first_name: formData.first_name,
        last_name: formData.last_name,
        title: formData.title,
        birthday: formData.birthday,
        sexe: formData.sexe,
        familialSituation: formData.familialSituation,
        nationality: formData.nationality,
        currentCity: formData.currentCity,
        phoneNumber: formData.phoneNumber,
        alternativePhoneNumber: formData.alternativePhoneNumber,
        heareOption: formData.heareOption,
        university: formData.university,
        qualification: formData.qualification,
        subject: formData.subject,
        degreeTitle: formData.degreeTitle,
        debutDate: formData.debutDate,
        endDate: formData.endDate,
        cv: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: cvAsset._id, // Reference the uploaded CV asset
          },
        },
        diplome: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: diplomeAsset._id, // Reference the uploaded diploma asset
          },
        },
        frenchLevel: formData.frenchLevel,
        arabicLevel: formData.arabicLevel,
        englishLevel: formData.englishLevel,
        readyToMove: formData.readyToMove,
        reasonToJoin: formData.reasonToJoin,
        opportunityVision: formData.opportunityVision,
      };
      
      // Send the data to Sanity
      const result = await client.create(applicationData);
      console.log('Application submitted successfully!', result);
      setCurrentStep(3);

      // Set success message
      setSubmissionSuccess(true);


      // Clear the form after successful submission (after displaying success)
      setTimeout(() => {
        setFormData({
          first_name: '',
          last_name: '',
          title: '',
          birthday: '',
          sexe: '',
          familialSituation: '',
          nationality: '',
          currentCity: '',
          phoneNumber: '',
          alternativePhoneNumber: '',
          heareOption: '',
          university: '',
          qualification: '',
          subject: '',
          degreeTitle: '',
          debutDate: '',
          endDate: '',
          cv: null,
          diplome: null,
          frenchLevel: '',
          arabicLevel: '',
          englishLevel: '',
          readyToMove: '',
          reasonToJoin: '',
          opportunityVision: '',
        });
        setErrors({}); 
      }, 3000); // Adjust the timeout as needed (e.g., 3000ms = 3 seconds)
      setSubmitted(false)
    } catch (error) {
        setSubmitted(false)
      console.error('Error submitting application:', error);
    }
  };

  // Helper function to upload files to Sanity
  const uploadFileToSanity = async (file) => {
    if (!file) return null;

    try {
      const asset = await client.assets.upload('file', file, {
        filename: file.name,
        contentType: file.type,
      });
      return asset;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };

  return (
    <section
      id="fellowship"
      className="overflow-hidden flex flex-col items-center px-28 py-12 gap-12 max-lg:p-8"
    >
      {/* {!submissionSuccess && (
        <div className="bg-green-200 text-green-800 p-4 rounded-md">
          {t(
            'Your application was submitted successfully, our team will contact you in next few days',
          )}
        </div>
      )} */}

      <form onSubmit={handleSubmit} className="w-full">
        {currentStep === 0 && (
          <PersonalInformation
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            t={t}
          />
        )}
        {currentStep === 1 && (
          <EducationAndTraining
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            t={t}
          />
        )}
        {currentStep === 2 && (
          <AdditionalInformation
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            t={t}
          />
        )}
        {currentStep === 3 && (
          <SuccessMessage
            t={t}
            submissionSuccess = {submissionSuccess}
          />
        )}

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between mt-8">
          { currentStep != 3 ? (
            <button
              type="button"
              onClick={currentStep > 0 ? prevStep : () => {}}
              className={" text-gray-700 px-6 py-3 rounded-md transition-colors " + (currentStep > 0 ? " bg-gray-200 hover:bg-gray-300 " : " opacity-50 bg-gray-300 hover:bg-gray-300")}
            >
              {t('previous')}
            </button>
          ) : (<></>)}

          {currentStep < 3 ? (
            <button
              type={currentStep < 2 ? "button" : ""}
              onClick={currentStep < 2 ? (e) => nextStep(e) : (e) => {}}
              className={"bg-main text-white px-6 py-3 rounded-md hover:bg-second transition-colors " + (submitted ? "opacitity-50" : "")}
            >
              {currentStep < 2 ? t('next') : (submitted ? t('submiting') : t('submit'))}
            </button>
          ) : (<></>)}
        </div>
      </form>
    </section>
  );
};
