import React from "react";
import "./SpaceLoader.css";

const SpaceLoader: React.FC = () => {
  return (
    <div className="space-loader mx-auto shadow-2xl">
      <div className="astronaut">
        <div className="astronaut-helmet">
          <div className="helmet-glass">
            <div className="helmet-inner-glass"></div>
            <div className="helmet-reflection"></div>
          </div>
          <div className="antenna"></div>
        </div>
        <div className="astronaut-body">
          <div className="suit-pattern"></div>
          <div className="suit-details"></div>
          <div className="backpack">
            <div className="tank tank-1"></div>
            <div className="tank tank-2"></div>
            <div className="pipe"></div>
          </div>
          <div className="arm arm-left">
            <div className="glove"></div>
          </div>
          <div className="arm arm-right">
            <div className="glove"></div>
          </div>
          <div className="leg leg-left">
            <div className="boot"></div>
          </div>
          <div className="leg leg-right">
            <div className="boot"></div>
          </div>
        </div>
      </div>

      <div className="space-environment">
        <div className="stars-container">
          <div className="stars stars-near"></div>
          <div className="stars stars-mid"></div>
          <div className="stars stars-far"></div>
        </div>

        <div className="planets">
          <div className="planet planet-1">
            <div className="planet-ring"></div>
            <div className="planet-crater"></div>
          </div>
          <div className="planet planet-2">
            <div className="planet-atmosphere"></div>
          </div>
        </div>

        <div className="meteors">
          <div className="meteor meteor-1"></div>
          <div className="meteor meteor-2"></div>
          <div className="meteor meteor-3"></div>
        </div>

        <div className="orbit-paths">
          <div className="orbit-path path-1"></div>
          <div className="orbit-path path-2"></div>
          <div className="orbit-path path-3"></div>
        </div>
      </div>

      <div className="loading-container">
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
        <div className="loading-text text-xs tracking-widest font-mono">
          CONNECTING TO READER LMS<span>.</span><span>.</span><span>.</span>
        </div>
      </div>
    </div>
  );
};

export default SpaceLoader;
