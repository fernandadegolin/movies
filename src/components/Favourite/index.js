import React, { useState } from "react";
import fBlack from './../../assets/favourite-black.png';
import fRed from './../../assets/favourite-red.png'
import * as S from './styles';


export function Favourite () {
    const [favourite, setFavourite] = useState (false);

    function isFavourite(){
        setFavourite(!favourite);
    }

    return(
        <S.FavouriteButton onClick={isFavourite}>
            <img src={favourite ? fRed : fBlack} alt="Button favourite" />
        </S.FavouriteButton>
    )
}
