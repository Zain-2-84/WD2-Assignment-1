import "./styles/card.css";
import React from "react";

function Card () {
    return (
        <main className="cardHolder">
            <div className="card">
                <div className="card-header"></div>
                <div className="card-avatar">
                    <img src="../public/images/default_github_profile_icon" alt="" srcset="" />
                </div>
                <div className="card-info">
                    <div className="card-info__default">
                        <section>
                            <h3>Alhaan</h3>
                            <p>Age: 26</p>
                        </section>

                        <span>
                            <p>Location: Karachi</p>
                        </span>
                    </div>
                    <div className="line-break"></div>
                    <div className="card-info__expand">
                        <div>
                            <span>
                                <p className="float-left">
                                    Followers
                                    </p>
                                <p className="number">2K</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p className="float-left">
                                    Likes
                                    </p>
                                <p className="number">10K</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Card;