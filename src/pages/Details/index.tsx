import React, { useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector,  } from 'react-redux';
import { Button, CircularProgress, Grid, Card, CardContent } from '@mui/material';
import { activeCharacterSelector } from '../../redux/selectors/charactersSelector';
import { CharacterApi } from '../../api/characters';
import { setActiveCharacter } from '../../redux/actions/setCharactersAction';
import './style.css'

export const DetailsPage = () => {
    const params = useParams()
    const character = useSelector(activeCharacterSelector)
    const dispatch = useDispatch()

    const handleGetActiveCharacter = useCallback(async () => {
        dispatch(setActiveCharacter(null))
        if (!params.id) {
            return;
        }
        const response = await CharacterApi.getCharacterById(params.id);
        const result = await response.json();
        dispatch(setActiveCharacter(result))
    }, [dispatch, params]);

    useEffect(() => {
        handleGetActiveCharacter()
    }, [handleGetActiveCharacter]);

    const renderContent = useCallback(() => {
        return (
            <Card>
                {!character ? (
                    <Grid container justifyContent="center">
                        <CircularProgress />
                    </Grid>
                ) : (
                    <CardContent>
                        <Grid container justifyContent="space-between">
                            <div>
                                <p>
                                    <b>User name</b>: {character.name}
                                </p>
                                <p>
                                    <b>Birth year</b>: {character.birth_year}
                                </p>
                                <p>
                                    <b>Gender</b>: {character.gender}
                                </p>
                                <p>
                                    <b>Eye color</b>: {character.eye_color}
                                </p>
                                <p>
                                    <b>Hair color</b>: {character.hair_color}
                                </p>
                                <p>
                                    <b>Height</b>: {character.height}
                                </p>
                                <p>
                                    <b>Mass</b>: {character.mass}
                                </p>
                                <div>
                                    <b>Skin color</b>: {character.skin_color}
                                </div>
                            </div>
                        </Grid>
                    </CardContent>
                )}
            </Card>
        )
    }, [character])

    return (
        <div className="details-page">
            <div className="container content">
                <div className="details-header">
                    <Link to="/">
                        <Button variant="contained">Go back</Button>
                    </Link>
                </div>
                {renderContent()}
            </div>
        </div>
    )
}
