import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid, CircularProgress, CardContent, Button } from '@mui/material';
import { CharacterApi } from '../../api/characters';
import { Header } from '../../components/Header';
import { setCharacters, setNextCharacters } from '../../redux/actions/setCharactersAction';
import { charactersPaginationQueryParamsSelector, charactersSelector, charactersTotalSelector } from '../../redux/selectors/charactersSelector';
import { Link } from 'react-router-dom';


export const MainPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const characters = useSelector(charactersSelector)
    const charactersTotal = useSelector(charactersTotalSelector)
    const charactersPaginationQueryParams = useSelector(charactersPaginationQueryParamsSelector)
    const dispatch = useDispatch()

    const handleChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchValue(e.target.value)
    }, [setSearchValue]);

    const requestCharacters = useCallback(async (params?: string) => {
        const response = await CharacterApi.getCharactersAll(params || '');
        const data = await response.json();
        const queryParamsNext = (data.next || '').match(/\?.+/g);
        if (params) {
            dispatch(setNextCharacters(data.results, data.count, queryParamsNext ? queryParamsNext[0] : ''))
        } else {
            dispatch(setCharacters(data.results, data.count, queryParamsNext ? queryParamsNext[0] : ''))
        }
    }, [dispatch]);

    useEffect(() => {
        requestCharacters();
    }, [requestCharacters]);

    const handleClickNextData = useCallback(() => {
        requestCharacters(charactersPaginationQueryParams);
    }, [charactersPaginationQueryParams, requestCharacters])

    const renderCharacters = useCallback(() => {
        if (!characters || !characters.length) {
            return (
                <Grid container justifyContent="center">
                    <CircularProgress />
                </Grid>
            )
        }

        return (
            <Grid container spacing={2}>
                {characters.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                    <Grid item xs={6} md={6} key={item.name}>
                        <Link to={`/character/${item.id}`}>
                            <Card className="card">
                                <CardContent>
                                    <p>
                                        <b>Name</b>: {item.name}
                                    </p>
                                    <p>
                                        <b>Eye Color</b>: {item.eye_color}
                                    </p>
                                    <p>
                                        <b>Eye Color</b>: {item.eye_color}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
                {charactersTotal > characters.length && (
                    <div className="card-list__next-button">
                        <Grid justifyContent="center" container>
                            <Button variant="contained" onClick={handleClickNextData}>Load next data</Button>
                        </Grid>
                    </div>
                )}
            </Grid>
        )
    }, [characters, charactersTotal, searchValue, handleClickNextData]);
    
    return (
        <div>
            <Header searchValue={searchValue} onChangeSearch={handleChangeSearch} />
            <div className="container content">
                {renderCharacters()}
            </div>
        </div>
    )
}
