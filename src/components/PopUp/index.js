import React from 'react';
import {
    BackgroundImage,
    BackgroundOverlay,
    BackgroundPoster,
    BackMovieTitle,
    BackOverview,
    CloseButton,
    PopUpWrapper
} from "./style";

const PopUp = ({setIsPopupOpen, selectedMovie}) => {
    console.log(selectedMovie)

    const handleClose = () => {
        setIsPopupOpen(false);
    }

    return (
        <PopUpWrapper>
           {/*   <CloseButton onClick={() => handleClose()}>X </CloseButton>
            <div>
                {selectedMovie.title} {selectedMovie.overview}
            </div>*/}

            <BackgroundPoster src={"https://image.tmdb.org/t/p/w500/" + selectedMovie.poster_path}/>
            <BackMovieTitle>{selectedMovie?.title}</BackMovieTitle>
            <BackgroundImage src={"https://image.tmdb.org/t/p/w500/" + selectedMovie.backdrop_path}/>
            <BackOverview/>
           <BackgroundOverlay/>
        </PopUpWrapper>
    );

}
export default PopUp;