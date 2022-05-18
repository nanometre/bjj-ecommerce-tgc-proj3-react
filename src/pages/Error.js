import React from "react";


export default function Error() {
    return (
        <div className="container content-container my-4">
            <div className="p-4 rounded-3 shadow-lg border border-dark">
                <h3>Something went wrong!</h3>
                <p>Check the URL or go back to the previous page.</p>
            </div>
        </div>
    )
}