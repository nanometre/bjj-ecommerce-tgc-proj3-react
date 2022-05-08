import React from "react";

export default function Footer() {
    return (
        <React.Fragment>
            {/* Page Footer */}
            <footer className="bg-dark text-center text-white flex-shrink-0">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Email */}
                        <a className="btn btn-outline-light m-1" target="_blank" rel="noreferrer noopener"
                            href="mailto:benedictwcy@hotmail.com" role="button">Email Icon</a>

                        {/* Linkedin */}
                        <a className="btn btn-outline-light m-1" target="_blank" rel="noreferrer noopener"
                            href="https://www.linkedin.com/in/benedictwcy/" role="button">LinkedIn Icon</a>

                        {/* Github */}
                        <a className="btn btn-outline-light m-1" target="_blank" rel="noreferrer noopener"
                            href="https://github.com/nanometre" role="button">Github Icon</a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}

                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © {new Date().getFullYear()} nanometre. For educational purpose only.
                </div>
                {/* Copyright */}
            </footer>
            {/* Page Footer */}
        </React.Fragment>
    )
}