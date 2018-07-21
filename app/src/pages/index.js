import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">Coming Soon</h1>
          <h2 className="subtitle">
            Hypegen (aka. <em>Hype Generator</em>) is a landing page starter kit
            designed to get your ideas off the ground.
          </h2>
          <h2 className="subtitle">
            Sign up to be one of the first to get access to our closed beta
            program.
          </h2>
          <div className="box">
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your email"
                />
              </p>
              <p className="control">
                <a className="button is-info">Notify Me</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IndexPage;
