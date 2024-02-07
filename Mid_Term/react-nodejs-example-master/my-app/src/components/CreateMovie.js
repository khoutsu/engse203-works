import React from 'react'

const CreateMovie = ({ onChangeForm, createMovie }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Create Movie</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label htmlFor="title">Title</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="title" id="title" aria-describedby="Movie Title" placeholder="Movie Title" />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="genre">Genre</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="genre" id="genre"  placeholder="Movie Genre" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="director">Director</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="director" id="director "  placeholder="Movie Director" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="release_year">Release Year</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="release_year" id="release_year"  placeholder="Release Year" />
                            </div>
                        </div>
                        <button type="button" onClick={(e) => createMovie()} className="btn btn-danger">Create</button>
                        
                    </form> 
                </div>
            </div>
        </div>
    );
};

export default CreateMovie;
