import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const TriageSurvey = ({ questions, onSubmitRedirect }) => {
    const [submitted, setSubmitted] = useState(false);
    const [responses, setResponses] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponses(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Redirect
                to={{
                    pathname: onSubmitRedirect,
                    state: { responses },
                }}
            />
        );
    }

    return (
        <div className="survey-container">
            <h2>Symptom Questionnaire</h2>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div className="form-grouping" key={index}>
                        <label htmlFor={question.id} className="form-group-label">{question.label}</label>
                        <select
                            id={question.id}
                            name={question.id}
                            className="survey-dropdown"
                            value={responses[question.id] || ''}
                            onChange={handleChange}
                        >
                            <option value="">Select {question.label.toLowerCase()}</option>
                            {question.options.map((option, idx) => (
                                <option key={idx} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                ))}
                <button type="submit" className="home-screen-buttons">Submit Survey</button>
            </form>
        </div>
    );
};

export default TriageSurvey;
