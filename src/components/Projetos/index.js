import React, { useState } from "react";
import './style.css'

export default function Projetos() {
    
    const [list] = useState([
        { 
            id: 0,
            titulo: 'Blog Js',
            texto: 'Neste projeto criei um blog com autenticação de usuário (ADM) utilizando node js + ejs como view engine',
            img: require('../../assets/images/blogScript.png'),
            class: 'active'
        },
        {
            id: 1,
            titulo: 'Perguntas Anônimas',
            texto: 'Neste projeto foi criado um pequeno sistema de perguntas e respostas com Node.js, Express e Sequelize',
            img: require('../../assets/images/guiaPerguntas.png'),
            class: ''
        },
        {
            id: 2,
            titulo: 'NTO API',
            texto: 'Projeto que ainda não foi finalizando, estou criando uma api com node js utilizando o mongodb de um anime que gosto chamado Naruto, nele pretendo adicionar os personagens do anime e criar vários end-points para uma melhor busca',
            img: require('../../assets/images/ntoApi.png'),
            class: ''
        },
        { 
            id: 3,
            titulo: 'Cyberfront',
            texto: 'Projeto que foi feito recenmente de uma landing page utilizando react js, peguei como base um site de uma série recente que saiu na netflix, chamando cyberpunk edgerunnes. Vale ressaltar que também peguei ele como base para o meu portifólio',
            img: require('../../assets/images/cyberpunk.png'),
            class: ''
        },
        { 
            id: 4,
            titulo: 'Back-end sistema de garçom',
            texto: 'Sistema de pedidos para anotar pedidos para restaurante feito no evento O poder do javascript, neste projeto utilizei typescript confesso que foi minha primeira vez e achei muito interessante.',
            img: require('../../assets/images/restrant.png'),
            class: ''
        },
    ])

    const [imagem, setImagem] = useState(require('../../assets/images/blogScript.png'))
    const [titulo, setTitulo] = useState(list[0].titulo)
    const [texto, setTexto] = useState(list[0].texto)
    
    function mudarConteudo(i) {
        list.forEach(id => {
            if(i === id.id) {
                setTitulo(id.titulo)
                setTexto(id.texto)
                setImagem(id.img)
                id.class = 'active'
            } else {
                id.class = ''
            }
          
        })
    }
            
        return (
            <section className="projects">
                <div className="line-black-projects">fdfdf</div>
                <div className="title-projects">Projetos pessoais</div>
                <div className="content-simple-line">
                <div className="simple-line-separate"></div>
                </div>
                <div className="content-projects">
                    <div className="list">
                            {
                                list.map((item, index) => (
                                    <div key={index} className="list-item">
                                    <p className={item.class} onClick={() => mudarConteudo(index)}>{item.titulo}</p>
                                    </div>
                                ))
                            }
                    </div>
                    <div className="about-projects">
                        <div className="img-for-projects">
                        <img src={imagem} alt="imagem"></img>
                        </div>
                        <h4 className="title-about-img">{titulo}</h4>
                        <p className="text-about-img">{texto}</p>
                    </div>
                </div>
                <div className="content-simple-line">
                <div className="simple-line-separate"></div>
                </div>
            </section>
        );
}