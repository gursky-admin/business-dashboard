import React from "react";
import { Tag } from 'primereact/tag';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export const Services = (props) => {
    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Get To Know Me</h2>
                </div>
                <div className="row">
                    {props.data2
                        ? props.data2.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-4">
                                {" "}
                                {/*<i className={d.icon}></i>*/}
                                <div className="service-desc">
                                    <h3>{d.name}</h3>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>

                <div className="section-title">
                    <h2>Individual Therapy Services</h2>
                </div>
                <div className="card flex flex-wrap justify-content-center gap-2">
                    <Tag value="Anxiety" className="services-tag" severity="info" rounded></Tag>
                    <Tag value="Depression" className="services-tag" severity="info" rounded></Tag>
                    <Tag value="Aging" className="services-tag" severity="info" rounded></Tag>
                    <Tag value="Caregiver Issues" className="services-tag"  severity="info" rounded></Tag>
                    <Tag value="Chronic Illness" className="services-tag"  severity="info" rounded></Tag>
                    <Tag value="Coping Skills" className="services-tag"  severity="info" rounded></Tag>
                    <Tag value="Life Transitions" className="services-tag"  severity="info" rounded></Tag>
                    <Tag value="Mindfulness" className="services-tag" severity="info" rounded></Tag>
                    <Tag value="Grief" className="services-tag" severity="info" rounded></Tag>
                </div>


                <div className="row">
                    <div className="service-desc">
                        <h3>Approaches</h3>
                    </div>
                    <ul className="approaches">
                        <li>Cognitive Behavioral Therapy (CBT)</li>
                        <li>Acceptance and Commitment (ACT)</li>
                        <li>Person-Centered</li>
                        <li>Strength-Based</li>
                        <li>Motivational Interviewing</li>
                        <li>Solution Focused Brief (SFBT)</li>
                        <li>Eclectic</li>
                    </ul>
                    <div className="service-desc">
                        <h3>Insurance Accepted</h3>
                    </div>
                    <ul className="approaches">
                        <li>Premera Blue Cross</li>
                        <li>Kaiser Permanente</li>
                        <li>Kaiser Permanente NW</li>
                        <li>United Healthcare</li>
                        <li>Medicare</li>
                    </ul>
                    <div className="service-desc">
                        <h3>Fees</h3>
                    </div>
                    <ul className="approaches">
                        <li>Insurance (Amt based on coverage/benefits): $150</li>
                        <li>Private Pay: $150</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};
