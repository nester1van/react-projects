import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Проекты на React</h1>
            <h2>Random dog picture</h2>
            <p>
                Выводится случайная фотография собаки.
                <br/>
                Отображается статус выполнения запроса к серверу посредстом {}
                <a 
                    href="https://dog.ceo/dog-api/" 
                    className="linkApi"
                    target="_blank" 
                    rel="noopener noreferrer">
                        DOG REST API
                </a>
            </p>
            <h2>Get picture by breed</h2>
            <p>
                Выводится заданное количество случайных фотографий собак выбранной породы.
                <br/>
                Используется {}
                <a 
                    href="https://dog.ceo/dog-api/" 
                    className="linkApi"
                    target="_blank" 
                    rel="noopener noreferrer">
                        DOG REST API
                </a>
            </p>
            <h2>Github client</h2>
            <p>
                Реализован интерфейс доступа к разделам GitHub:
                User information, Followers, Followings, Repositories, Zen.
                <br/>
                Используeтся {}
                <a 
                    href="https://developer.github.com/v3/" 
                    className="linkApi"
                    target="_blank" 
                    rel="noopener noreferrer">
                        GitHub REST API v3
                </a>                
            </p>
        </div>
    )
}

export default Home;