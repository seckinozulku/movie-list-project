import React from 'react';
import Menu from "../../components/HomeMenu";
import MovieList from "../../components/MovieList";
import {Content, ContentWrapper} from "../../components/layout/style";

const Home = () => {
    return (
        <>
            <Menu/>
            <div style={{background: "red", margin: "90px 40px 0 40px"}}>Search componenti burada olacak</div>
            <Content>
                <ContentWrapper size={20}>
                    Filtre componenti burada olacak
                </ContentWrapper>
                <ContentWrapper size={80}>
                    <MovieList/>
                </ContentWrapper>
            </Content>
        </>
    );
};

export default Home;
