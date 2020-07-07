import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Form = ({saveSearchLyrics}) => {

    const [search, saveSearch]= useState({
        artist:'',
        song:''
    });

    const [error, saveError] = useState(false);

    const {artist, song}= search;

    //función a cada input para leer su contenido
    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    //consultar las apis
    const searchInformation = e =>{
        e.preventDefault();

        if(artist.trim() === '' || song.trim() ===''){
            saveError(true);
            return;
        }

        saveError(false);
        //fine, pasar al componente  principal
        saveSearchLyrics(search);
    }
    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={searchInformation}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre Canción"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

Form.propTypes = {
    saveSearchLyrics: PropTypes.func.isRequired
}

export default Form;