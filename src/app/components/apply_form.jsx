import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import client from '../sanityClient';

export const ApplyPage = () => {
    const { t } = useTranslation();

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [title, setTitle] = useState("");
    const [birthday, setBirthday] = useState("");
    const [sexe, setSexe] = useState("");
    const [familialSituation, setFamilialSituation] = useState("");
    const [nationality, setNationality] = useState("");
    const [currentCity, setCurrentCity] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("");
    const [heareOption, setHeareOption] = useState("");
    const [university, setUniversity] = useState("");
    const [qualification, setQualification] = useState("");
    const [subject, setSubject] = useState("");
    const [degreeTitle, setDegreeTitle] = useState("");
    const [debutDate, setDebutDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [cv, setCv] = useState(null);
    const [diplome, setDiplome] = useState(null);
    const [frenchLevel, setFrenchLevel] = useState("");
    const [arabicLevel, setArabicLevel] = useState("");
    const [englishLevel, setEnglishLevel] = useState("");
    const [readyToMove, setReadyToMove] = useState("");
    const [reasonToJoin, setReasonToJoin] = useState("");
    const [opportunityVision, setOpportunityVision] = useState("");

    // State for validation errors
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate all fields
        const newErrors = {};

        console.log("We ")
    
        if (!first_name) newErrors.first_name = true;
        if (!last_name) newErrors.last_name = true;
        if (!title) newErrors.title = true;
        if (!birthday) newErrors.birthday = true;
        if (!sexe) newErrors.sexe = true;
        if (!familialSituation) newErrors.familialSituation = true;
        if (!nationality) newErrors.nationality = true;
        if (!currentCity) newErrors.currentCity = true;
        if (!phoneNumber) newErrors.phoneNumber = true;
        if (!alternativePhoneNumber) newErrors.alternativePhoneNumber = true;
        if (!heareOption) newErrors.heareOption = true;
        if (!university) newErrors.university = true;
        if (!qualification) newErrors.qualification = true;
        if (!subject) newErrors.subject = true;
        if (!degreeTitle) newErrors.degreeTitle = true;
        if (!debutDate) newErrors.debutDate = true;
        if (!endDate) newErrors.endDate = true;
        if (!cv) newErrors.cv = true;
        if (!diplome) newErrors.diplome = true;
        if (!frenchLevel) newErrors.frenchLevel = true;
        if (!arabicLevel) newErrors.arabicLevel = true;
        if (!englishLevel) newErrors.englishLevel = true;
        if (!readyToMove) newErrors.readyToMove = true;
        if (!reasonToJoin) newErrors.reasonToJoin = true;
        if (!opportunityVision) newErrors.opportunityVision = true;
    
        // If there are errors, update the state and stop submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    
        try {
            // Upload files to Sanity and get their asset references
            console.log("We are here");
            const cvAsset = await uploadFileToSanity(cv);
            const diplomeAsset = await uploadFileToSanity(diplome);
    
            // Prepare the data to send to Sanity
            const applicationData = {
                _type: 'application', // Schema type name
                first_name,
                last_name,
                title,
                birthday,
                sexe,
                familialSituation,
                nationality,
                currentCity,
                phoneNumber,
                alternativePhoneNumber,
                heareOption,
                university,
                qualification,
                subject,
                degreeTitle,
                debutDate,
                endDate,
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
                frenchLevel,
                arabicLevel,
                englishLevel,
                readyToMove,
                reasonToJoin,
                opportunityVision,
            };
    
            // Send the data to Sanity
            const result = await client.create(applicationData);
            console.log('Application submitted successfully!', result);
    
            // Clear the form after successful submission
            setFirstName("");
            setLastName("");
            setTitle("");
            setBirthday("");
            setSexe("");
            setFamilialSituation("");
            setNationality("");
            setCurrentCity("");
            setPhoneNumber("");
            setAlternativePhoneNumber("");
            setHeareOption("");
            setUniversity("");
            setQualification("");
            setSubject("");
            setDegreeTitle("");
            setDebutDate("");
            setEndDate("");
            setCv(null);
            setDiplome(null);
            setFrenchLevel("");
            setArabicLevel("");
            setEnglishLevel("");
            setReadyToMove("");
            setReasonToJoin("");
            setOpportunityVision("");
            setErrors({}); // Clear any previous errors
        } catch (error) {
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

    // Function to add red border to empty fields
    const getInputClassName = (fieldName) => {
        return `bg-fieldColor w-full px-4 py-3 text-sm placeholder-fieldText outline-none rounded-md ${
            errors[fieldName] ? "border-2 border-red-500" : ""
        }`;
    };

    return (
        <section id="fellowship" className='overflow-hidden flex flex-col items-center px-28 py-12 gap-12 max-lg:p-8'>
            <form onSubmit={handleSubmit} className='w-full'>
                {/* Personal Information Section */}
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-lg mb-2'>{t('Informations personnelles')}</h3>
                    <div className='w-full flex flex-row gap-4'>
                        <input
                            type="text"
                            name='first_name'
                            placeholder={t('first_name')}
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            className={getInputClassName("first_name")}
                        />
                        <input
                            type="text"
                            name='last_name'
                            placeholder={t('last_name')}
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            className={getInputClassName("last_name")}
                        />
                    </div>
                    <div className='w-full flex flex-row gap-4'>
                        <input
                            type="text"
                            name='title'
                            placeholder={t('title')}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={getInputClassName("title")}
                        />
                        <input
                            type="date"
                            name='birthday'
                            placeholder={t('bithday')}
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            className={getInputClassName("birthday")}
                        />
                    </div>
                    <div className='w-full flex flex-row gap-4'>
                        <select
                            name='sexe'
                            value={sexe}
                            onChange={(e) => setSexe(e.target.value)}
                            className={getInputClassName("sexe")}
                        >
                            <option value="" disabled>{t('sexe')}</option>
                            <option value="Male">{t('male')}</option>
                            <option value="Female">{t('female')}</option>
                        </select>
                        <input
                            type="text"
                            name='familial_situation'
                            placeholder={t('familial_situation')}
                            value={familialSituation}
                            onChange={(e) => setFamilialSituation(e.target.value)}
                            className={getInputClassName("familialSituation")}
                        />
                    </div>
                    <div className='w-full flex flex-row gap-4'>
                        <input
                            type="text"
                            name='nationality'
                            placeholder={t('nationality')}
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                            className={getInputClassName("nationality")}
                        />
                        <input
                            type="text"
                            name='current_city'
                            placeholder={t('current_city')}
                            value={currentCity}
                            onChange={(e) => setCurrentCity(e.target.value)}
                            className={getInputClassName("currentCity")}
                        />
                    </div>
                    <div className='w-full flex flex-row gap-4'>
                        <input
                            type="tel"
                            name='phone_number'
                            placeholder={t('phone_number')}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className={getInputClassName("phoneNumber")}
                        />
                        <input
                            type="tel"
                            name='alternative_phone_number'
                            placeholder={t('alternative_phone_number')}
                            value={alternativePhoneNumber}
                            onChange={(e) => setAlternativePhoneNumber(e.target.value)}
                            className={getInputClassName("alternativePhoneNumber")}
                        />
                    </div>
                    <p>{t('apply_p_2')}</p>
                    <div>
                        <div className="flex flex-row flex-wrap gap-4">
                            {[
                                { id: "facebook", label: t("Facebook") },
                                { id: "instagram", label: t("Instagram") },
                                { id: "linkedin", label: t("LinkedIn") },
                                { id: "evenement", label: t("Evenement Teach for Mauritania") },
                                { id: "alumni", label: t("Alumni") },
                                { id: "autres", label: t("Autres") },
                            ].map((option) => (
                                <label key={option.id} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="source"
                                        value={option.id}
                                        checked={heareOption === option.id}
                                        onChange={(e) => setHeareOption(e.target.value)}
                                        className="form-radio h-4 w-4 text-main focus:ring-main"
                                    />
                                    <span className="text-sm">{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education and Training Section */}
                <div className='flex flex-col gap-2 mt-8'>
                    <h3 className='font-semibold text-lg mb-2'>{t('formation_education')}</h3>
                    <div className='w-full flex flex-row gap-4'>
                        <input
                            type="text"
                            name='university'
                            placeholder={t('university')}
                            value={university}
                            onChange={(e) => setUniversity(e.target.value)}
                            className={getInputClassName("university")}
                        />
                        <input
                            type="text"
                            name='qualification'
                            placeholder={t('qualification')}
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            className={getInputClassName("qualification")}
                        />
                    </div>
                    <div className='w-full flex flex-row gap-4'>
                        <input
                            type="text"
                            name='subject'
                            placeholder={t('subject')}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className={getInputClassName("subject")}
                        />
                        <input
                            type="text"
                            name='degree_title'
                            placeholder={t('degree_title')}
                            value={degreeTitle}
                            onChange={(e) => setDegreeTitle(e.target.value)}
                            className={getInputClassName("degreeTitle")}
                        />
                    </div>
                    <div className='w-full flex flex-row gap-4'>
                        <input
                            type="date"
                            name='debut_date'
                            placeholder={t('debut_date')}
                            value={debutDate}
                            onChange={(e) => setDebutDate(e.target.value)}
                            className={getInputClassName("debutDate")}
                        />
                        <input
                            type="date"
                            name='end_date'
                            placeholder={t('end_date')}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className={getInputClassName("endDate")}
                        />
                    </div>
                    <div className='w-full flex flex-row gap-4'>
                        <input
                            type="file"
                            name='cv'
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setCv(e.target.files[0])}
                            className={getInputClassName("cv")}
                        />
                        <input
                            type="file"
                            name='diplome'
                            accept=".pdf"
                            onChange={(e) => setDiplome(e.target.files[0])}
                            className={getInputClassName("diplome")}
                        />
                    </div>
                </div>

                {/* Language Levels Section */}
                <div className='flex flex-col gap-2 mt-8'>
                    <h4 className='font-semibold text-md'>{t('niveau_francais')}</h4>
                    <div className="flex flex-row flex-wrap gap-4">
                        {[
                            { id: "nu", label: t("Null") },
                            { id: "de_base", label: t("De Base") },
                            { id: "intermediaire", label: t("Intermediaire") },
                            { id: "avance", label: t("Avancé") },
                        ].map((option) => (
                            <label key={option.id} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="french_level"
                                    value={option.id}
                                    checked={frenchLevel === option.id}
                                    onChange={(e) => setFrenchLevel(e.target.value)}
                                    className="form-radio h-4 w-4 text-main focus:ring-main"
                                />
                                <span className="text-sm">{option.label}</span>
                            </label>
                        ))}
                    </div>
                    <h4 className='font-semibold text-md'>{t('niveau_arabe')}</h4>
                    <div className="flex flex-row flex-wrap gap-4">
                        {[
                            { id: "nu", label: t("Null") },
                            { id: "de_base", label: t("De Base") },
                            { id: "intermediaire", label: t("Intermediaire") },
                            { id: "avance", label: t("Avancé") },
                        ].map((option) => (
                            <label key={option.id} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="arabic_level"
                                    value={option.id}
                                    checked={arabicLevel === option.id}
                                    onChange={(e) => setArabicLevel(e.target.value)}
                                    className="form-radio h-4 w-4 text-main focus:ring-main"
                                />
                                <span className="text-sm">{option.label}</span>
                            </label>
                        ))}
                    </div>
                    <h4 className='font-semibold text-md'>{t('niveau_anglais')}</h4>
                    <div className="flex flex-row  flex-wrap gap-4">
                        {[
                            { id: "nu", label: t("Null") },
                            { id: "de_base", label: t("De Base") },
                            { id: "intermediaire", label: t("Intermediaire") },
                            { id: "avance", label: t("Avancé") },
                        ].map((option) => (
                            <label key={option.id} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="english_level"
                                    value={option.id}
                                    checked={englishLevel === option.id}
                                    onChange={(e) => setEnglishLevel(e.target.value)}
                                    className="form-radio h-4 w-4 text-main focus:ring-main"
                                />
                                <span className="text-sm">{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <br />

                {/* Additional Information Section */}
                <div className='flex flex-col gap-2 mt-8'>
                    <h3 className='font-semibold text-lg mb-2'>{t('additional_info')}</h3>
                    <div className='w-full flex flex-col gap-2'>
                        <h4 className='font-medium text-md'>{t('ready_to_move')}</h4>
                        <div className="flex flex-row gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="ready_to_move"
                                    value="oui"
                                    checked={readyToMove === "oui"}
                                    onChange={(e) => setReadyToMove(e.target.value)}
                                    className="form-radio h-4 w-4 text-main focus:ring-main"
                                />
                                <span className="text-sm">{t('oui')}</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="ready_to_move"
                                    value="non"
                                    checked={readyToMove === "non"}
                                    onChange={(e) => setReadyToMove(e.target.value)}
                                    className="form-radio h-4 w-4 text-main focus:ring-main"
                                />
                                <span className="text-sm">{t('non')}</span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <h4 className='font-medium text-md'>{t('reason_to_join')}</h4>
                        <select
                            name='reason_to_join'
                            value={reasonToJoin}
                            onChange={(e) => setReasonToJoin(e.target.value)}
                            className={getInputClassName("reasonToJoin")}
                        >
                            <option value="" disabled>{t('select_reason')}</option>
                            {[
                                { id: "enseigner", label: t("Enseigner") },
                                { id: "impact_social", label: t("Impact social") },
                                { id: "formation", label: t("Formation") },
                                { id: "autre", label: t("Autre") },
                            ].map((option) => (
                                <option key={option.id} value={option.id}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <h4 className='font-medium text-md'>{t('opportunity_vision')}</h4>
                        <textarea
                            name='opportunity_vision'
                            placeholder={t('opportunity_vision_placeholder')}
                            value={opportunityVision}
                            onChange={(e) => setOpportunityVision(e.target.value)}
                            className={getInputClassName("opportunityVision")}
                            rows={10}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className='w-full flex justify-center mt-8'>
                    <button
                        type="submit"
                        className='bg-main text-white px-6 py-3 rounded-md hover:bg-second transition-colors'
                    >
                        {t('apply_button')}
                    </button>
                </div>
            </form>
        </section>
    );
};

