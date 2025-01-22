import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [years, setYears] = useState(0);
  const [patients, setPatients] = useState(0);
  const [surgeries, setSurgeries] = useState(0);
  const [awards, setAwards] = useState(0);

  const animateCounter = (setState, targetValue, duration) => {
    const stepCount = 100; // Number of animation steps
    const stepTime = duration / stepCount; // Time per step
    const increment = targetValue / stepCount;

    let currentValue = 0;

    const incrementCounter = () => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        setState(Math.round(targetValue));
      } else {
        setState(Math.round(currentValue));
        setTimeout(incrementCounter, stepTime);
      }
    };
    incrementCounter();
  };

  useEffect(() => {
    const duration = 2000; // Set the same duration for all counters
    animateCounter(setYears, 23, duration);
    animateCounter(setPatients, 40000, duration);
    animateCounter(setSurgeries, 25000, duration);
    animateCounter(setAwards, 12, duration);
  }, []);

  return (
    <>
      <div className="counter-parent">
        <div className="counter-sub-parent">
          <div className="row p-0 m-0">
            <div className="col-md-6">
              <div className="d-flex gap-5 align-items-center">
                <h3 className="text-white">{years}+ </h3>
                <h2>
                  Years Excellence in <br />
                  Orthopedics
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="counter-content">
                <div>
                  <h2>{patients}+</h2>
                  <p className="text-danger">Happy Patients</p>
                </div>
                <div>
                  <h2>{surgeries}+</h2>
                  <p className="text-danger">Ortho Surgeries</p>
                </div>
                <div>
                  <h2>{awards}</h2>
                  <p className="text-danger">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
