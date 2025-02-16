import React from 'react';
import { Link } from 'react-router-dom';
import { LinearGradient } from 'react-text-gradients'
import { RadialGradient } from 'react-text-gradients'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundColor: 'lightblue'
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-3 text-3xl font-bold">
          <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
          Identify Duplicity in Project Proposals
           </LinearGradient>
          </h1>
          <p className="mb-5">
            Ensure the originality of your project proposals with our advanced duplicity detection tool. Detect potential copying or overlap in proposals and safeguard your ideas before submission.
          </p>
            <Link to="/hero2">
            <button className="btn btn-primary">Analyze Proposal</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
