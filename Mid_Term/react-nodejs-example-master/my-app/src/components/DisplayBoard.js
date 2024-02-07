import React from 'react'

export const DisplayBoard = ({numberOfMovies, getAllMovies}) => {
 
    return(
        <div style={{backgroundColor:'lime', borderRadius:'47px',}} className="display-board">
            <h4 style={{color: 'white', textAlign: 'center'}}>Movies Created</h4>
            <div className="number">
            {numberOfMovies}
            </div>
            <div className="btn" style={{display:'block'}} >
            <button  type="button" onClick={(e) => getAllMovies()} className="btn btn-warning">Get all Movies</button>
            </div>
        </div>
    )
}

