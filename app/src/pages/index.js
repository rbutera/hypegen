import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <section className="hero is-dark is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">Coming Soon</h1>
          <h2 className="subtitle">
            <strong>Hypegen</strong> (aka. <em>Hype Generator</em>) is a landing
            page starter kit designed to get your ideas off the ground.
          </h2>
          <div className="box">
            <div className="field is-grouped">
              <div className="control has-icons-left has-icons-right is-expanded">
                <input
                  className="input is-large"
                  type="text"
                  placeholder="Enter your email"
                />
                <span className="icon is-large is-left">
                  <i className="fas fa-envelope" />
                </span>
              </div>
              <div className="control">
                <a className="button is-large is-primary is-rounded">
                  Notify Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IndexPage;
