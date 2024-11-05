import React from 'react';
import TriageSurvey from './TriageSurvey';

const VirtualTriageSurvey = () => {
    const questions = [
        {
            id: 'symptomType',
            label: 'Symptom Type',
            options: [
                { value: 'bruising', label: 'Bruising' },
                { value: 'sore-throat', label: 'Sore Throat' },
                { value: 'cough', label: 'Cough' },
                { value: 'sharp-pain', label: 'Sharp Pain' },
            ],
        },
        {
            id: 'affectedArea',
            label: 'Affected Area',
            options: [
                { value: 'chest', label: 'Chest' },
                { value: 'legs', label: 'Legs' },
                { value: 'neck', label: 'Neck' },
                { value: 'face', label: 'Face' },
                { value: 'arm', label: 'Arm' },
            ],
        },
        {
            id: 'symptomDuration',
            label: 'Duration of Symptoms',
            options: [
                { value: 'less-than-1-hour', label: 'Less than 1 hour' },
                { value: 'between-1-and-8-hours', label: 'Between 1 and 8 hours' },
                { value: 'between-8-and-24-hours', label: 'Between 8 and 24 hours' },
                { value: 'more-than-24-hours', label: 'More than 24 hours' },
            ],
        },
        {
            id: 'severity',
            label: 'Severity',
            options: [
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' },
                { value: 'extreme', label: 'Extreme' },
            ],
        },
    ];

    return <TriageSurvey questions={questions} onSubmitRedirect="/VirtualTriage" />;
};

export default VirtualTriageSurvey;
