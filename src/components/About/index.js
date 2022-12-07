import React from "react";
import './about.css'

export default function About() {
        return (
            <section className="about">
                <div className="content-line">
                <div className="top-line"></div>
                <div className="bg"></div>
                </div>
                <div className="content-text">
                    <div className="text-title">
                        Um pouco sobre mim
                    </div>
                </div>
                <div className="line-content">
                <img className="line" src={require('../../assets/images/line-section.png')} alt="line"></img>
                </div>
                <div className="summary">
                    <div className="summary-text">
                        Me chamo Marcos Eduardo, tenho 22 anos, apaixonado por tecnologia desde que me entendo por gente,
                        nasci na bahia e vim para Brasília em 2021 fazer Faculdade de Análise e Desenvolvimento
                        de Sistemas na UDF.
                    </div>
                </div>
            </section>
        );
}
