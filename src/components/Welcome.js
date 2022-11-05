import React from 'react';

const Welcome = () => {
    return (
        <body className="d-flex h-100 text-center text-bg-dark">
            <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0">Welcome To VolunTier</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
                    <a class="nav-link fw-bold py-1 px-0" href="#">VolunTier Opportunities</a>
                    <a class="nav-link fw-bold py-1 px-0" href="#">Dashboard</a>
                </nav>
            </div>
            <main class="px-3">
                <h1>VolunTier: VolunGold, VolunSilver, VolunBronze</h1>
                <p class="lead">This is all about Volunteering Activities and Events</p>
                <p class="lead">
                <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                </p>
            </main>
        </header>
            </div>
        </body>
    )
}

export default Welcome;