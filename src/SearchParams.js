import React from 'react';
import { useState } from 'react';
const SearchParams = () => {

    const [location , setLocation] = useState("Seattle WA");
    
    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} onChange={e=>setLocation(e.target.value)} placeholder="Location" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchParams
